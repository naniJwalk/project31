class particle {
    constructor(x,y,r){
        options={
            restitution:0.4
        }
        this.r=r
        this.y=y
        this.x=x
        this.body=Bodies.circle(x,y,r,options);
        this.colour=colour[random(0,255), random(0,255), random(0,255)];
        World.add(world,this.body);
    }
    display(){
        var position=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.colour)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}