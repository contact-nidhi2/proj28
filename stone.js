class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic :true,
        }
        this.weight=weight;
        this.height=height;
        this.stone = Bodies.rectangle(x,y,weight,height,options);
        World.add(world,this.stone);
        this.image = loadImage("images/stone.png");
    }
    display(){
        var pos =this.stone.position;
        imageMode(CENTER);
        image(this.image,0,0,this.weight,this.height)
    }
}