class Ellipse {
  constructor(x, y, w, h, vx, vy) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.vx = vx;
      this.vy = vy
  }

  drawEllipse(){
    ellipse(this.x, this.y, this.w, this.h);


    this.y = this.y + this.vy;
    this.x = this.x + this.vx;


    if(this.x <=0 || this.x >=300){
      this.vx = this.vx * -1;
    }

    if(this.y <=0 || this.y >=300){
      this.vy = this.vy * -1;
    }
  }
}

function setup(){
  createCanvas(300, 300);

  ball1 = new Ellipse(10,10,30,30,5,5);
  ball2 = new Ellipse(100,100,30,30,15,5);
}

function draw(){
  background(225);

  ball1.drawEllipse();
  ball2.drawEllipse();
}
