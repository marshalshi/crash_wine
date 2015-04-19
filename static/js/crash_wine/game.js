/* game main functions */


function initGame(canvas) {

    gContext = canvas[0].getContext('2d');

    gContext.canvas.width = $(canvas).width();
    gContext.canvas.height = $(canvas).height();

    gContext.fillStyle = "#ff0000";
    gContext.fillRect(0,0,150,75);
}