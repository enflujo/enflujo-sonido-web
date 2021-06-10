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
                    h: Math.floor(Math.random() * 50) + 5,
                    status: 2
                }
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
                if(this.obstaculos[i][j].status == 2){    
                    ctx.beginPath();
                    ctx.rect(x, y, this.obstaculos[i][j].w, this.obstaculos[i][j].h);
                    ctx.fillStyle = "aqua";
                    ctx.fill();
                    ctx.closePath();
                }
                if(this.obstaculos[i][j].status == 1){
                    ctx.beginPath();
                    ctx.rect(x, y, this.obstaculos[i][j].w, this.obstaculos[i][j].h);
                    ctx.fillStyle = "red";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }

    collision(bolitaX, bolitaY, radio, bolitaDx, bolitaDy){
        for (var i = 0; i < this.columns; i++){
            for(var j = 0; j < this.rows; j++){
                var o = this.obstaculos[i][j];

//                           ESTO SE PUEDE MEJORAR 

                if(o.status == 2){ 

                    if(    bolitaX + radio + bolitaDx > o.x 
                        && bolitaX + bolitaDx < o.x + o.w 
                        && bolitaY + radio > o.y 
                        && bolitaY < o.y + o.h){
    
                            bolita.dx = - bolita.dx
                            o.status = 1;
    
                    }
    
                    if(    bolitaX + radio > o.x 
                        && bolitaX < o.x + o.w 
                        && bolitaY + radio + bolitaDy > o.y 
                        && bolitaY + bolitaDy < o.y + o.h){
    
                            bolita.dy = - bolita.dy
                            o.status = 1;
    
                    }
                }
                else if(o.status == 1){ 

                    if(    bolitaX + radio + bolitaDx > o.x 
                        && bolitaX + bolitaDx < o.x + o.w 
                        && bolitaY + radio > o.y 
                        && bolitaY < o.y + o.h){
    
                            bolita.dx = - bolita.dx
                            o.status = 0;
    
                    }
    
                    if(    bolitaX + radio > o.x 
                        && bolitaX < o.x + o.w 
                        && bolitaY + radio + bolitaDy > o.y 
                        && bolitaY + bolitaDy < o.y + o.h){
    
                            bolita.dy = - bolita.dy
                            o.status = 0;
    
                    }
                }
            }
        }
    }
}