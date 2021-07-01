var ctx = new AudioContext();

function play() {
	var osc = ctx.createOscillator();
	osc.type = "sine";
	osc.frequency.value = 440;
	osc.connect(ctx.destination);
	osc.start();
	osc.stop(ctx.currentTime + 0.5);
}
