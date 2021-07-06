let ctx = new AudioContext();

function playFreq(freq, startTime) {
    let envelope = ctx.createGain();
    envelope.gain.value = 0;
    envelope.gain.setValueAtTime(0.1, startTime);
    envelope.gain.setTargetAtTime(0, startTime, .5);
    envelope.connect(ctx.destination);

    let osc = ctx.createOscillator();
    osc.frequency.value = freq;
    osc.type = "sine";
    osc.connect(envelope);
    osc.start();
}

const note = {
    C: 523.2511,
    Csharp: 554.3653,
    Dflat: 554.3653,
    D: 587.3295,
    Dsharp: 622.2540,
    Eflat: 622.2540,
    E: 659.2551,
    F: 698.4565,
    Fsharp: 739.9888,
    Gflat: 739.9888,
    G: 783.9909,
    Gsharp: 830.6094,
    Aflat: 830.6094,
    A: 880.0000,
    Asharp: 932.3275,
    Bflat: 932.3275,
    B: 987.7666
}

function playRatios(ratios, freq) {
    ratios
        .map((ratio, index) => [ratio, index])
        .forEach(([ratio, index]) =>
            playFreq(freq * ratio, ctx.currentTime + index/1.5));
}

function playHalfSteps(halfSteps, freq) {
    let ratios = halfSteps.map(n => 2 ** (n / 12));
    playRatios(ratios, freq);
}

function playMajorScale(freq) {
    let ratios = [
        0,
        2,    // W
        4,    // W
        5,    // h
        7,    // W
        9,    // W
        11,   // W
        12    // h
    ];
    playRatios(ratios, freq);
}

function playMinorScale(freq) {
    let ratios = [
        0,
        2,    // W
        3,    // h
        5,    // W
        7,    // W
        8,    // h
        10,   // W
        12    // W
    ];
    playRatios(ratios, freq);
}
