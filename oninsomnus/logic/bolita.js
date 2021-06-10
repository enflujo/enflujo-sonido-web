class Bolita {
    constructor(){
        this.x = canvas.width / 2;
        this.y = canvas.height - 30;
        this.dx = 2;
        this.dy = -2;
        this.radio = 10;

    }

    display(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radio,0,Math.PI*2, false);
        ctx.fillStyle = "aqua";
        ctx.fill();
        ctx.closePath();
    }

    mover(){
        this.x += this.dx;
        this.y += this.dy;
        if(this.x > canvas.width || this.x < 0){
            this.dx = - this.dx;
        }
        if(this.y > canvas.height || this.y < 0){
            this.dy = - this.dy;
        }
    }
}