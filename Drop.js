class drop{
    constructor(x, y){
        var options = {
            isStatic: false,
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.r = 5;
        // this.image = loadImage('download.png')
        World.add(world, this.body);
    }

    update(){
        if(this.body.position.y > height){
        Matter.Body.setPosition(this.body, {x:random(20,700),y: random(25, height/2 - 100)})
        }
    }
    show(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y)
        fill('lightblue');
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r);
        pop();
    }
}