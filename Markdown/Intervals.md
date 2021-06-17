# Intervals

*June 2021*

Now that we've decided to represent basic musical sounds as [pure sine waves](SineWaves.html), we can talk about the intervals between two such sounds. Let's just call these basic sounds "notes" for simplicity.

## Unison
The simplest interval is formed by two notes that have the same frequency, although perhaps not the same phase or amplitude. When we add two sine waves together in this way, we are guaranteed to get [another sine wave of the same frequency](https://www.desmos.com/calculator/unwtutu7bl). So, in a sense, unison is still just a single note.

If the two notes are in phase, we get a louder note, and if they are out of phase, they cancel each other out and we get a quieter note. (This is the basis for noise-canceling headphones.)

## Octave
If one note is vibrating twice as fast as the other (i.e. their  frequencies are in a 2:1 ratio) we have an octave. Such notes sound so similar to humans, that they seem to "rhyme" in a way.

The wave form of an octave has alternating tall and short peaks, but [the exact shape of depends on the phase relationship of the two notes](https://www.desmos.com/calculator/7idxde6tyo). Interestingly, all these different wave forms sound the same to humans, because our ears are [insensitive to phase differences](https://ptolemy.berkeley.edu/eecs20/week8/phase.html). (Presumably because we are performing a Fourier transform and discarding the phase information.)

## Consonance
In general, intervals with simple frequency ratios tend to sound pleasant, or "consonant", regardless of the phase relationship of the two notes. Presumably, this is because simple ratios avoid the [unpleasant "beating" effect](https://www.phys.uconn.edu/~gibson/Notes/Section5_5/Sec5_5.htm) that occurs when the ratio isn't as simple (e.g. 11:10).

## Other simple intervals
The next simplest ratio after 2:1 is 3:2, which is called a "perfect fifth". Other simple intervals include:[^1]
* 4:3 - Perfect fourth
* 5:3 - Major sixth
* 5:4 - Major third
* 6:5 - Minor third
* etc.

Clearly, we need a way to organize all these intervals (and explain their confusing names). That will be our next topic.

[^1]: I haven't listed any ratios greater than 2:1 here, because they can always be reduced. For example 5:2 (perfect twelfth) is 1:1 (octave) plus 3:2 (perfect fifth).