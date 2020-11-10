class plinko {
    constructor(x,y,r){
     var options={
      isStatic:true   
     } 
     this.body= Bodies.circle(x,y,r,options);
     this.x=x
     this.y=y
     this.r=r
     World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.r,this.r);
        
    }
}