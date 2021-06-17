# Music theory: Sine waves

*June 2021*

## Introduction

I have a decent understanding of physics and a love of music, but music theory has always mystified me. In this series, I'd like to document my notes on the topic as I try to learn it from scratch. I'm sure this will be far from comprehensive or rigorous, so I welcome suggestions and corrections.

## Sine waves

Why are sine waves used to describe basic musical sounds? This might seem obvious, but it isn't, and the question is often glossed over. The sound of a plucked string, for example, is **not** a pure sine wave. Pure sine waves actually sound [unpleasant](https://szynalski.com/tone#A4,v0.06).

Yes, we can use a Fourier transform to represent any sound as the sum of sine waves, but that begs the question. Why not use some other waveform as the basis for music theory? I think there are two main reasons:

* Sine waves describe simple harmonic motion, in which a restoring force is proportional to displacement ([Hooke's law](https://www.compadre.org/osp/EJSS/4464/250.htm)). This is the simplest of all vibrating systems, and can be used to model the vibrations of musical instruments.[^1]

* Adding two sine waves of the same frequency, but with any phase and magnitude, produces [another sine wave of the same frequency](https://demonstrations.wolfram.com/SumOfSines/). This [unique property](https://en.wikipedia.org/wiki/Sine_wave) is what makes sine waves a good basis for Fourier analysis.

## Related articles
Next: [Intervals](Intervals.html)

[^1]: The use of "simplest" here actually continues to beg the question, though. Why isn't a square wave considered simpler? Maybe someone else can provide a better explanation.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNjUyNjA2MSwtNjUwNjIyNzIsLTIwMz
I5MzIwOF19
-->