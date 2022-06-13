const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
ctx.fillRect(0,0,width,height);
let ball_count = 0;
const para = document.querySelector('p');

function rando_min_max(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function random_color(){
    return `rgb(${rando_min_max(0,255)},${rando_min_max(0,255)},${rando_min_max(0,255)})`
}

class Shape{
    constructor(x,y,dx,dy){
        this.x=x,
        this.y=y,
        this.dx=dx,
        this.dy=dy
    }
}

class Ball extends Shape{
    constructor(x,y,dx,dy,color,size,exists){
        super(x,y,dx,dy)
        this.color=color,
        this.size=size,
        this.exists = true
    };
    //drawing the ball on the canvas
    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
        ctx.fillStyle=this.color;
        ctx.fill();
    }
    //updating the position of ball when moving
    movement(){
        if(this.x+this.size>width || this.x-this.size<0){
            this.dx*=-1;
        }
        if(this.y+this.size>height || this.y-this.size<0){
            this.dy*=-1;
        }
        this.x+=this.dx;
        this.y+=this.dy;
    }
};

class EvilCircle extends Shape{

    constructor(x,y,dx,dy,color,size){
        super(x,y,20,20),
        this.color="#fff",
        this.size=10,
        window.addEventListener("keydown",(e)=>{
            switch(e.key){
                case "w":
                    this.y-=this.dy;
                    break;
                case "s":
                    this.y+=this.dy;
                    break;
                case "a":
                    this.x-=this.dx;
                    break;
                case "d":
                    this.x+=this.dx;
                    break;
            }
        })
    }

    draw(){
        ctx.beginPath();
        ctx.lineWidth=3;
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
        ctx.strokeStyle=this.color;
        ctx.stroke();
    }
    checkBounds(){
        if(this.x+this.size>width){
            this.x-=this.size;
        }
        if(this.x-this.size<0){
            this.x+=this.size;
        }
        if(this.y+this.size>height){
            this.y-=this.size;
        }
        if(this.y-this.size<0){
            this.y+=this.size;
        }
    }
    collisonDetect(){
        for(const b of Balls){
            if (b.exists){
                const x_hat = b.x-this.x;
                const y_hat = b.y-this.y;
                const dist = Math.sqrt(x_hat**2+y_hat**2);
                if(dist<this.size+b.size){
                    b.exists=false;
                    ball_count--;
                    para.textContent="Ball Count: "+ball_count;
                }
            }
        }
    }
}

const total_balls = 9
//Creating Balls
const Balls = []
while(Balls.length<total_balls){
    const size = rando_min_max(10,20);
    const ball = new Ball(
        rando_min_max(0+size,width-size),
        rando_min_max(0+size,height-size),
        rando_min_max(-7,7),
        rando_min_max(-7,7),
        random_color(),
        size
    )
    Balls.push(ball);
    ball_count++;
    para.textContent="Ball Count: "+ball_count;
}

Ball.prototype.collisonDetect=function(){
    for(const b of Balls){
        if(!(this===b &&b.exists)){
            const x_hat = this.x-b.x;
            const y_hat = this.y-b.y;
            const dist = Math.sqrt(x_hat*x_hat+y_hat**2)
            if(dist<this.size+b.size){
                b.color = this.color = random_color();

            }
        }
    }
}

const evilBall = new EvilCircle(rando_min_max(0, width), rando_min_max(0, height));

function loop(){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    for(const b of Balls){
        if(b.exists){
            b.draw();
            b.movement();
            b.collisonDetect()
        }
    }
    evilBall.draw();
    evilBall.checkBounds();
    evilBall.collisonDetect();
    requestAnimationFrame(loop)
}
loop();

const x = new EvilCircle(30,30)
x.draw()
