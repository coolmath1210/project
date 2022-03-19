var wolf, wolfImg, wolfGroup
var background,backgroundImg
var rabbit, rabbitImg
var carrot, carrotImg, carrotGroup
var invisableGround




function preload(){
backgroundImg=loadImage("background.webp");
rabbitImg=loadImage("bunny.jpeg");
carrotImg=loadImage("carrot.jpeg")
wolfImg=loadImage("wolf.png")






}

function setup() {
 createCanvas(600,600,20,20);

    rabbit= createSprite(200,400,100,0)
    rabbit.addImage("rabbit",rabbitImg)
    rabbit.scale=0.05
    rabbit.velocityX=2

    invisableGround= createSprite(200,200,10,10)
    
    wolfGroup= new Group()
    carrotGroup= new Group()
    
    backgroundImg.velcotyX=-2


}



function draw() {
 background(backgroundImg)

 
 









 drawSprites()

}