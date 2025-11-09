#include <WiFi.h>
#include <DNSServer.h>
#include <ESPmDNS.h>
#include <ESPAsyncWebServer.h>
#include <LittleFS.h>

char apSSID[33] = "saturemote";
char apPassword[64] = "bunnygirl";
const char* configFilePath = "/wifi_config.txt";

const byte DNS_PORT = 53;
DNSServer dnsServer;
AsyncWebServer server(80);

String outputState = "off";
const int ledPin = 2;

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

  server.on("/led/on", HTTP_GET, [](AsyncWebServerRequest *request) {
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
  });

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

  server.onNotFound([](AsyncWebServerRequest *request) {
    Serial.println("Client requested (onNotFound): " + request->url());
    request->send(LittleFS, "/index.html", "text/html");
  });

  server.begin();
  Serial.println("HTTP server started");
}

void setup() {
  Serial.begin(115200);
  Serial.println("\nStarting ESP32 AP...");

  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);

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
}