---
title: Music theory - Interval names
---
<script src="Sound.js"></script>

# Music theory: Interval names

*July 2021*

We are finally in a position to explain the names of intervals that we've been using. (This gets complicated quickly, so the explanation will be somewhat simplified.)

## Number

An interval's numerical value comes from the number of diatonic notes spanned by the interval. For example, the interval from C to G is a "fifth" because the diatonic sequence from C to G always contains five notes:

* A&flat; major: C-D&flat;-E&flat;-F-G
* C major: C-D-E-F-G

And so on for other diatonic scales containing C and G.

We can stack intervals but have to be careful about the way addition works. For example, C-E is a third, and E-G is a third, but C-G is a fifth (rather than a sixth).

## Major, minor, and perfect intervals

The most consonant intervals within an octave are said to be "perfect" intervals: unison, fourth, fifth, and octave. Consider the difference between a major and minor scale that both begin on the same note (i.e. "parallel" scales). For example, C major/minor:

| # | C major | C minor |
| - | :-----: | :-----: |
| 1 | C       | C       |
| 2 | D       | D       |
| 3 | E       | E&flat; |
| 4 | F       | F       |
| 5 | G       | G       |
| 6 | A       | A&flat; |
| 7 | B       | B&flat; |

Relative to the tonic, the fourth (C-F) and fifth (C-G) intervals are the same in both scales (as are the unison and octave, of course). The other intervals have major and minor versions.

| Half steps | Interval         | Example      | Play |
| ---------- | --------         | -------      | ---- |
| 0          | Perfect unison   | C - C        | <button onclick="playHalfSteps([0, 0], note.C)">&#9654;</button> |
| 1          | Minor second[^1] | C - C&sharp; | <button onclick="playHalfSteps([0, 1], note.C)">&#9654;</button> |
| 2          | Major second     | C - D        | <button onclick="playHalfSteps([0, 2], note.C)">&#9654;</button> |
| 3          | Minor third      | C - E&flat;  | <button onclick="playHalfSteps([0, 3], note.C)">&#9654;</button> |
| 4          | Major third      | C - E        | <button onclick="playHalfSteps([0, 4], note.C)">&#9654;</button> |
| 5          | Perfect fourth   | C - F        | <button onclick="playHalfSteps([0, 5], note.C)">&#9654;</button> |
| 6          | Augmented fourth<br />Diminished fifth | C - F&sharp;<br />C - G&flat; | <button onclick="playHalfSteps([0, 6], note.C)">&#9654;</button> |
| 7          | Perfect fifth    | C - G        | <button onclick="playHalfSteps([0, 7], note.C)">&#9654;</button> |
| 8          | Minor sixth      | C - A&flat;  | <button onclick="playHalfSteps([0, 8], note.C)">&#9654;</button> |
| 9          | Major sixth      | C - A        | <button onclick="playHalfSteps([0, 9], note.C)">&#9654;</button> |
| 10         | Minor seventh    | C - B&flat;  | <button onclick="playHalfSteps([0, 10], note.C)">&#9654;</button> |
| 11         | Major seventh    | C - B        | <button onclick="playHalfSteps([0, 11], note.C)">&#9654;</button> |
| 12         | Perfect octave   | C - C        | <button onclick="playHalfSteps([0, 12], note.C)">&#9654;</button> |

The minor version of an interval is always a half step smaller than the major version.

Intervals within an octave are called "simple", and intervals beyond an octave are called "compound". For example, a ninth is an octave plus a second, and a (perfect) eleventh is an octave plus a fourth.

## Augmented and diminished intervals

Any interval can be augmented by a half step, or diminished by a half step. An augmented perfect or major interval is called an augmented interval (e.g. an augmented fourth is a half step larger than a perfect fourth). A diminished perfect or minor interval is called a diminished interval (e.g. a diminished third is a half step smaller than a minor third).

![Augmented and diminished intervals](https://musictheory.pugetsound.edu/mt21c/images/unit1/interval-quality-continuum.svg)

## Inversion

A simple interval can be inverted by raising the lower note an octave, so it becomes the higher note. For example, a minor sixth <button onclick="playHalfSteps([0, 8], note.C)">&#9654;</button> inverts to a major third <button onclick="playHalfSteps([8, 12], note.C)">&#9654;</button>.

The following patterns apply to all such inversions:

* The number of half steps in an interval and its inversion sum to twelve.
  * E.g. A major third and a minor sixth: 8 + 4 = 12.
* The numeric values of an interval and its inversion sum to nine.
  * E.g. A major third and a minor sixth: 3 + 6 = 9.
* A major interval always inverts to a minor interval, and vice versa.
* A perfect interval always inverts to another perfect interval.
  * E.g. The inversion of a perfect fifth <button onclick="playHalfSteps([0, 7], note.C)">&#9654;</button> is a perfect fourth <button onclick="playHalfSteps([7, 12], note.C)">&#9654;</button>, and vice versa.
* An augmented interval always inverts to a diminished interval, and vice versa.

## Related articles

* Previous: [Major and minor scales](06-MajorMinorScales.html)

[^1]: The second is a dissonant interval with major and minor versions, even though the second notes of parallel scales are always the same (because both scales start with a whole step).