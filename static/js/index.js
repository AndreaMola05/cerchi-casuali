let x 
let y 
let d 
let r
let g
let b
let a
function setup() {
createCanvas(600, 400);
 background(220)

  

}

function draw() {


  x = random (600)
  y = random (400)
  d = random (30,90)
  r = random (255)
  g = random (255)
  b = random (255)
  a = random (0,100)

  noStroke(); 
  circle(x,y,d)
  fill(r,g,b,a)  
}
