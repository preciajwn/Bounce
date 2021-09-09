/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

 var x = 50;
 var y = 50;

 var speedX = 2;
 var speedY = 5;

 
 var x1 = 50;
 var y1 = 50;

 var speedX1 = 4;
 var speedY1 = 8;
 

 var x2 = 50;
 var y2 = 50; 

 var speedX2 = 6;
 var speedY2 = 12; 


function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
 // Kleur de achtergrond blauw, zodat je het kunt zien
 background('blue');

  // stel vulkleur in
  fill(100, 100, 255);

  // teken een cirkel
  ellipse(x, y, 80, 80);
  ellipse(x1, y1, 80, 80);
  ellipse(x2, y2, 80, 80);
  
  x = x + speedX;
  y = y + speedY;

  x1 = x1 + speedX1;
  y1 = y1 + speedY1;

  x2 = x2 + speedX2;
  y2 = y2 + speedY2;


  if (y === 720) {
    speedY = speedY * -1;
  }
  
  if (y === 0) {
    speedY = speedY * -1; 
  }

  if (x === 0) { 
    speedX = speedX * -1; 
  }

  if (x === 1280) {
    speedX = speedX * -1;
  }


  if (y1 === 720) {
    speedY1 = speedY1 * -1;
  }
  
  if (y1 === 0) {
    speedY1 = speedY1 * -1; 
  }

  if (x1 === 0) { 
    speedX1 = speedX1 * -1; 
  }

  if (x1 === 1280) {
    speedX1 = speedX1 * -1;
  }


  if (y2 === 720) {
    speedY2 = speedY2 * -1;
  }
  
  if (y2 === 0) {
    speedY2 = speedY2 * -1; 
  }

  if (x2 === 0) { 
    speedX2 = speedX2 * -1; 
  }

  if (x2 === 1280) {
    speedX2 = speedX2 * -1;
  }
}