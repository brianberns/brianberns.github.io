type GraphableFunction = (x: number) => number;

class Graph {

    constructor(canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext("2d");
        this.yStart = -canvas.height / 2;
    }
    private readonly ctx: CanvasRenderingContext2D;
    private xStart = 0;
    private yStart: number;
    private xZoom = 1;
    private yZoom = 1;

    public setStart(xStart: number, yStart: number) {
        this.xStart = xStart;
        this.yStart = yStart;
    }

    public setZoom(xZoom: number, yZoom: number) {
        this.xZoom = xZoom;
        this.yZoom = yZoom;
    }

    public setEnd(xEnd: number, yEnd: number) {
        this.xZoom = this.ctx.canvas.width / (xEnd - this.xStart);
        this.yZoom = this.ctx.canvas.height / (yEnd - this.yStart);
    }

    private getPosition(xCoord: number, yCoord: number): [number, number] {
        let xPos = (xCoord - this.xStart) * this.xZoom;
        let yPos = this.ctx.canvas.height - ((yCoord - this.yStart) * this.yZoom);
        return [xPos, yPos];
    }

    private getCoord(xPos: number, yPos: number): [number, number] {
        let xCoord = (xPos / this.xZoom) + this.xStart;
        let yCoord = ((this.ctx.canvas.height - yPos) / this.yZoom) + this.yStart;
        return [xCoord, yCoord];
    }

    private drawAxes() {
        this.ctx.strokeStyle = "gray";
        this.ctx.beginPath();
        const tickLen = 3;

            // x-axis
        let yPos = this.ctx.canvas.height / 2;
        this.ctx.moveTo(0, yPos);
        this.ctx.lineTo(this.ctx.canvas.width, yPos);

            // x-axis ticks
        let [xMinCoord,] = this.getCoord(0, yPos);
        let [xMaxCoord,] = this.getCoord(this.ctx.canvas.width, yPos);
        for (let xCoord = Math.ceil(xMinCoord); xCoord <= Math.floor(xMaxCoord); ++xCoord) {
            let [xPos,] = this.getPosition(xCoord, 0);
            this.ctx.moveTo(xPos, yPos - tickLen);
            this.ctx.lineTo(xPos, yPos + tickLen);
        }

            // y-axis
        let xPos = this.ctx.canvas.width / 2;
        this.ctx.moveTo(xPos, 0);
        this.ctx.lineTo(xPos, this.ctx.canvas.height);

            // y-axis ticks
        let [, yMinCoord] = this.getCoord(xPos, this.ctx.canvas.height);
        let [, yMaxCoord] = this.getCoord(xPos, 0);
        for (let yCoord = Math.ceil(yMinCoord); yCoord <= Math.floor(yMaxCoord); ++yCoord) {
            let [,yPos] = this.getPosition(0, yCoord);
            this.ctx.moveTo(xPos - tickLen, yPos);
            this.ctx.lineTo(xPos + tickLen, yPos);
        }

        this.ctx.stroke();
    }

    private strokeStyles = ["red", "blue"];

    public drawFunctions(funs: GraphableFunction[]) {

            // draw axes
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.drawAxes();

            // draw each function
        for (let iFun = 0; iFun < funs.length; ++iFun) {

            let fun = funs[iFun];
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.strokeStyles[iFun % this.strokeStyles.length];

                // draw the function
            for (let xPos = 0; xPos < this.ctx.canvas.width; xPos++) {
                let [xCoord,] = this.getCoord(xPos, 0);
                let yCoord = fun(xCoord);
                let [, yPos] = this.getPosition(0, yCoord);
                if (xPos == 0) this.ctx.moveTo(xPos, yPos)
                else this.ctx.lineTo(xPos, yPos);
            }

            this.ctx.stroke();
        }
    }

    public drawFunction(fun: GraphableFunction) {
        this.drawFunctions([fun]);
    }
}

function init() {
    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    let graph = new Graph(canvas);
    let xStart = -10;
    let yMax = 1.5
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
