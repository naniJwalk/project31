var divisons=[];
var plinkos=[];
var particles=[];
var ground1;
var divisonHeight=300;

function setup() {
  createCanvas(800,460);
  ground1=new ground(230,0,460,20);
}

function draw() {
  background(255,255,255); 
  if(frameCount%60===0) {
    particles.push(new particle(random(width/2-10,width/2+10),10,10));
  }
  for(var i=0;i<=width;i = i+80){
    divisons.push(new divisons(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40;j <= width;j = j+50) {
    plinkos.push(new plinko(j,75,15));
  }
  for(var j=15;j <= width-10;j = j+50) {
    plinkos.push(new plinko(j,175,15));
  }
  for(var i=0;i < particles.length;i++){
    particles[i].display();
  }
  for(var j=0;j < divisions.length;j++){
    divisions[j].display();
  }
  ground1.display();
  drawSprites();
}