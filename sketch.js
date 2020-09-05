var fixrect,movingrect;





function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  fixrect.shapeColor="blue";
  movingrect=createSprite(200,200,40,50);
  movingrect.shapeColor="blue";
}


function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if (fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2
    && movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2
    &&fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2
    &&movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2) {
      fixrect.shapeColor="green";
      movingrect.shapeColor="green";
  } else {
    fixrect.shapeColor="blue";
    movingrect.shapeColor="blue";   
  }  
  drawSprites();
}