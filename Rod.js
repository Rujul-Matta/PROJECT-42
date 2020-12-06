class shell{
    constructor(w,h){
        this.body = Bodies.rectangle(400,275,w,h);
        this.width = w;
        this.height = h;
        World.add(world, this.body)
    }

    display(){
        // var angle = PI/2;
        // Matter.Body.setAngle(this.body, PI);
        rectMode(CENTER);
        rect(400, 475, this.width, this.height)
    }
}