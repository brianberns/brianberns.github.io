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

    private moveToCoord(xCoord: number, yCoord: number) {
        let [xPos, yPos] = this.getPosition(xCoord, yCoord);
        this.ctx.moveTo(xPos, yPos);
    }

    private lineToCoord(xCoord: number, yCoord: number) {
        let [xPos, yPos] = this.getPosition(xCoord, yCoord);
        this.ctx.lineTo(xPos, yPos);
    }

    private drawAxes() {
        this.ctx.strokeStyle = "gray";
        this.ctx.beginPath();
        let [xPos, yPos] = this.getPosition(0, 0);

            // x-axis
        this.ctx.moveTo(0, yPos);
        this.ctx.lineTo(this.ctx.canvas.width, yPos);

            // y-axis
        this.ctx.moveTo(xPos, 0);
        this.ctx.lineTo(xPos, this.ctx.canvas.height);

        this.ctx.stroke();
    }

    public drawFunction(fun: (x: number) => number) {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.drawAxes();

        this.ctx.beginPath();
        this.ctx.strokeStyle = "red";
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

function init() {
    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    let graph = new Graph(canvas);
    let xStart = -10;
    let yMax = 1.5
    graph.setStart(xStart, -yMax);
    graph.setEnd(-xStart, yMax);
    function draw() {
        graph.setStart(xStart, -1.5);
        graph.drawFunction(Math.sin);
        xStart += 0.1;
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
}
