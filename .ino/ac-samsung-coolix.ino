// Program sending ke AC samsung dengan protokol coolix
#include <Arduino.h>
#include <IRremoteESP8266.h>
#include <IRrecv.h>
#include <IRutils.h>
#include <IRsend.h>

const uint16_t RECV_PIN = 15;     // Pin IR receiver
const uint16_t IR_LED_PIN = 4;    // Pin IR LED (menggunakan transistor SFH4648)
const uint8_t  BTN_PIN = 12;      // Pin tombol (internal pull-down)

const uint32_t SAMSUNG_AC_COOLIX_CODE = 0xB21FC8; // Hasil capture dari remote
const uint8_t  SAMSUNG_AC_BITS = 24;              // Panjang bit data
const uint8_t  SEND_REPEATS = 0;                  // Pengulangan (bisa diubah ke 2-3x)

IRrecv irrecv(RECV_PIN);
decode_results results;
IRsend irsend(IR_LED_PIN);

void setup() {
  Serial.begin(115200);
  delay(200);

  Serial.println("\nESP32 IR Receiver + Transmitter (Coolix / Samsung AC)");

  // Receiver setup
  irrecv.enableIRIn();
  Serial.printf("Receiver aktif di pin %u\n", RECV_PIN);

  // Transmitter setup
  irsend.begin();
  Serial.printf("Transmitter siap di pin %u\n", IR_LED_PIN);

  // Tombol dengan internal pull-down
  pinMode(BTN_PIN, INPUT_PULLDOWN);
  Serial.printf("Tombol di pin %u (active HIGH, internal pull-down)\n", BTN_PIN);
}

void sendSamsungAC() {
  Serial.printf("Mengirim sinyal COOLIX 0x%06X (%d bits)\n", SAMSUNG_AC_COOLIX_CODE, SAMSUNG_AC_BITS);
  irsend.sendCOOLIX(SAMSUNG_AC_COOLIX_CODE, SAMSUNG_AC_BITS);
  for (uint8_t i = 0; i < SEND_REPEATS; i++) {
    delay(100);
    irsend.sendCOOLIX(SAMSUNG_AC_COOLIX_CODE, SAMSUNG_AC_BITS);
  }
  Serial.println("Selesai kirim sinyal AC Samsung.\n");
}

void loop() {
  // Receiver aktif
  if (irrecv.decode(&results)) {
    Serial.println("===== Diterima sinyal IR =====");
    Serial.println(resultToHumanReadableBasic(&results));
    Serial.printf("Raw hex: 0x%08X\n", (uint32_t)results.value);
    irrecv.resume();
  }

  // Tombol ditekan, maka mengirim sinyal AC Samsung
  static bool lastState = LOW;
  bool currentState = digitalRead(BTN_PIN);

  if (currentState == HIGH && lastState == LOW) {
    delay(40); // debounce
    if (digitalRead(BTN_PIN) == HIGH) {
      sendSamsungAC();
    }
  }
  lastState = currentState;
  delay(10);
}