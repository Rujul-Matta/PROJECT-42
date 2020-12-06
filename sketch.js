const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = [];
var bg;
var ground;
function preload(){
    bg = loadImage('back.jpg')
    walkingAnimation = loadAnimation('Walking Frame/walking_8.png',
        'Walking Frame/walking_7.png','Walking Frame/walking_6.png',
        'Walking Frame/walking_5.png','Walking Frame/walking_4.png',
        'Walking Frame/walking_3.png','Walking Frame/walking_2.png',
        'Walking Frame/walking_1.png')

thunderAnimation = loadAnimation('thunderbolt/1.png','thunderbolt/2.png',
                                'thunderbolt/3.png','thunderbolt/4.png')
}

function setup(){
    createCanvas(800,windowHeight - 100)
    engine = Engine.create();
    world = engine.world;
    if(frameCount % 125 == 0){
        for(i = 0; i < 200; i++){
        a = new drop(random(20,700), random(25, height/2 - 100))
        drops.push(a)
        }
    }
    ground = createSprite(0,250,0,0);
    ground.addImage(bg);
    ground.scale = 0.5

    boy = createSprite(400, height/2 + 100, 50, 50);
    boy.addAnimation('walking', walkingAnimation);
    boy.scale = 0.5;
    
    rod = new shell(200, 400)

  
}

function draw(){
    background(225);
    Engine.update(engine);
    if(frameCount % 125 == 0){
        thunder = createSprite(random(20,700),100,50,50)
        thunder.addAnimation('thunder', thunderAnimation);
        thunder.scale = 0.3;
        thunder.lifetime = 75;
    }
    ground.velocityX = -5;
    if(ground.x <= 5){ground.x = width/2}
    drawSprites();
    for(var i = 0; i < 200; i++){
        drops[i].show();
        drops[i].update();  
    }
    
}   

