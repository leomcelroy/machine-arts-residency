# Center for Machine Arts 2023 Residency

In June of 2023 I spent the week at the brand new Center for Machine Arts with six other artists.

Here are some of my projects from the week.

<img width="1048" alt="Screen Shot 2023-07-17 at 2 32 14 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/bd4a1eca-c76d-4477-a96c-6332bf83035d">

I made most of the pieces in a tool I called [Symbolsmith](https://symbolsmith.onrender.com/).
To create Symbolsmith I forked SVG-PCB into a genral purpose vector drawing tool for generative art. 

All of the pieces below were made using code. The source can be found in the [js folder here](./js).

# Ma Yuan Style Pieces

I had recently been in main and was inspired to try to create some pieces based on waves. 
Lingdong suggested I look at the work of Ma Yuan who's [studies on the properties of water](https://www.faena.com/aleph/a-study-on-the-properties-of-water-by-ma-yuan) seemed to present a perfect series of challenges.
Additional inspriation came from pieces like [Hokusai's Great Wave](https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa) and [this random image online](https://www.123rf.com/photo_161691448_seamless-pattern-sea-waves-water-hand-drawing-by-line-isolated-on-white-background-vector.html).

I did two pieces drawing inspiration from the calmer Ma Yuan pieces but found the aesthetic not overwhleming compelling and decided to focus on
practicing some techniques which emerged from the process.

<img width="639" alt="Screen Shot 2023-07-17 at 2 37 23 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/0698cf67-e88f-4e12-9f4d-aa6008a1aab2">

<img width="489" alt="Screen Shot 2023-07-17 at 2 41 18 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/d034e607-380d-40a1-b93c-e6fc4d5be6b1">

# Wave Clipping

I wanted to get some perspective in my pieces and realized clipping occluded lines would be critical. 
Below we see a wave without occlusion.

<img width="1289" alt="Screen Shot 2023-07-17 at 2 41 55 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/dafee587-df31-467c-b16c-7f167e9c2f89">

I tried a few techniques including rendering out pngs and then tracing the outlines and removing occluded lines programmatically while drawing.
Ultimately Haxidraw's [hidden line removal](https://www.fxhash.xyz/article/hidden-line-removal-test) algorithm was the best solution. 
To get SVGs after processing I would copy the toolpath from Inkscape and resave the file.

<img width="313" alt="Screen Shot 2023-07-17 at 2 42 38 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/61613900-b49a-49c4-859c-60a429935442">

<img width="1094" alt="Screen Shot 2023-07-17 at 2 43 11 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/f87da248-66fd-4ca5-8d95-06ad3a2bf8c6">

# Noise Studies

I was inspired by Bre's plotter art collection and particularly this piece.

![PXL_20230613_155300560](https://github.com/leomcelroy/machine-arts-residency/assets/27078897/6b2ce24e-f7bb-4188-aae8-ac27af1f301d)

I began trying to replicate the effect with trig functions and noise.

<img width="1127" alt="Screen Shot 2023-07-17 at 2 44 26 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/09ed8802-87e8-4470-b02a-e5e945d84d83">

I then found [a nice example of working with noise](https://revdancatt.com/2020/01/30/penplotting-perlin-landscapes#part3) that also addressed the occulded line issue I had.

That led to a series of [pure noise drawings](./noise) like the one below.

<img width="1197" alt="Screen Shot 2023-07-17 at 2 45 26 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/2ede0979-83c0-4ff1-80f8-e7ed815c4f1a">

# [HPGL Web Driver](./hpgl-web-driver)

I wanted to control the HP plotters we were using from my laptop so I wrote my own machine controller to send instructions over web serial
from the browser.

![PXL_20230612_222054445](https://github.com/leomcelroy/machine-arts-residency/assets/27078897/3df4d669-a6f9-4152-a163-8b5fad44d1d8)

# Leaf Grids

Michael Gayk brought up [Zancan](https://zancan.art/) who's figurative naturalist work I found quite inspiring. 
I decided to try to draw some leaves myself.

<img width="1071" alt="Screen Shot 2023-07-17 at 2 46 11 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/5bc6c443-545f-49a6-b14c-185663830dc5">

# L-System Wheel

I decided to draw some regular geometric shapes too which I made using [Gram]([gram](https://gramlanguage.com/#/home))
a 2D drawing language I made a few years ago.

<img width="705" alt="Screen Shot 2023-07-17 at 2 47 08 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/8396156a-1d3a-4376-8b1e-281b101e6691">

# Ray Caster

Al Larsen mentioned he would like to be able to cast rays he could orient manually onto shapes he imported so I wrote a little program to do that for him.

<img width="857" alt="Screen Shot 2023-07-17 at 2 47 21 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/188a4958-2786-43b8-a7b0-bcb33b9a237b">

# Grassy Plane

While reading about [line clipping techniques I found an inspiring piece from Gabor Ugray](https://jealousmarkup.xyz/texts/webgl-line-hiding/).
I took a shot a recreating something in that style before making it more my own with the Tidal Flats series.

<img width="1063" alt="Screen Shot 2023-07-17 at 2 48 17 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/b00dea85-2f3f-487d-98c1-c7b13eeac163">

# Tidal Flats

This felt like the most finished pieces of my work from the week. 
I developed my Grassy Plane piece with a Starry Night-esque sky.
To create the sky I learned some techniques from [Reinder Nijhoff](https://turtletoy.net/turtle/3c0b0779d9#iterations=4000,maxLength=20,vectorGrid=500,visibleGrid=400,stopMargin=1,lineThickness=5,gridMode=3,mode_perlinZoom=1.3,mode_spiralFactor=0.5,mode_randomBias=0.4,mode_randomOffset=-0.2,mode_jurgenPoints=8,mode_jurgenNegatives=0,mode_jurgenAmplitude=20).

<img width="1107" alt="Screen Shot 2023-07-17 at 2 48 51 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/b5bcc88b-0044-4026-918e-e58638d323ac">

I made further improvment by varying grass length.

<img width="1105" alt="Screen Shot 2023-07-17 at 2 49 24 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/a52b8cda-6e8e-43e0-9dc1-35fb6664bccd">

<img width="1097" alt="Screen Shot 2023-07-17 at 2 49 44 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/ca1325aa-3edf-4127-82e7-449019feeb16">

<img width="1099" alt="Screen Shot 2023-07-17 at 2 50 04 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/5c709206-21b8-4daf-966f-e4c270458325">

<img width="1102" alt="Screen Shot 2023-07-17 at 2 50 20 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/3050b0e1-6209-42c9-8b6a-48267c415025">

Here is the first one plotted.

![PXL_20230616_201750729](https://github.com/leomcelroy/machine-arts-residency/assets/27078897/603d44ef-990f-43f6-bbaa-c4c5ef1ae7d2)

# The Show

The week culminated in an art show, which was delightfully well attended.

![PXL_20230617_231852367](https://github.com/leomcelroy/machine-arts-residency/assets/27078897/980a7627-120a-4aaf-9b79-8a1fa20cc8fc)

Here are the pieces I displayed.

![PXL_20230617_231427615](https://github.com/leomcelroy/machine-arts-residency/assets/27078897/2284a55a-7ca5-46ba-9711-4f3db45faaee)

Along with a few leaf grids on the table with Jen's machined leaf prints.

![PXL_20230617_231320543](https://github.com/leomcelroy/machine-arts-residency/assets/27078897/2df6f2b3-29af-434d-8d27-1d240e615aa1)

Much thanks to Bre, all the other artists, and the team at Bantam Tools for making the week possible!
