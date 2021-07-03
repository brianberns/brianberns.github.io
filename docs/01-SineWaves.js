let ctx = new AudioContext();

function play() {
	let osc = ctx.createOscillator();
	osc.type = "sine";
	osc.frequency.value = 440;
	osc.connect(ctx.destination);
	osc.start();
	osc.stop(ctx.currentTime + 0.5);
}
