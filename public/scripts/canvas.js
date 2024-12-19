function drawPic(context, canvasId, imageUrl, x, y, width, height) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    var pic = new Image();
    pic.onload = function () {
        ctx.drawImage(pic, x, y, width, height);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 0.5;
        ctx.stroke();

    };
    pic.src = imageUrl;
}


window.onload = function() {
    drawPic(null, "canvasU_1", "../img/game1_1.jpg", 0, 0, 100, 100);
    drawPic(null, "canvasU_2", "../img/game1_2.jpg", 0, 0, 100, 100);
    drawPic(null, "canvasU_3", "../img/game1_3.jpg", 0, 0, 100, 100);
};