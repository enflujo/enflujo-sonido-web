class Base {
    constructor(){
        this.height = 10;
        this.width = 75;
        this.x = (canvas.width - this.width) / 2;
        this.derecha = false;
        this.izquierda = false;
        document.addEventListener("keydown", this.teclas.bind(this), false);
        document.addEventListener("keyup", this.teclas.bind(this), false);
    }

    display(){
        ctx.beginPath();
        ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
        ctx.fillStyle = "aqua";
        ctx.fill();
        ctx.closePath();
    }

    teclas(e){
        switch(e.type){
            case "keyup":
                if(e.key == "Right" || e.key == "ArrowRight"){
                    this.derecha = false;
                }
                else if(e.key == "Left" || e.key == "ArrowLeft"){
                    this.izquierda = false;
                }
                break;
            case "keydown":
                if(e.key == "Right" || e.key == "ArrowRight"){
                    this.derecha = true;
                }
                else if(e.key == "Left" || e.key == "ArrowLeft"){
                    this.izquierda = true;
                }                
                this.mover()
                break;
        }
    }

    mover(){
        if(this.derecha && this.x + this.width < canvas.width){
            this.x += 10;
        }
        else if(this.izquierda && this.x > 0){
            this.x -= 10;
        }
    }
}