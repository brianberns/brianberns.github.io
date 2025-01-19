---
title: Music theory - Intervals
---
<script src="Sound.js"></script>

# Music theory: Intervals

*June 2021*

Now that we've decided to represent basic musical sounds as [pure sine waves](01-SineWaves.html), we can talk about the intervals between two such sounds. Let's just call these basic sounds "notes" for simplicity.

## Unison

The simplest interval is formed by two notes that have the same frequency, although perhaps not the same phase or amplitude. When we add two sine waves together in unison, we are guaranteed to get [another sine wave of the same frequency](https://www.desmos.com/calculator/unwtutu7bl). So, in a sense, unison (also called a "prime" interval) is still just a single note.

If the two notes are in phase, we get a louder note, and if they are out of phase, they cancel each other out and we get a quieter note. (This is the basis for noise-canceling headphones.)

## Octave

If one note is vibrating twice as fast as the other (i.e. their frequencies are in a 2:1 ratio) we have an octave <button onclick="playRatios([1, 2], 440)">&#9654;</button>. Such notes sound similar to humans; they seem to "rhyme" in a way.

The waveform of an octave has alternating tall and short peaks, but [its exact shape of depends on the phase relationship of the two notes](https://www.desmos.com/calculator/7idxde6tyo). Interestingly, all these different waveforms sound the same to humans, because our ears are [insensitive to phase differences](https://ptolemy.berkeley.edu/eecs20/week8/phase.html). (Presumably because we are performing a Fourier transform and discarding the phase information.)

## Consonance

In general, intervals with simple frequency ratios tend to sound pleasant, or "consonant", regardless of the phase relationship of the two notes. These simple ratios avoid the [unpleasant "beating" effect](https://www.phys.uconn.edu/~gibson/Notes/Section5_5/Sec5_5.htm) that occurs when the ratio isn't as simple (e.g. 11:10 <button onclick="playRatios([1, 11/10], 440)">&#9654;</button>).

The next simplest ratio after 2:1 is 3:2, which is called a "perfect fifth" <button onclick="playRatios([1, 3/2], 440)">&#9654;</button>. We can continue in this way to build a list of consonant intervals:

| Ratio | Name | Play |
| ----- | ---- | ---- |
| 1:1 | Unison/Prime | <button onclick="playRatios([1, 1], 440)">&#9654;</button> |
| 2:1 | Octave | <button onclick="playRatios([1, 2], 440)">&#9654;</button> |
| 3:2 | Perfect fifth | <button onclick="playRatios([1, 3/2], 440)">&#9654;</button> |
| 4:3 | Perfect fourth | <button onclick="playRatios([1, 4/3], 440)">&#9654;</button> |
| 5:3 | Major sixth | <button onclick="playRatios([1, 5/3], 440)">&#9654;</button> |
| 5:4 | Major third | <button onclick="playRatios([1, 5/4], 440)">&#9654;</button> |
| 6:5 | Minor third | <button onclick="playRatios([1, 6/5], 440)">&#9654;</button> |
| etc. | |

Clearly, we need a way to organize all these intervals (and explain their confusing names). We'll start discussing that soon.

## Stacking

When the frequency ratio of an interval is greater than 2:1, it can thought of as a "stack" of simpler intervals. For example, the 3:1 ratio <button onclick="playRatios([1, 3], 440)">&#9654;</button> is called a perfect twelfth, but is equivalent to an octave plus a fifth <button onclick="playRatios([1, 2, 3], 440)">&#9654;</button>. Be careful, though: We use the word "plus" here because intervals are logarithmic. We actually have to multiply the ratios together: 3&frasl;1 = 2&frasl;1 &times; 3&frasl;2.

## Related articles

* Previous: [Sine waves](01-SineWaves.html)
* Next: [Pythagorean scales](03-PythagoreanScales.html)
