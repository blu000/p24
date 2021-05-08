const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron1,stone1,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
   
    iron1= new Iron(300,350);
    

    stone1= new Stone(100,40,70,70);
    

    rubber = new Rubber(600,30,15);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    world= engine.world
    

    plane.display();
    hammer.display();
    
   iron1.display();
   
   stone1.display();
  
   rubber.display();
    
 
}