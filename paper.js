class paper {
constructor(x,y, radius) {
    options = {
        isStatic: false,
        friction: 0.5,
    restitution: 0.3,       
    density = 1.2
    }
    this.body = Bodies.rectangle(x,y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
}
display(){
  var pos = this.body.position;

}


}