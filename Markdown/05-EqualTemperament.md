---
title: Music theory - Equal temperament
---
<script src="Sound.js"></script>

# Music theory: Equal temperament

*July 2021*

<script>var d = 587.3295;</script>

We've seen previously how to generate scales using stacked perfect fifths that have been normalized into a single octave. The process can be used to generate both a diatonic scale (seven notes) and a chromatic scale (twelve notes). Unfortunately, there are two problems with scales based on the ideal 3:2 frequency ratio for fifths (aka "just intonation"):

* The half-steps between notes in a chromatic scale aren't the same size.
* 12 fifths &ne; 7 octaves.

We can fix this by dividing the octave into twelve equal half-steps, such that the ratio between adjancent notes is always 2<sup>1&frasl;12</sup> (&approx; 1.06). This is called "equal temperament" because we have tempered (i.e. slightly adjusted) the notes in the scale. Since a perfect fifth is an interval of seven half-steps, its frequency ratio is now 2<sup>7&frasl;12</sup>:1 (&approx; 1.498) instead of 3:2. This new interval <button onclick="playRatios([1, 2 ** (7/12)], 440)">&#9654;</button> is not quite as pleasing as the original one <button onclick="playRatios([1, 3/2], 440)">&#9654;</button>, but the [compromise](https://youtu.be/6NlI4No3s0M?t=28) is worth the resulting benefits.

At this point, we also need to assign absolute frequencies to our notes, rather than always thinking relatively. So, in equal temperament, we arbitrarily say that 440 hertz is an A and calculate all the other note frequencies from there:

| Name     | Pythagorean ratio            | ET ratio                              | ET frequency (hz) |
| -------- | ---------------------------- | ------------------------------------- | ----------------: |
| D        | 1 = 1.00                     | 2<sup>0&frasl;12</sup> = 1.00         | 587.33		      |
| E&flat;  | 256&frasl;243 &approx; 1.05  | 2<sup>1&frasl;12</sup> &approx; 1.06  | 622.25		      |
| E        | 9&frasl;8 &approx; 1.13      | 2<sup>2&frasl;12</sup> &approx; 1.12  | 659.26		      |
| F        | 32&frasl;27 &approx; 1.19    | 2<sup>3&frasl;12</sup> &approx; 1.19  | 698.46		      |
| F&sharp; | 81&frasl;64 &approx; 1.27    | 2<sup>4&frasl;12</sup> &approx; 1.26  | 739.99		      |
| G        | 4&frasl;3 &approx; 1.33      | 2<sup>5&frasl;12</sup> &approx; 1.33  | 783.99		      |
| A&flat;  | 1024&frasl;729 &approx; 1.40 | 2<sup>6&frasl;12</sup> &approx; 1.41  | 830.61		      |
| A        | 3&frasl;2 &approx; 1.50      | 2<sup>7&frasl;12</sup> &approx; 1.50  | 880.00    	      |
| B&flat;  | 128&frasl;81 &approx; 1.58   | 2<sup>8&frasl;12</sup> &approx; 1.59  | 932.33		      |
| B        | 27&frasl;16 &approx; 1.69    | 2<sup>9&frasl;12</sup> &approx; 1.68  | 987.76		      |
| C        | 16&frasl;9 &approx; 1.78     | 2<sup>10&frasl;12</sup> &approx; 1.78 | 1046.50		      |
| C&sharp; | 243&frasl;128 &approx; 1.90  | 2<sup>11&frasl;12</sup> &approx; 1.89 | 1108.73		      |
| D        | 2&frasl;1 = 2.00             | 2<sup>12&frasl;12</sup> = 2.00        | 1174.66		      |
|          | <button onclick="playRatios([1, 256/243, 9/8, 32/27, 81/64, 4/3, 1024/729, 3/2, 128/81, 27/16, 16/9, 243/128, 2], d)">Play &#9654;</button> | <button onclick="playRatios([2**(0/12), 2**(1/12), 2**(2/12), 2**(3/12), 2**(4/12), 2**(5/12), 2**(6/12), 2**(7/12), 2**(8/12), 2**(9/12), 2**(10/12), 2**(11/12), 2**(12/12)], d)">Play &#9654;</button>

From here on out, we'll be using equal temperament unless otherwise specified.

## Related articles

* Previous: [Circle of fifths](04-CircleOfFifths.html)
* Next: [Major and minor scales](06-MajorMinorScales.html)
