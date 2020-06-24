const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    canvasSide1 = new Ground(240,800,470,10);
    canvasSide2 = new Ground(240,0,470,10);
    canvasSide3 = new Ground(0,400,10,800);
    canvasSide4 = new Ground(480,400,10,800);
    ground = new Ground(240,790,470,10);
    
    for (var k = 10.5; k <=width; k = k + 76.6) {
        divisions.push(new Division(k,635, 10, divisionHeight));
      }
   
   
       for (var j = 50; j <=480; j=j+50) 
       {
       
          plinkos.push(new Plinko(j,75));
       }
   
       for (var j = 25; j <=470; j=j+50) 
       {
       
          plinkos.push(new Plinko(j,175));
       }
   
        for (var j = 50; j <=480; j=j+50) 
       {
       
          plinkos.push(new Plinko(j,275));
       }
   
        for (var j = 25; j <=470; j=j+50) 
       {
       
          plinkos.push(new Plinko(j,375));
       }
   

}

function draw(){
    background("black");
    Engine.update(engine);
    fill("brown");
    canvasSide1.display();
    canvasSide2.display();
    canvasSide3.display();
    canvasSide4.display();
    fill("white");
    ground.display();  
    
    for (var i = 0; i < plinkos.length; i++) {
     
        plinkos[i].display();
        
      }
      if(frameCount%60===0){
        particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
      }
    
     for (var j = 0; j < particles.length; j++) {
      
        particles[j].display();
      }
      for (var k = 0; k < divisions.length; k++) {
        
        divisions[k].display();
      }
   
}


