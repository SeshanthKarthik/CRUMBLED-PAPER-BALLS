class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.w = w; 
    this.h = h;
    this.y = y;
    this.x = x;
     
    this.body = Bodies.rectangle(x, y, w, h, options);
    
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke("blue");
    strokeWeight(4);
    fill("red");
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}