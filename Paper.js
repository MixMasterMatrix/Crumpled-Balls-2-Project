class paper{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
    this.image = loadImage("paper.png");    
    this.x = x;
    this.y = y
    this.r = r
    this.body = Bodies.circle(this.x,this.y,(this.r -20)/2,options)
    World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;

        push()
        translate(pos.x,pos.y);
        imageMode(CENTER)
        strokeWeight(3);
        fill(255,255,255)
        image(this.image,0,0,this.r,this.r);
        pop()
    }
}