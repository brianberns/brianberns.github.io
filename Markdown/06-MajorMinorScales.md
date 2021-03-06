---
title: Music theory - Major and minor scales
---
<script src="Sound.js"></script>

# Music theory: Major and minor scales

*July 2021*

A diatonic scale has seven notes per octave, and the half steps (`h`) are separated from each other by alternating groups of two and three whole steps (`W`): `W W W h W W h W W W h W W h` ... . The starting point of the pattern determines whether the scale is "major" or "minor":[^1]

* Major: `W W h W W W h`
* Minor: `W h W W h W W`

Major scales are often [considered](https://www.reddit.com/r/musictheory/comments/9wf9me/why_are_minor_keys_sad_and_major_keys_happy/) "happy" and minor scales "sad".

The name of a scale is determined by its first note, so the major scale that starts with C is "C major". This gives us 24 distinct scales:

| Note             | Major scale | Minor scale |
| ---------------- | :---------: | :---------: |
| C                | <button onclick="playMajorScale(note.C)">&#9654;</button> | <button onclick="playMinorScale(note.C)">&#9654;</button> |
| C&sharp;/D&flat; | <button onclick="playMajorScale(note.Csharp)">&#9654;</button> | <button onclick="playMinorScale(note.Csharp)">&#9654;</button> |
| D                | <button onclick="playMajorScale(note.D)">&#9654;</button> | <button onclick="playMinorScale(note.D)">&#9654;</button> |
| D&sharp;/E&flat; | <button onclick="playMajorScale(note.Dsharp)">&#9654;</button> | <button onclick="playMinorScale(note.Dsharp)">&#9654;</button> |
| E                | <button onclick="playMajorScale(note.E)">&#9654;</button> | <button onclick="playMinorScale(note.E)">&#9654;</button> |
| F                | <button onclick="playMajorScale(note.F)">&#9654;</button> | <button onclick="playMinorScale(note.F)">&#9654;</button> |
| F&sharp;/G&flat; | <button onclick="playMajorScale(note.Fsharp)">&#9654;</button> | <button onclick="playMinorScale(note.Fsharp)">&#9654;</button> |
| G                | <button onclick="playMajorScale(note.G)">&#9654;</button> | <button onclick="playMinorScale(note.G)">&#9654;</button> |
| G&sharp;/A&flat; | <button onclick="playMajorScale(note.Gsharp)">&#9654;</button> | <button onclick="playMinorScale(note.Gsharp)">&#9654;</button> |
| A                | <button onclick="playMajorScale(note.A)">&#9654;</button> | <button onclick="playMinorScale(note.A)">&#9654;</button> |
| A&sharp;/B&flat; | <button onclick="playMajorScale(note.Asharp)">&#9654;</button> | <button onclick="playMinorScale(note.Asharp)">&#9654;</button> |
| B                | <button onclick="playMajorScale(note.B)">&#9654;</button> | <button onclick="playMinorScale(note.B)">&#9654;</button> |

A piece of music primarily written using the notes of a particular diatonic scale is said to be in that scale's "key" &ndash; for example, in the key of C major.

## Sharps vs. flats

Consider the D major scale. We could write it using either sharps or flats (or even a combination of both):

| 1 | 2 | 3        | 4 | 5 | 6 | 7        | 8 |
| - | - | -------- | - | - | - | -------- | - |
| D | E | F&sharp; | G | A | B | C&sharp; | D |
| D | E | G&flat;  | G | A | B | D&flat;  | D |

The first is preferred over the second because each of the note names appears exactly once. The second is harder to read because it contains both G&flat; and G, and D&flat; and D. All diatonic scales have this property: they can be written using all seven note names in sequence, with either sharps or flats (but not both) on a subset of the notes. This set of sharps or flats is called the scale's "key signature".

## Relative scales

Major and minor scales overlap:

<pre>
<span style="background-color:lightyellow">|    major    |    major    |    major    |          
1 2 3 4 5 6 7 1 2 3 4 5 6 7 1 2 3 4 5 6 7 1 2 3 4 5 6</span>
 W W h W W W h W W h W W W h W W h W W W h W W h W W 
<span style="background-color:lightyellow">3 4 5 6 7 1 2 3 4 5 6 7 1 2 3 4 5 6 7 1 2 3 4 5 6 7 1
          |    minor    |    minor    |    minor    |</span>
</pre>

So we can pick up a minor scale starting with the sixth note of a major scale, and we can pick up a major scale starting with the third note a minor scale. Such scales are called "relative". For example, A minor is the relative minor of C major, and C major is the relative major of A minor:

<pre>
<span style="background-color:lightyellow">|   C major   |   C major   |   C major   |
C D E F G A B C D E F G A B C D E F G A B C D E F G A</span>
 W W h W W W h W W h W W W h W W h W W W h W W h W W 
<span style="background-color:lightyellow">C D E F G A B C D E F G A B C D E F G A B C D E F G A
          |   A minor   |   A minor   |   A minor   |</span>
</pre>

## Related articles

* Previous: [Equal temperament](05-EqualTemperament.html)
* Next: [Interval names](07-IntervalNames.html)

[^1]: Technically, this shows only the "natural" minor scale. There are also variations of this scale called "harmonic" and "melodic" minor scales.