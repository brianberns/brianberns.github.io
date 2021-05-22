var Graph = /** @class */ (function () {
    function Graph(canvas) {
        this.xStart = 0;
        this.xZoom = 1;
        this.yZoom = 1;
        this.strokeStyles = ["red", "blue"];
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
    Graph.prototype.drawAxes = function () {
        this.ctx.strokeStyle = "gray";
        this.ctx.beginPath();
        var tickLen = 3;
        // x-axis
        var yPos = this.ctx.canvas.height / 2;
        this.ctx.moveTo(0, yPos);
        this.ctx.lineTo(this.ctx.canvas.width, yPos);
        // x-axis ticks
        var xMinCoord = this.getCoord(0, yPos)[0];
        var xMaxCoord = this.getCoord(this.ctx.canvas.width, yPos)[0];
        for (var xCoord = Math.ceil(xMinCoord); xCoord <= Math.floor(xMaxCoord); ++xCoord) {
            var xPos_1 = this.getPosition(xCoord, 0)[0];
            this.ctx.moveTo(xPos_1, yPos - tickLen);
            this.ctx.lineTo(xPos_1, yPos + tickLen);
        }
        // y-axis
        var xPos = this.ctx.canvas.width / 2;
        this.ctx.moveTo(xPos, 0);
        this.ctx.lineTo(xPos, this.ctx.canvas.height);
        // y-axis ticks
        var _a = this.getCoord(xPos, this.ctx.canvas.height), yMinCoord = _a[1];
        var _b = this.getCoord(xPos, 0), yMaxCoord = _b[1];
        for (var yCoord = Math.ceil(yMinCoord); yCoord <= Math.floor(yMaxCoord); ++yCoord) {
            var _c = this.getPosition(0, yCoord), yPos_1 = _c[1];
            this.ctx.moveTo(xPos - tickLen, yPos_1);
            this.ctx.lineTo(xPos + tickLen, yPos_1);
        }
        this.ctx.stroke();
    };
    Graph.prototype.drawFunctions = function (funs) {
        // draw axes
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.drawAxes();
        // draw each function
        for (var iFun = 0; iFun < funs.length; ++iFun) {
            var fun = funs[iFun];
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.strokeStyles[iFun % this.strokeStyles.length];
            // draw the function
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
        }
    };
    Graph.prototype.drawFunction = function (fun) {
        this.drawFunctions([fun]);
    };
    return Graph;
}());
function init() {
    var canvas = document.getElementById("canvas");
    var graph = new Graph(canvas);
    var xStart = -10;
    var yMax = 1.5;
    graph.setStart(xStart, -yMax);
    graph.setEnd(-xStart, yMax);
    function draw() {
        graph.setStart(xStart, -yMax);
        graph.drawFunctions([Math.sin, Math.cos]);
        xStart += 0.05;
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
}
//# sourceMappingURL=sine.js.map