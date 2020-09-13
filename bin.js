class bin {
 constructor(x,y,width,height)
  options = {
      gravity: 10,
      isStatic:false,
 }
   this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      display(){
        
      }
};