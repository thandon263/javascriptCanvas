//Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Background image
var bgReady = false;
var bgImage = new image();
bgImage.onload = function () {
  bgReady = true;
};

bgImage.src = "images/background.png";


/*****
The first thing we need to do is create a canvas element.
I did this in JavaScript instead of HTML to demonstrate
how easily it is accomplished.
Once we have the element we get a reference to its context,
which we use to issue drawing commands.
Then we set its dimensions, and add it to document so it'll appear in the page.
*/


//Game objects
var hero = {
  speed: 256, //movement in pixels per second
  x: 0,
  y: 0
};

var monster = {
  x: 0,
  y: 0
};

var monstersCaught = 0;

/***
Now we define some variables we'll need to use later.
hero gets setup with speed which is how fast it'll move in pixels per second.
monster won't move so it just has coordinates.
Lastly, monstersCaught stores the number of monsters the player has caught.
*/

// Hnadle keyboard controls
var keysDown  = {};

addEventListener('keydown', function(e){
  keydown[e.keyCode] = true;
}, false);

addEventListener('keyup', function (e){
  delete keyDown[e.keycode];
}, false);


//Reset the game when the player catches a monster
var reset = function(){
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;


  //Throw the monster somewhere on the screen randomly
  monster.x = 32 + (Math.random() * (canvas.width - 64 ));
  monster.y  = 32 + (Math.random() * (canvas.height - 64));

};

/***
The reset function is called to begin a new game, or level,
or whatever you'd like to call it.
It places the hero (the player) in the center of the screen
and the monster somewhere randomly.
*/

// Update game objects
var update = function (modifier) {
  if(38 in keysDown) {
    // Player holding up
    hero.y -= hero.speed * modifier;

  }

  if(40 in keysDown){
    //player holding down
    hero.y += hero.speed * modifier;
  }

  if(37 in keyDown) {
    //Player holding left
    hero.x -= hero.speed * modifier;
  }

  if(39 in keyDown) {
    //Player holding right
    hero.x += hero.speed * modifier;
  }


  //Are they touching?
  if(
    hero.x <= (hero.x + 32)
    && monster.x <= (hero.x + 32)
    && hero.y <= (monster.y + 32)
    && monster.y <= (hero.y + 32)
  ){
    ++monstersCaught;
    reset();
  }
};

/****
What may seem odd is the modifier argument passed into update.
*/

//Draw everything
var render = function(){
  if
}
