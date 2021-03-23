
var car1, car2, car3, car4, wall;
var speed1, speed2, speed3, speed4, weight;
var img1, img2, img3, img4, wImg;
var c1red, c1yellow, c1green;
var c2red, c2yellow, c2green;
var c3red, c3yellow, c3green;
var c4red, c4yellow, c4green;
var b1, b2, b3, b4
var deformation1, deformation2, deformation3, deformation4;
var aud1, aud2, aud3;

var car,Wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)


	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	Wall=createSprite(1500,200, 60, height/2)
  	Wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(Wall.x-car.x < (car.width+Wall.width)/2)
  {
  	car.velocityX=10;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}