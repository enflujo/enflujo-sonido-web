class Obstaculos {
    constructor(){
        this.rows = 5;
        this.columns = 5;
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
}