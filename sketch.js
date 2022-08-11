
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var casa;
var destruidor;
var pedra;
var fumaça;
var fundo;

function preload(){

  casa=loadImage("1657891097271.png")
  destruidor=loadImage("1657891767553.png")
  pedra=loadImage("1657891682273.png")
  fumaça=loadImage("1657891860158.png")
  fundo=loadImage("fundo.png")
  fim=loadSound("fim.wav")
  quebrando=loadSound("quebrandpedra.wav")

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(80);
  var destruidor ={
		isStatic:false,
		density:1.2}

  casa=createImg("1657891097271.png");
  casa.position(140,379);
  casa.size(170,150);

  pedra=createImg("1657891682273.png")
  pedra.position(600, 405)
  pedra.size(150, 117)

  destruidor=createImg("1657891767553.png")
  destruidor.position(1000, 405);
  destruidor.size(155,120)
  

  engine = Engine.create();
  world = engine.world;
  
}


  function draw(){
  background(51);
 image(fundo,0,0, width,height);
  Engine.update(engine);
  text("Destrua a pedra que esta no caminho!", 300, 300)
  
  
    }
function keyPressed() {
  if (keycode == LEFT_ARROW) {
    Matter.Body.applyForce(destruidor,{x:0,y:0},{x:10,y:-05})
      }


}