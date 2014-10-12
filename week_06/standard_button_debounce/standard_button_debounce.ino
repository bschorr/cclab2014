
/*
Pseudo code:
-Read the button and store it in "oldButtonState".
-Wait a short duration (but long enough to allow the noisy signal to pass)
-Read the button again and store it in "newButtonState".
-If newButtonState is HIGH and oldButtonState is LOW, then flip a boolean
 because we caught a rising edge.

by Adiel Fernandez && adaptations by Bernardo Schorr
9/22/2014

*/

int buttonPin = 2;
int newButtonState = 0;
int oldButtonState = 0;

int ledPin = 13;

//25 milliseconds should work for fairly cheap, crappy buttons
//Play around with shorter debounce times to see if they 
//work with your button
int debounceTime = 25;


boolean thingWeWantToControl = false;

void setup(){
  //Start serial connection
  Serial.begin(9600);
  
  pinMode (ledPin, OUTPUT);
  //Set pinMode of button
  pinMode(buttonPin, INPUT);
  
  
}

void loop(){
  
  //Lets read the pin
  oldButtonState = digitalRead(buttonPin);
  delay(debounceTime);
  //read the pin again after a short pause
  newButtonState = digitalRead(buttonPin);
  
  //Now lets look for the specific rising edge scenario:
  if(oldButtonState == LOW && newButtonState == HIGH){
    
    //flip a boolean that will control something elsewhere in code
    thingWeWantToControl = !thingWeWantToControl;
    
  }
  
  //Lets do something based on that boolean (in this
  //case we're printing something)
  if(thingWeWantToControl == true){
    Serial.println("Doing thing A...");
    digitalWrite(ledPin, HIGH);
  } else {
    Serial.println("                Do thing B...");
    digitalWrite(ledPin, LOW);
  }
}
