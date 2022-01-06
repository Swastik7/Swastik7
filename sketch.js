
function setup() {
  createCanvas(400,400);
var box = createSprite(200,200,20,20);


}

function draw() 
{
  background(29,mouseY,22);

  if(keyIsDown(RIGHT_ARROW))

{
  box.position.x=box.position.x+5;
}
if(keyIsDown(LEFT_ARROW))
{ 
  box.position.x=box.position.x-4;
}

drawSprites();

}
