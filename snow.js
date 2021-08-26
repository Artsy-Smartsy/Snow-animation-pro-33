class Snow{
    constructor(x){
        var options={
            restitution:0.1,
            density:0.2,
            
        }
       
        this.body=Bodies.rectangle(x,-20,50,50,options);
        this.x=x;
        this.y=50;
        this.image=loadImage("snow5.webp");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        imageMode(CENTER);

        image(this.image,0,0,50,50);
        if(this.body.x= 850){
            World.remove(world,this.body); 
        }
        //console.log(this.body)
        pop();
    }
}