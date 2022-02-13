int ledRed = 12;
int ledYellow = 11;
int ledGreen = 10;
int ledRedPedestrian = 9;
int ledGreenPedestrian = 8;

void setup() {
  pinMode(ledRed, OUTPUT);
  pinMode(ledYellow, OUTPUT);
  pinMode(ledGreen, OUTPUT);
  pinMode(ledRedPedestrian, OUTPUT);
  pinMode(ledGreenPedestrian, OUTPUT);
}

void loop() {
  configureTraffiLight(HIGH, LOW, LOW, 3000, LOW, HIGH);
  configureTraffiLight(LOW, HIGH, LOW, 2000, HIGH, LOW);
  configureTraffiLight(LOW, LOW, HIGH, 5000, HIGH, LOW);
}

void configureTraffiLight(
  int pinRed, int pinYellow, 
  int pinGreen, int delayTime,
  int pinRedPedestrian, int pinGreenPedestrian) {
  digitalWrite(ledRed, pinRed);
  digitalWrite(ledYellow, pinYellow);
  digitalWrite(ledGreen, pinGreen);
  digitalWrite(ledRedPedestrian, pinRedPedestrian);
  digitalWrite(ledGreenPedestrian, pinGreenPedestrian);
  delay(delayTime);
}