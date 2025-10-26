// Program sending ke tv dengan protokol nec
#include <Arduino.h>
#include <IRremote.hpp>

#define IR_SEND_PIN 4   // pin TX IR LED

void setup() {
  Serial.begin(115200);
  IrSender.begin(IR_SEND_PIN, ENABLE_LED_FEEDBACK);

  Serial.println("Kirim sinyal NEC 0x20DF10EF setiap 5 detik...");
}

void loop() {
  uint32_t kode = 0x20DF10EF;  // kode hasil penerimaan
  IrSender.sendNEC(kode, 32);  // mengirim dengan protokol NEC, 32 bit
  Serial.println("Kode NEC 0x20DF10EF dikirim!");
  delay(5000);
}