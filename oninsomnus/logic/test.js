var canvas, ctx, x, y, dx, dy, bolita, base, obstaculos;

function init(){

    canvas = document.querySelector("#tutorial");    
    ctx = canvas.getContext("2d");
    bolita = new Bolita;
    obstaculos = new Obstaculos;
    obstaculos.arreglo();
    canvas.onmousemove = function(e){
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bolita.x = e.offsetX;
        bolita.y = e.offsetY;
        bolita.display();        
        obstaculos.display();
        obstaculos.collision(bolita.x, bolita.y);

    }

    ctx.globalAlpha = 0.5;

}

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

class Obstaculos {
    constructor(){
        this.rows = 1;
        this.columns = 1;
        this.height = 0;
        this.width = 0;
        this.padding = 10;
        this.top = 30;
        this.left = 30;
        this.obstaculos = [];
    }

    arreglo(){
        for (var i = 0; i < this.columns; i++){
            this.obstaculos[i] = [];
            for(var j = 0; j < this.rows; j++){
                this.obstaculos[i][j] = {
                    x: 0, 
                    y: 0, 
                    w: Math.floor(Math.random() * 125) + 5,     
                    h: Math.floor(Math.random() * 50) + 5};
            }
        }
    }

    display(){
        for (var i = 0; i < this.columns; i++){
            for(var j = 0; j < this.rows; j++){

                var x = (i*(this.obstaculos[i][j].w+this.padding))+this.left
                var y = (j*(this.obstaculos[i][j].h+this.padding))+this.top
                this.obstaculos[i][j].x = x
                this.obstaculos[i][j].y = y

                ctx.beginPath();
                ctx.rect(x, y, this.obstaculos[i][j].w, this.obstaculos[i][j].h);
                ctx.fillStyle = "aqua";
                ctx.fill();
                ctx.closePath();

            }
        }
    }

    collision(bolitaX, bolitaY){
        for (var i = 0; i < this.columns; i++){
            for(var j = 0; j < this.rows; j++){
                var b = this.obstaculos[i][j];

                if(bolitaX > b.x && bolitaX < b.x + b.w && bolitaY > b.y && bolitaY < b.y + b.h){
                    bolita.dy = - bolita.dy
                    console.log(bolitaX, bolitaY);
                    console.log(b.x, b.y, b.x + b.w, b.y + b.h);
                }

            }
        }
    }
}