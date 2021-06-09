var canvas, ctx, x, y, dx, dy, bolita, base, obstaculos;

function init(){

    canvas = document.querySelector("#tutorial");    
    ctx = canvas.getContext("2d");

    ctx.globalAlpha = 0.5;

    bolita = new Bolita;
    base = new Base;
    obstaculos = new Obstaculos;
    obstaculos.arreglo();

    setInterval(draw, 10);

}

function draw(){

    if(canvas.getContext){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bolita.mover();
        bolita.display();
        base.display();            
        obstaculos.display();
        obstaculos.collision(bolita.x, bolita.y);

    } else {
        
    }
}