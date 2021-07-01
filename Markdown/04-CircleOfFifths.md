---
title: Music theory - Circle of fifths
---
<script src="Sound.js"></script>

# Music theory: Circle of fifths

*July 2021*

<script>var d = 587.3295;</script>

We've seen that we can use a series of perfect fifths to generate a diatonic scale. We can continue the process to generate more than just seven notes, but how many do we need?

Since each pair of adjancent notes is in the ratio 3:2, after six steps in each direction we have an interval of (3&frasl;2)<sup>12</sup>, which is almost, but not quite, equal to seven octaves:

* Twelve perfect fifths = (3&frasl;2)<sup>12</sup> &approx; 129.74
* Seven octaves = 2<sup>7</sup> = 128

The notes we have at this point are:

| Name     | \# of fifths | Unnormalized ratio | Normalized ratio |
| -------- | -----------: | ------------------ | ---------------- |
| A&flat;  | -6 | (3&frasl;2)<sup>-6</sup> = 64&frasl;729 | 1024&frasl;729 |
| E&flat;  | -5 | (3&frasl;2)<sup>-5</sup> = 32&frasl;243 | 256&frasl;243  |
| B&flat;  | -4 | (3&frasl;2)<sup>-4</sup> = 16&frasl;81  | 128&frasl;81   |
| F        | -3 | (3&frasl;2)<sup>-3</sup> = 8&frasl;27   | 32&frasl;27    |
| C        | -2 | (3&frasl;2)<sup>-2</sup> = 4&frasl;9    | 16&frasl;9     |
| G        | -1 | (3&frasl;2)<sup>-1</sup> = 2&frasl;3    | 4&frasl;3      |
| D        |  0 | (3&frasl;2)<sup>0</sup> = 1             | 1              |
| A        |  1 | (3&frasl;2)<sup>1</sup> = 3&frasl;2     | 3&frasl;2      |
| E        |  2 | (3&frasl;2)<sup>2</sup> = 9&frasl;4     | 9&frasl;8      |
| B        |  3 | (3&frasl;2)<sup>3</sup> = 27&frasl;8    | 27&frasl;16    |
| F&sharp; |  4 | (3&frasl;2)<sup>4</sup> = 81&frasl;16   | 81&frasl;64    |
| C&sharp; |  5 | (3&frasl;2)<sup>5</sup> = 243&frasl;32  | 243&frasl;128  |
| G&sharp; |  6 | (3&frasl;2)<sup>6</sup> = 729&frasl;64  | 729&frasl;512  |
|          |    | <button onclick="playRatios([64/729, 32/243, 16/81, 8/27, 4/9, 2/3, 1, 3/2, 9/4, 27/8, 81/16, 243/32, 729/64], d)">Play &#9654;</button> | <button onclick="playRatios([1024/729, 256/243, 128/81, 32/27, 16/9, 4/3, 1, 3/2, 9/8, 27/16, 81/64, 243/128, 729/512], d)">Play  &#9654;</button> |

In this Pythagorean tuning, A&flat; and G&sharp; are slightly different notes, making them very dissonant when played together <button onclick="playRatios([1024/729, 729/512], d)">&#9654;</button>. Ideally, we would like them to align, creating an exact "circle of fifths" &ndash; will look at how to do that soon. For now, we are left with twelve usable notes in a "chromatic" scale:

| Name     | Ratio to tonic        | Ratio to previous note |
| -------- | --------------------- | ---------------------: |
| D        | 1 = 1.00              | &ndash;                |
| E&flat;  | 256&frasl;243 = 1.05  | 1.05 / 1.00 = 1.05     |
| E        | 9&frasl;8 = 1.13      | 1.13 / 1.05 = 1.08     |
| F        | 32&frasl;27 = 1.19    | 1.19 / 1.13 = 1.05     |
| F&sharp; | 81&frasl;64 = 1.27    | 1.27 / 1.19 = 1.07     |
| G        | 4&frasl;3 = 1.33      | 1.33 / 1.27 = 1.04     |
| A&flat;  | 1024&frasl;729 = 1.40 | 1.40 / 1.33 = 1.05     |
| A        | 3&frasl;2 = 1.50      | 1.50 / 1.40 = 1.07     |
| B&flat;  | 128&frasl;81 = 1.58   | 1.58 / 1.50 = 1.05     |
| B        | 27&frasl;16 = 1.69    | 1.69 / 1.58 = 1.07     |
| C        | 16&frasl;9 = 1.78     | 1.78 / 1.69 = 1.05     |
| C&sharp; | 243&frasl;128 = 1.90  | 1.90 / 1.78 = 1.07     |
| D        | 2&frasl;1 = 2.00      | 2.00 / 1.90 = 1.05     |
|          | <button onclick="playRatios([1, 256/243, 9/8, 32/27, 81/64, 4/3, 1024/729, 3/2, 128/81, 27/16, 16/9, 243/128, 2], d)">Play &#9654;</button> |

The flats and sharps fill the gaps in our diatonic scale, so the interval formed by each adjancent pair of notes is now (approximately) a half-step.

## Related articles

* Previous: [Pythagorean scales](03-PythagoreanScales.html)
* Next: [Equal temperament](05-EqualTemperament.html)
* 