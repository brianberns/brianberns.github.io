var ctx = new AudioContext();

function playFreq(freq, startTime) {
    var envelope = ctx.createGain();
    envelope.gain.value = 0;
    envelope.gain.setValueAtTime(0.1, startTime);
    envelope.gain.setTargetAtTime(0, startTime, .5);
    envelope.connect(ctx.destination);

    var osc = ctx.createOscillator();
    osc.frequency.value = freq;
    osc.type = "sine";
    osc.connect(envelope);
    osc.start();
}

function playRatios(ratios, freq) {
    ratios
        .map((ratio, index) => [ratio, index])
        .forEach(([ratio, index]) =>
            playFreq(freq * ratio, ctx.currentTime + index/1.5));
}
