---
title: Music theory - Major and minor scales
---
<script src="Sound.js"></script>

# Music theory: Major and minor scales

*July 2021*

<script>var d = 587.3295;</script>

In a diatonic scale, we have seven notes per octave, in which the half steps (`h`) are separated from each other by alternating groups of two and three whole steps (`W`): `W W W h W W h W W W h W W h` ... . Where we start in this pattern determines whether the scale is "major" or "minor":

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

## Sharps vs. flats

Consider the D major scale. We could write it using either sharps or flats (or even a combination of both):

| 1 | 2 | 3        | 4 | 5 | 6 | 7        | 8 |
| - | - | -------- | - | - | - | -------- | - |
| D | E | F&sharp; | G | A | B | C&sharp; | D |
| D | E | G&flat;  | G | A | B | D&flat;  | D |

The first is preferred over the second because each of the note names appears once. The second is harder to read because it contains both G&flat; and G, and D&flat; and D.

## Relative scales

Major and minor scales overlap:

<pre>
|    major    |    major    |    major    |
1 2 3 4 5 6 7 1 2 3 4 5 6 7 1 2 3 4 5 6 7 1 2 3 4 5 6
 W W h W W W h W W h W W W h W W h W W W h W W h W W
3 4 5 6 7 1 2 3 4 5 6 7 1 2 3 4 5 6 7 1 2 3 4 5 6 7 1
          |    minor    |    minor    |    minor    |
</pre>

So we can pick up a minor scale starting with the sixth note of a major scale, and we can pick up a major scale starting with the third note a minor scale. Such scales are called "relative". For example, A minor is the relative minor of C major, and C major is the relative major of A minor:

<pre>
|   C major   |   C major   |   C major   |
C D E F G A B C D E F G A B C D E F G A B C D E F G A
 W W h W W W h W W h W W W h W W h W W W h W W h W W
C D E F G A B C D E F G A B C D E F G A B C D E F G A
          |   A minor   |   A minor   |   A minor   |
</pre>


## Related articles

* Previous: [Equal temperament](05-EqualTemperament.html)
