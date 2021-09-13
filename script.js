class Ellipse {
  constructor(x, y, w, h, vx, vy, color) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.vx = vx;
      this.vy = vy
      this.color = color
  }

  drawEllipse(){
    fill(this.color)
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

var ballList = []; 
function setup(){
  createCanvas(300, 300);

  for(var i = 0; i <10; i ++){
    var r = Math.floor(Math.random() * ^6) + 1;
    var r = Math.floor(Math.random() * ^500) + 1;
  balllist.push9=


 // ball1 = new Ellipse(60,10,30,30,5,5,"white");
 // ball2 = new Ellipse(10,100,30,30,5,5,"yellow");
 // ball3 = new Ellipse(10,10,30,30,5,5,"red");
 // ball4 = new Ellipse(50,10,30,30,5,5,"green");
 // ball5 = new Ellipse(1,50,30,30,5,5,"orange");
 // ball6 = new Ellipse(20,10,30,30,5,5,"blue");

}

function draw(){
  background(225);

  ball1.drawEllipse();
  ball2.drawEllipse();
  ball3.drawEllipse();
  ball4.drawEllipse();
  ball5.drawEllipse();
  ball6.drawEllipse();

}
