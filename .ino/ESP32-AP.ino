/*********
  Rui Santos
  Complete project details at https://randomnerdtutorials.com
*********/

// Load Wi-Fi library
#include <WiFi.h>
#include <DNSServer.h>

// Replace with your network credentials
const char* ssid = "ESP32-Access-Point";
const char* password = "123456789";

// Set web server port number to 80
WiFiServer server(80);

// DNS server for captive portal
DNSServer dnsServer;

// Variable to store the HTTP request
String header;

// Auxiliar variables to store the current output state
String outputState = "off"; // Menggunakan satu variabel untuk LED internal

// Assign output variable to the internal LED pin
const int ledPin = 2; // Pin GPIO2 untuk LED internal pada ESP32

// DNS redirection settings
const byte DNS_PORT = 53;

void setup() {
  Serial.begin(115200);

  // Initialize the output variable as output (LED internal)
  pinMode(ledPin, OUTPUT);

  // Set the LED to LOW (off) initially
  digitalWrite(ledPin, LOW);

  // Connect to Wi-Fi network with SSID and password
  Serial.print("Setting AP (Access Point)…");
  WiFi.softAP(ssid, password);

  IPAddress IP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(IP);

  // Start the DNS server to redirect all requests to 192.168.4.1
  dnsServer.start(DNS_PORT, "*", IP);

  server.begin();
}

void loop() {
  dnsServer.processNextRequest();  // Handle DNS requests

  WiFiClient client = server.available();   // Listen for incoming clients

  if (client) {                             // If a new client connects,
    Serial.println("New Client.");          // print a message out in the serial port
    String currentLine = "";                // make a String to hold incoming data from the client
    while (client.connected()) {            // loop while the client's connected
      if (client.available()) {             // if there's bytes to read from the client,
        char c = client.read();             // read a byte, then
        Serial.write(c);                    // print it out the serial monitor
        header += c;
        if (c == '\n') {                    // if the byte is a newline character
          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println("Connection: close");
            client.println();

            // Turns the internal LED on and off based on the HTTP request
            if (header.indexOf("GET /led/on") >= 0) {
              Serial.println("LED on");
              outputState = "on";
              digitalWrite(ledPin, HIGH); // LED ON
            } else if (header.indexOf("GET /led/off") >= 0) {
              Serial.println("LED off");
              outputState = "off";
              digitalWrite(ledPin, LOW); // LED OFF
            }

            // Display the HTML web page
            client.println("<!DOCTYPE html><html>");
            client.println("<head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
            client.println("<link rel=\"icon\" href=\"data:,\">");

            // Add JavaScript to avoid page reload
            client.println("<script>");
            client.println("function toggleLED(state) {");
            client.println("  var xhr = new XMLHttpRequest();");
            client.println("  xhr.open('GET', '/led/' + state, true);");
            client.println("  xhr.send();");
            client.println("  setTimeout(function() { location.reload(); }, 200);");  // Refresh page after request to update button
            client.println("}");
            client.println("</script>");

            // CSS to style the on/off button
            client.println("<style>html { font-family: Helvetica; display: inline-block; margin: 0px auto; text-align: center;} ");
            client.println(".button { background-color: #4CAF50; border: none; color: white; padding: 16px 40px; ");
            client.println("text-decoration: none; font-size: 30px; margin: 2px; cursor: pointer;} ");
            client.println(".button2 {background-color: #555555;}</style>");

            // Web Page Heading
            client.println("<body><h1>ESP32 Web Server</h1>");

            // Display current state of the LED
            client.println("<p>LED - State " + outputState + "</p>");

            // If the outputState is "off", display the ON button
            if (outputState == "off") {
              client.println("<p><button class=\"button\" onclick=\"toggleLED('on')\">ON</button></p>");
            } else {
              client.println("<p><button class=\"button button2\" onclick=\"toggleLED('off')\">OFF</button></p>");
            }

            client.println("</body></html>");

            // The HTTP response ends with another blank line
            client.println();
            // Break out of the while loop
            break;
          } else { // if you got a newline, then clear currentLine
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }
      }
    }
    // Clear the header variable
    header = "";
    // Close the connection
    client.stop();
    Serial.println("Client disconnected.");
    Serial.println("");
  }
}