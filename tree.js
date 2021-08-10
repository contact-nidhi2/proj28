class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic :true,
        }
        this.weight=weight;
        this.height=height;
        this.tree = Bodies.rectangle(x,y,weight,height,options);
        World.add(world,this.tree);
        this.image = loadImage("images/tree.png");
    }
        
    }
    display(){
        var pos =this.tree.position;
        imageMode(CENTER);
        image(this.image,0,0,this.weight,this.height)
    }
}