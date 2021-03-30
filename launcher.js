class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Launcher = Constraint.create(options);
     this.pointB=pointB;
        World.add(world, this.Slingshot);
    }

     fly()
     {
        this.Slingshot.bodyA=null
     }
    display(){
        if(this.Launcher.bodyA)
        {
            var pointA = this.Launcher.bodyA.position;
            
            strokeWeight(4);
            line(pointA.x, pointA.y,this.pointB.x,this.pointB.y);
        }
       
    }
    
}