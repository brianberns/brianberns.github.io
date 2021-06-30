var ctx = new AudioContext();

function playNote(freq, startTime) {
    var envelope = ctx.createGain();
    envelope.gain.value = 0;
    envelope.gain.setValueAtTime(0.15, startTime);
    envelope.gain.setTargetAtTime(0, startTime, 1);
    envelope.connect(ctx.destination);

    var osc = ctx.createOscillator();
    osc.frequency.value = freq;
    osc.type = "sine";
    osc.connect(envelope);
    osc.start();
}

function playScale() {
    var freq = 110;
    var offset = 0;
    for (let i = 0; i < 7; i++) {
        playNote(freq, ctx.currentTime + offset);
        freq = 3 / 2 * freq;
        offset = offset + 1;
    }
}
