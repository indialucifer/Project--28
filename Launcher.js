class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length:10,
            stiffness:0.1
        }
        this.body = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.body);
    }
    display(){
        if (this.body.bodyA){
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5);
        line(pointA.x,pointA.y, pointB.x, pointB.y);}
    }
    fly(){
        this.body.bodyA = null;
    }
    attach(body){
        this.body.bodyA = body;
    }
}