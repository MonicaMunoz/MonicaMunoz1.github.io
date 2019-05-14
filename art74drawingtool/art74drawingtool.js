var img;
var initials ='mm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
  // preload() runs once, it may make you wait
  //  img = loadImage('knife.jpg');  // knife.jpg needs to be next to this .js file
  // you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/cat2-sm.jpg');
}

function setup() {
  createCanvas(600, 600);  // canvas size
  background(0);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed) {
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

  if (toolChoice == '1' ) {  // first tool //mousepressed

    textSize(32);
    text("Hello", 10, 30); 
    fill(0, 102, 153);
    fill(random(255));
    ellipse(270, 120, 190, 200);
  } else if (toolChoice == '2') { // second tool
    stroke(random (255), random (255), random (255));
    strokeWeight (5);
    line(pmouseX, pmouseY, mouseX, mouseY);
  } else if (toolChoice == '3') { // third tool
    fill (random (255), random (255), random (255));    
    noStroke();          
    rect(mouseX, mouseY, 20, 20, 3); 
    line(pmouseX, pmouseY, mouseX, mouseY);
  } else if (toolChoice == '4') {
    fill (random(255));
    noStroke ();
    ellipse(mouseX, mouseY, 20, 20, 3);
  } else if (key == '5') { // this tool calls a function

    stroke(255, 255, 0);
    line(mouseX, mouseY, pmouseX, pmouseY);
   
  } else if (toolChoice == '6') {

    stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') {
    noStroke();
    fill(0, 0, 200);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '8') {
    noStroke();
    fill(200, 0, 0);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') {

    fill(random(255));
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '0') {    ///rainbow like circles
    noStroke();
    fill(random(255), random(255), random(255), 200);
    ellipse (pmouseX, pmouseY, 40, 40);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
  }
}



function self_portrait() {
  // this function draws a self portrait when called
  // you will need to call this, perhaps as one of your keypress functions
}

function clear_print() {
  // this will do one of two things, x clears the screen by resetting the background
  // p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
    saveme();  // call saveme which saves an image of the screen
  }
}

function saveme() {
  //this will save the name as the intials, date, time and a millis counting number.
  // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
}
