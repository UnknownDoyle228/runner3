
function preload(){
  //pre-load images
trackImg = loadImage("path.png")
runnerImg = loadAnimation("runner-1.png", "runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite(200, 200, 100, 100)
path.addImage(trackImg);
path.velocityY = 4;

runner = createSprite(200, 200)
runner.addAnimation("runner", runnerImg)
runner.scale = 0.08

wall1 = createSprite(20, 200, 100, 400)
wall2 = createSprite(386, 200, 100, 400)

wall1.visible = false
wall2.visible = false

}

function draw() {
  background(0);

if(path.y > 400){
  path.y = height/2;
}

runner.x = World.mouseX

runner.collide(wall1);
runner.collide(wall2);
drawSprites()
}
