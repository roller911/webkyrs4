function drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
}

var canvas = document.getElementById("canvasU_2");
var context = canvas.getContext("2d");

document.onload = drawPic(context);

function drawPic(context) {
            var pic = new Image();
            pic.onload = function () {
                context.drawImage(pic, 50, 15, 200, 120);

                
                context.strokeStyle = "black";
                context.lineWidth = 1; 
                drawRoundedRect(context, 50, 15, 200, 120, 3); // x, y, width, height, radius
                context.stroke();

                
                context.fillStyle = "rgba(200, 255, 199, .1)";
                context.fillRect(50, 15, 200, 120);

                
                context.font = "24px serif"; 
                context.fillStyle = "red"; 
                context.textAlign = "center"; 
                context.textBaseline = "bottom"; 
                context.fillText("", 150, 135); 
            };
            pic.src = "../img/u-2.jpg";
        }

        // Вызов функции рисования после загрузки страницы
        window.onload = function() {
            drawPic(context);
        };