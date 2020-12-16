//Create the variables below
var thunder1,thunder2,thunder3
var thunder1A
var man
var manA

function preload(){
   thunder1A = loadAnimation("thunder/1.png","thunder/2.png","thunder/3.png","thunder/4.png") 
manA = loadAnimation("man/walking_1.png","man/walking_2.png","man/walking_3.png","man/walking_4.png","man/walking_5.png","man/walking_6.png","man/walking_7.png","man/walking_8.png",)
}

function setup(){
    createCanvas(1000,600);
thunder1 = createSprite(800,80,20,20)
thunder1.scale = 0.5
   thunder1.addAnimation("thunder",thunder1A)
   thunder2 = createSprite(200,60,40,40)
   thunder2.scale = 0.5
   thunder2.addAnimation("thunder",thunder1A)
   thunder3 = createSprite(500,40,60,60)
   thunder3.scale = 0.5
   thunder3.addAnimation("thunder",thunder1A)
   man = createSprite(100,430,10,50)
    man.addAnimation("human",manA)
    man.scale = 0.5
}

function draw(){
    background(0); 
rainDrops()
    //Call the function rainDrops below
    if (keyDown("UP_ARROW")) {
        man.velocityX = 2
    }

    //Write the if statement to move the man below
   
   
    drawSprites();
}   

//Create the rainDrops function below
function rainDrops(){
    var drop = createSprite(random(10,990),0,10,random(10,50))
drop.velocityY = random(2,5)
drop.shapeColor = color(random(0,255),random(0,255),random(0,255))
}


    