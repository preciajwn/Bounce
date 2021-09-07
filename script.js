/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

 var x = 50;
 var y = 50;

 var speedY = 5;

 var x1 = 150; 
 var y1 = 50;

 var speedY1 = 8;

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
  ellipse(x,y,80,80);
  ellipse(x1,y1,80,80);
  
  y = y + speedY;
  y1 = y1 + speedY1;

  if (y === 720) {
    speedY = speedY * -1;
  }
  if (y === 0) {
    speedY = speedY * -1; 
  }


  if (y1 === 720) {
    speedY1 = speedY1 * -1;
  }
  if (y1 === 0) {
    speedY1 = speedY1 * -1;
  }
}