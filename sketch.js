const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

// global variables
var ground, k ; 
var divisionHeight=300;
var score =0;
var particle;
var count= 0;
var gamestate ="end";

// creating arrays
var particles, plinkos;
 particles = [];
 plinkos = [];
 divisions = [];

 

function setup() {

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    Engine.update(engine);
   // Engine.run(engine);
    
}
 


function draw() {
  background("black");
  textSize(20)

  //gamestate = "end";
 text("Score : "+ 0,20,30);
text("100", 34, 515)
text("200", 118, 515)
text("400", 198, 515)
text("100", 277, 515)
text("500", 358, 515)
text("200", 439, 515)
text("300", 519, 515)
text("100", 600, 515)
text("500", 680, 515)
text("200", 760, 515)

 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     ground.display();
    mousePressed();
     
   }
}

function mousePressed(){
  if(gamestate!== "end"){
    particle = new Particle(mouseX, 10, 10, 10);
    
      console.log(mouseX, mouseY)
  }

  


}