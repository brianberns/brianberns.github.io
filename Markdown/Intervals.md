---
title: Music theory - Intervals
---
# Music theory: Intervals

*June 2021*

Now that we've decided to represent basic musical sounds as [pure sine waves](SineWaves.html), we can talk about the intervals between two such sounds. Let's just call these basic sounds "notes" for simplicity.

## Unison

The simplest interval is formed by two notes that have the same frequency, although perhaps not the same phase or amplitude. When we add two sine waves together in this way, we are guaranteed to get [another sine wave of the same frequency](https://www.desmos.com/calculator/unwtutu7bl). So, in a sense, unison is still just a single note.

If the two notes are in phase, we get a louder note, and if they are out of phase, they cancel each other out and we get a quieter note. (This is the basis for noise-canceling headphones.)

## Octave

If one note is vibrating twice as fast as the other (i.e. their frequencies are in a 2:1 ratio) we have an octave. Such notes sound similar to humans; they seem to "rhyme" in a way.

The waveform of an octave has alternating tall and short peaks, but [its exact shape of depends on the phase relationship of the two notes](https://www.desmos.com/calculator/7idxde6tyo). Interestingly, all these different waveforms sound the same to humans, because our ears are [insensitive to phase differences](https://ptolemy.berkeley.edu/eecs20/week8/phase.html). (Presumably because we are performing a Fourier transform and discarding the phase information.)

## Consonance

In general, intervals with simple frequency ratios tend to sound pleasant, or "consonant", regardless of the phase relationship of the two notes. These simple ratios avoid the [unpleasant "beating" effect](https://www.phys.uconn.edu/~gibson/Notes/Section5_5/Sec5_5.htm) that occurs when the ratio isn't as simple (e.g. 11:10).

The next simplest ratio after 2:1 is 3:2, which is called a "perfect fifth". We can continue in this way to build a list of consonant intervals:

* 1:1 - Unison
* 2:1 - Octave
* 3:2 - Perfect fifth
* 4:3 - Perfect fourth
* 5:3 - Major sixth
* 5:4 - Major third
* 6:5 - Minor third
* etc.

Clearly, we need a way to organize all these intervals (and explain their confusing names). We'll start discussing that soon.

## Stacking

When the frequency ratio of an interval is greater than 2:1, it can thought of as a "stack" of simpler intervals. For example, the 3:1 ratio is called a perfect twelfth, but is equivalent to an octave plus a fifth. Be careful, though: We use the word "plus" here because intervals are logarithmic. We actually have to multiply the ratios together: 3&frasl;1 = 2&frasl;1 &times; 3&frasl;2.

## Related articles

Previous: [Sine waves](SineWaves.html)
