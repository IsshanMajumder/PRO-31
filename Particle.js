class Particle {
   constructor(x,y,width,height){
       var options={
        restitution: 1.0,
        friction: 2.0,
        isStatic: false
       }
       this.body = Bodies.circle(x, y, this.r, options);
       this.colour=colour(random(0, 255), random(0, 255), random(0, 255));
       World.add(world, this.body);
   } 
}
