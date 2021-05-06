var Graph = /** @class */ (function () {
    function Graph(canvas) {
        this.xStart = 0;
        this.xZoom = 1;
        this.yZoom = 1;
        this.ctx = canvas.getContext("2d");
        this.yStart = -canvas.height / 2;
    }
    Graph.prototype.setStart = function (xStart, yStart) {
        this.xStart = xStart;
        this.yStart = yStart;
    };
    Graph.prototype.setZoom = function (xZoom, yZoom) {
        this.xZoom = xZoom;
        this.yZoom = yZoom;
    };
    Graph.prototype.setEnd = function (xEnd, yEnd) {
        this.xZoom = this.ctx.canvas.width / (xEnd - this.xStart);
        this.yZoom = this.ctx.canvas.height / (yEnd - this.yStart);
    };
    Graph.prototype.getPosition = function (xCoord, yCoord) {
        var xPos = (xCoord - this.xStart) * this.xZoom;
        var yPos = this.ctx.canvas.height - ((yCoord - this.yStart) * this.yZoom);
        return [xPos, yPos];
    };
    Graph.prototype.getCoord = function (xPos, yPos) {
        var xCoord = (xPos / this.xZoom) + this.xStart;
        var yCoord = ((this.ctx.canvas.height - yPos) / this.yZoom) + this.yStart;
        return [xCoord, yCoord];
    };
    Graph.prototype.moveToCoord = function (xCoord, yCoord) {
        var _a = this.getPosition(xCoord, yCoord), xPos = _a[0], yPos = _a[1];
        this.ctx.moveTo(xPos, yPos);
    };
    Graph.prototype.lineToCoord = function (xCoord, yCoord) {
        var _a = this.getPosition(xCoord, yCoord), xPos = _a[0], yPos = _a[1];
        this.ctx.lineTo(xPos, yPos);
    };
    Graph.prototype.drawAxes = function () {
        this.ctx.strokeStyle = "gray";
        this.ctx.beginPath();
        var _a = this.getPosition(0, 0), xPos = _a[0], yPos = _a[1];
        // x-axis
        this.ctx.moveTo(0, yPos);
        this.ctx.lineTo(this.ctx.canvas.width, yPos);
        // y-axis
        this.ctx.moveTo(xPos, 0);
        this.ctx.lineTo(xPos, this.ctx.canvas.height);
        this.ctx.stroke();
    };
    Graph.prototype.drawFunction = function (fun) {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.drawAxes();
        this.ctx.beginPath();
        this.ctx.strokeStyle = "red";
        for (var xPos = 0; xPos < this.ctx.canvas.width; xPos++) {
            var xCoord = this.getCoord(xPos, 0)[0];
            var yCoord = fun(xCoord);
            var _a = this.getPosition(0, yCoord), yPos = _a[1];
            if (xPos == 0)
                this.ctx.moveTo(xPos, yPos);
            else
                this.ctx.lineTo(xPos, yPos);
        }
        this.ctx.stroke();
    };
    return Graph;
}());
function init() {
    var canvas = document.getElementById("canvas");
    var graph = new Graph(canvas);
    graph.setStart(-10, -1.5);
    graph.setEnd(10, 1.5);
    function draw() {
        graph.drawFunction(Math.sin);
        // window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
}
//# sourceMappingURL=sine.js.map