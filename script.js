class Ball{
  constructor(x, y, w, h, vx, vy,_color){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.color = _color
  }

 draw() {
 fill(this.color)
 rect(this.x,this.y,50,50);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x > 500 || this.x < 0){
      this.vx = this.vx * -1;
    }

    if(this.y < 0 || this.y > 400){
      this.vy = this.vy * -1;
    }
  }
}

var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12;
var ballList = [];


function setup() {
  createCanvas(500, 400);
  for(var i = 0; i < 50; i++){
    var r = Math.floor(Math.random() * 6) + 1;
    var x = Math.floor(Math.random() * 500) + 1;
    var y = Math.floor(Math.random() * 500) + 1;
    var c = Math.floor(Math.random() * 255) + 1;
    var l = Math.floor(Math.random() * 80) + 1;
    ball = new Ball(x,y,l,50,r,r,c);
    ballList.push(ball);
  }
  // ball1 = new Ball(30,200,50,50,5,5,"black")
  // ball2 = new Ball(30,200,50,50,55,5,"yellow")
  // ball3 = new Ball(30,200,50,50,3,5,"blue")
  // ball4 = new Ball(30,100,50,50,0.5,1,"red")
  // ball5 = new Ball(30,200,50,50,5,5,"black")
  // ball6 = new Ball(100,200,50,50,30,5,"purple")
  // ball7 = new Ball(30,200,50,50,20,10,"pink")
  // ball8 = new Ball(30,200,40,50,35,5,"orange")
  // ball9 = new Ball(30,200,40,50,6,2,"lightblue")
  // ball10 = new Ball(30,200,50,50,1,1,"pink")
  // ball11 = new Ball(30,200,40,50,0.3,0.3,"orange")
  // ball12 = new Ball(30,200,40,50,0.2,0.2,"lightblue")
}

function draw() {
  background(255);
  ballList.forEach(function(ball){
    ball.draw();
  }); 
 
}
