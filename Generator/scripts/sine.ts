
function showAxes(ctx: CanvasRenderingContext2D) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var xMin = 0;

    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)";

    // X-Axis
    ctx.moveTo(xMin, height / 2);
    ctx.lineTo(width, height / 2);

    // Y-Axis
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);

    // Starting line
    ctx.moveTo(0, 0);
    ctx.lineTo(0, height);

    ctx.stroke();
}

function plotSine(ctx, xOffset) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(0,0,0)";

    var x = 4;
    var y = 0;
    var amplitude = 40;
    var frequency = 20;
    ctx.moveTo(x, 50);
    while (x < width) {
        y = height / 2 + amplitude * Math.sin((x + xOffset) / frequency);
        ctx.lineTo(x, y);
        x++;
    }
    ctx.stroke();
    ctx.save();
}

function draw() {
    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, 600, 600);
    showAxes(context);
    context.save();

    plotSine(context, step);
    context.restore();

    step += 4;
    window.requestAnimationFrame(draw);
}

function init() {
    window.requestAnimationFrame(draw);
}

var step = -4;
