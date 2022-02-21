void setup()
{
  pinMode(9, INPUT);
  pinMode(12, OUTPUT);
  pinMode(13, OUTPUT);
}

void loop()
{
  if (digitalRead(9) == HIGH)
  {
    digitalWrite(12, HIGH);
    digitalWrite(13, LOW);
  }

  else
  {
    digitalWrite(12, LOW);
    digitalWrite(13, HIGH);
  }
}