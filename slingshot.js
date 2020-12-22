class Slingshot 
{
    constructor(bodyA,pointB)
    {
            var options={
                bodyA:bodyA,
               pointB:pointB,
                length:50,
                stiffness:0.04

            }

            this.sling1=loadImage("sprites/sling1.png");
            this.sling2=loadImage("sprites/sling2.png");
            this.sling3=loadImage("sprites/sling3.png");

            this.sling=Matter.Constraint.create(options);
            World.add(world,this.sling);

     }

     fly(){
         this.sling.bodyA=null;
     }

     attach(body){
         this.sling.bodyA=body;
     }
display(){
    image(this.sling1,125,8);
    image(this.sling2,100,8);

    
    if(this.sling.bodyA!=null){
    strokeWeight(10);
    stroke(48,22,8);
             line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,
                this.sling.pointB.x+40,this.sling.pointB.y-3)

                line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,
                    this.sling.pointB.x-2,this.sling.pointB.y)

                    image(this.sling3,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-10,15,30)
                   
             } 
                noStroke();
}
     
}