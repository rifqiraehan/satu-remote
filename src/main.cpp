#include <WiFi.h>
#include <DNSServer.h>
#include <ESPmDNS.h>
#include <ESPAsyncWebServer.h>
#include <LittleFS.h>
#include <ArduinoJson.h>
#include <IRremoteESP8266.h>
#include <IRsend.h>
#include <ir_Coolix.h>
#include <IRrecv.h>

char apSSID[33] = "saturemote";
char apPassword[64] = "saturemote";
const char* configFilePath = "/wifi_config.txt";

const byte DNS_PORT = 53;
DNSServer dnsServer;
AsyncWebServer server(80);

String outputState = "off";
const int ledPin = 2;
const uint16_t kIrLed = 21;    // SEND pin
const uint16_t kRecvPin = 35;   // RECEIVE pin
const uint16_t kRecvBufferSize = 1024;

const int buzzerPin = 18; // connect Positive of Active Buzzer to GPIO 5
bool isBuzzerActive = false;
unsigned long lastBuzzerToggle = 0;
const unsigned long buzzerInterval = 500;

IRsend irsend(kIrLed);
IRrecv irrecv(kRecvPin, kRecvBufferSize, 50, true); // 50ms timeout, enable LED feedback
decode_results results; // To store the decoded results

bool isLearningMode = false;

// convert protocal name to enum
decode_type_t getProtocolEnum(String protocolName) {
  if (protocolName == "NEC") return NEC;
  if (protocolName == "SONY") return SONY;
  if (protocolName == "RC5") return RC5;
  if (protocolName == "RC6") return RC6;
  if (protocolName == "PANASONIC") return PANASONIC;
  if (protocolName == "PANASONIC_AC") return PANASONIC_AC;
  if (protocolName == "LG") return LG;
  if (protocolName == "JVC") return JVC;
  if (protocolName == "SAMSUNG") return SAMSUNG;
  if (protocolName == "COOLIX") return COOLIX;
  if (protocolName == "EPSON") return EPSON;

  return UNKNOWN;
}

// convert protocol enum to a String
String typeToString(decode_type_t protocol) {
  switch (protocol) {
    case NEC: return "NEC";
    case SONY: return "SONY";
    case RC5: return "RC5";
    case RC6: return "RC6";
    case PANASONIC: return "PANASONIC";
    case PANASONIC_AC: return "PANASONIC_AC";
    case LG: return "LG";
    case JVC: return "JVC";
    case SAMSUNG: return "SAMSUNG";
    case COOLIX: return "COOLIX";
    case EPSON: return "EPSON";
    case UNKNOWN:
    default: return "UNKNOWN";
  }
}

IRCoolixAC ac(kIrLed);

void sendAcCommand(String protocol, String power, String mode, int temp) {
  if (protocol != "COOLIX") {
    Serial.println("Error: AC protocol not supported yet.");
    return;
  }

  ac.begin(); // Reset state

  if (power == "on") {
    ac.on();
  } else {
    ac.off();
  }

  if (mode == "snow") {
    ac.setMode(kCoolixCool);
  } else if (mode == "fan") {
    ac.setMode(kCoolixFan);
  } // ...

  ac.setTemp(temp);
  ac.setFan(kCoolixFanAuto); // auto fan

  ac.send();
  Serial.println("AC command sent.");
}

void trimQuotes(String &s) {
  if (s.length() > 0) {
    if (s.startsWith("\"")) {
      s = s.substring(1);
    }
    if (s.endsWith("\"")) {
      s = s.substring(0, s.length() - 1);
    }
  }
}

bool writeWifiConfig(const char* ssid, const char* password) {
  File file = LittleFS.open(configFilePath, "w");
  if (!file) {
    Serial.println("Failed to open config file for writing");
    return false;
  }

  size_t bytesWritten = 0;
  bytesWritten += file.print(ssid);
  bytesWritten += file.print(",");
  bytesWritten += file.println(password);

  file.close();

  if (bytesWritten >= (strlen(ssid) + 1 + strlen(password))) {
    Serial.println("Config file written successfully");
    return true;
  } else {
    Serial.println("Error writing to config file (write operation failed)");
    return false;
  }
}

void readWifiConfig() {
  if (LittleFS.exists(configFilePath)) {
    File file = LittleFS.open(configFilePath, "r");
    if (file) {
      String line = file.readStringUntil('\n');
      line.trim();
      file.close();

      int commaIndex = line.indexOf(',');
      if (commaIndex != -1) {

        String ssidStr = line.substring(0, commaIndex);
        String passStr = line.substring(commaIndex + 1);

        trimQuotes(ssidStr);
        trimQuotes(passStr);

        strncpy(apSSID, ssidStr.c_str(), 32);
        strncpy(apPassword, passStr.c_str(), 63);

        apSSID[32] = '\0';
        apPassword[63] = '\0';

        Serial.println("Loaded config: SSID=" + String(apSSID) + ", Pass=" + String(apPassword));
      } else {
        Serial.println("Invalid config file format. Using defaults and recreating file.");
        writeWifiConfig(apSSID, apPassword);
      }
    } else {
      Serial.println("Failed to open config file. Using defaults.");
    }
  } else {
    Serial.println("Config file not found. Creating with defaults.");
    writeWifiConfig(apSSID, apPassword);
  }
}

void initFS() {
  if (!LittleFS.begin(true)) {
    Serial.println("An Error has occurred while mounting or formatting LittleFS");
    while (true);
  }
  Serial.println("LittleFS mounted successfully");
}

void initWebServer() {
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(LittleFS, "/index.html", "text/html");
  });

  server.on("/style.css", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(LittleFS, "/style.css", "text/css");
  });

  server.on("/script.js", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(LittleFS, "/script.js", "text/javascript");
  });

  server.on("/templates.json", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(LittleFS, "/templates.json", "application/json");
  });

  /* server.on("/led/on", HTTP_GET, [](AsyncWebServerRequest *request) {
    Serial.println("API: LED on");
    outputState = "on";
    digitalWrite(ledPin, HIGH);
    request->send(200, "text/plain", "OK");
  });

  server.on("/led/off", HTTP_GET, [](AsyncWebServerRequest *request) {
    Serial.println("API: LED off");
    outputState = "off";
    digitalWrite(ledPin, LOW);
    request->send(200, "text/plain", "OK");
  });

  server.on("/led/state", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(200, "text/plain", outputState);
  }); */

  server.on("/get-wifi", HTTP_GET, [](AsyncWebServerRequest *request) {

    String json = "{\"ssid\":\"" + String(apSSID) + "\",\"pass\":\"" + String(apPassword) + "\"}";
    request->send(200, "application/json", json);
  });

  server.on("/update-wifi", HTTP_POST, [](AsyncWebServerRequest *request) {
    if (request->hasParam("ssid", true) && request->hasParam("pass", true)) {
      String newSSID = request->getParam("ssid", true)->value();
      String newPass = request->getParam("pass", true)->value();

      Serial.println("API: Updating Wi-Fi settings to SSID=" + newSSID);

      if (writeWifiConfig(newSSID.c_str(), newPass.c_str())) {
        request->send(200, "text/plain", "Settings saved. Rebooting now...");

        delay(1000);
        ESP.restart();

      } else {
        request->send(500, "text/plain", "Error saving settings.");
      }
    } else {
      request->send(400, "text/plain", "Missing parameters.");
    }
  });

  // start listening for an IR code
  server.on("/start-learning", HTTP_GET, [](AsyncWebServerRequest *request) {
    irrecv.enableIRIn(); // Start the receiver
    isLearningMode = true;
    Serial.println("API: Learning mode activated.");
    request->send(200, "text/plain", "Learning started. Point remote and press button.");
  });

  server.on("/get-learned-code", HTTP_GET, [](AsyncWebServerRequest *request) {
    if (isLearningMode && irrecv.decode(&results)) {
      isLearningMode = false; // Stop learning
      irrecv.disableIRIn(); // Stop the receiver
      Serial.println("API: Code captured!");

      // Convert the result to JSON
      JsonDocument doc;
      doc["protocol"] = typeToString(results.decode_type);
      doc["bits"] = results.bits;
      doc["code"] = results.value; // the value to store

      String output;
      serializeJson(doc, output);

      Serial.println(output);
      request->send(200, "application/json", output);

      irrecv.resume();
    } else {
      request->send(204, "text/plain", "Waiting...");
    }
  });

  server.on("/send-ir", HTTP_POST, [](AsyncWebServerRequest *request) {}, NULL,
    [](AsyncWebServerRequest *request, uint8_t *data, size_t len, size_t index, size_t total) {

      String body = "";
      for (size_t i = 0; i < len; i++) {
        body += (char)data[i];
      }
      Serial.println("Received /send-ir: " + body);

      JsonDocument doc;
      deserializeJson(doc, body);

      String protocol = doc["protocol"];
      String codeStr = doc["code"];
      int bits = doc["bits"];

      uint64_t code = strtoull(codeStr.c_str(), NULL, 0);

      decode_type_t protocolEnum = getProtocolEnum(protocol);

      if (protocolEnum != UNKNOWN) {
        Serial.printf("Sending Protocol: %s, Code: 0x%X, Bits: %d\n", protocol.c_str(), code, bits);
        irsend.send(protocolEnum, code, bits);
        request->send(200, "text/plain", "OK");
      } else {
        Serial.println("Error: Unknown protocol");
        request->send(400, "text/plain", "Unknown protocol");
      }
  });

  server.on("/send-ac-state", HTTP_POST, [](AsyncWebServerRequest *request) {}, NULL,
    [](AsyncWebServerRequest *request, uint8_t *data, size_t len, size_t index, size_t total) {

      String body = "";
      for (size_t i = 0; i < len; i++) {
        body += (char)data[i];
      }
      Serial.println("Received /send-ac-state: " + body);

      JsonDocument doc;
      deserializeJson(doc, body);

      String protocol = doc["ir_config"]["protocol"];
      String power = doc["state"]["power"];
      String mode = doc["state"]["mode"];
      int temp = doc["state"]["temp"];

      sendAcCommand(protocol, power, mode, temp);

      request->send(200, "text/plain", "OK");
  });

  server.onNotFound([](AsyncWebServerRequest *request) {
    Serial.println("Client requested (onNotFound): " + request->url());
    request->send(LittleFS, "/index.html", "text/html");
  });

  server.on("/set-buzzer", HTTP_POST, [](AsyncWebServerRequest *request) {
    if (request->hasParam("state", true)) {
      String state = request->getParam("state", true)->value();
      if (state == "on") {
        isBuzzerActive = true;
        Serial.println("API: Buzzer ON");
      } else {
        isBuzzerActive = false;
        digitalWrite(buzzerPin, LOW);
        Serial.println("API: Buzzer OFF");
      }
      request->send(200, "text/plain", "OK");
    } else {
      request->send(400, "text/plain", "Missing state parameter");
    }
  });

  server.begin();
  Serial.println("HTTP server started");
}

void setup() {
  Serial.begin(115200);
  Serial.println("\nStarting ESP32 AP...");

  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);

  pinMode(buzzerPin, OUTPUT);
  digitalWrite(buzzerPin, LOW);

  irsend.begin();
  irrecv.enableIRIn(); // Start the receiver
  irrecv.disableIRIn(); // Disable until needed

  initFS();
  readWifiConfig();

  Serial.print("Setting AP (Access Point)...");

  WiFi.softAP(apSSID, apPassword);

  IPAddress IP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(IP);

  dnsServer.start(DNS_PORT, "*", IP);

  const char* mdnsName = "saturemote";

  if (!MDNS.begin(mdnsName)) {
    Serial.println("Error setting up mDNS responder!");
  } else {
    Serial.println("mDNS responder started with name: http://" + String(mdnsName) + ".local");
    MDNS.addService("http", "tcp", 80);
  }

  initWebServer();
}

void loop() {
  dnsServer.processNextRequest();

  if (isBuzzerActive) {
    if (millis() - lastBuzzerToggle >= buzzerInterval) {
      lastBuzzerToggle = millis();
      // Toggle pin state (High -> Low -> High)
      int state = digitalRead(buzzerPin);
      digitalWrite(buzzerPin, !state);
    }
  }
}