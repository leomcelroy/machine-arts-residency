# Center for Machine Arts 2023 Residency

In June of 2023 I spent the week at the brand new Center for Machine Arts with six other artists.

Here are some of my projects from the week.

<img width="1090" alt="Screen Shot 2023-07-17 at 1 17 36 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/4fbee24f-a219-4dcf-aa03-84832b6005da">

I made most of the pieces in a tool I called [Symbolsmith](https://symbolsmith.onrender.com/).
To create Symbolsmith I forked SVG-PCB into a genral purpose vector drawing tool for generative art. 

All of the pieces below were made using code. The source can be found in the [js folder here](./js).

# Ma Yuan Style Pieces

I had recently been in main and was inspired to try to create some pieces based on waves. 
Lingdong suggested I look at the work of Ma Yuan who's [studies on the properties of water](https://www.faena.com/aleph/a-study-on-the-properties-of-water-by-ma-yuan) seemed to present a perfect series of challenges.
Additional inspriation came from pieces like [Hokusai's Great Wave](https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa) and this random image online.

<img width="474" alt="Screen Shot 2023-06-12 at 7 08 26 PM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/3de5cc01-4a1f-4ed8-bdf1-e7fd455cb3e1">

I did two pieces drawing inspiration from the calmer Ma Yuan pieces but found the aesthetic not overwhleming compelling and decided to focus on
practicing some techniques which emerged from the process.

<img width="497" alt="Screen Shot 2023-07-17 at 1 51 02 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/d5256fea-c343-4563-94be-cbf71408345f">

<img width="647" alt="Screen Shot 2023-07-17 at 1 52 00 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/bade5215-f523-4fae-bfa4-08602d2ba894">

# Wave Clipping

I wanted to get some perspective in my pieces and realized clipping occluded lines would be critical. 
Below we see a wave without occlusion.

<img width="1225" alt="Screen Shot 2023-07-17 at 1 53 54 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/e6b47dbc-11e3-4893-a8ba-4841e2df0128">

I tried a few techniques including rendering out pngs and then tracing the outlines. 
Removing occluded lines programmatically while drawing.
Ultimately Haxidraw's [hidden line removal](https://www.fxhash.xyz/article/hidden-line-removal-test) algorithm was the best solution. 
To get SVGs after processing I would copy the toolpath from Inkscape and resave the file.

<img width="1126" alt="Screen Shot 2023-07-17 at 1 35 03 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/2b4876ee-18fa-47e9-ba8f-abb866555969">

<img width="241" alt="Screen Shot 2023-07-17 at 1 52 34 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/20bdeb94-a044-421c-8b70-fde54c19a248">

# Noise Studies

I was inspired by Bre's plotter art collection and particularly this piece.

![PXL_20230613_155300560](https://github.com/leomcelroy/machine-arts-residency/assets/27078897/71113722-ce54-4a3b-8d03-341379fdb8d6)

I began trying to replicate it 

<img width="1015" alt="Screen Shot 2023-07-17 at 1 32 49 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/5da62d32-5429-465a-b59b-d95e0bd77971">

I then found [a nice example of working with noise](https://revdancatt.com/2020/01/30/penplotting-perlin-landscapes#part3) that also addressed the occulded line issue I had.

That led to a series of [pure noise drawings](./noise) like the one below.

<img width="1200" alt="Screen Shot 2023-07-17 at 1 56 32 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/1f381106-2740-4fdb-b7b6-f8cf86d5d36d">

# [HPGL Web Driver](./hpgl-web-driver)

I wanted to control the HP plotters we were using from my laptop so I wrote my own machine controller to send instructions over web serial
from the browser.

![PXL_20230612_222054445](https://github.com/leomcelroy/machine-arts-residency/assets/27078897/87f33bab-2da4-4b31-a9fb-211fa5969c26)

# Leaf Grids

Michael Gayk brought up [Zancan](https://zancan.art/) who's figurative naturalist work I found quite inspiring. 
I decided to try to draw some leaves myself.

<img width="1080" alt="Screen Shot 2023-07-17 at 1 58 39 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/184d7b12-cf3b-4c95-b19a-ce3ea44ab0cc">

# L-System Wheel

I decided to draw some regular geometric shapes too which I made using [Gram]([gram](https://gramlanguage.com/#/home))
a 2D drawing language I made a few years ago.

<img width="672" alt="Screen Shot 2023-07-17 at 1 59 15 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/8321a312-33d5-4ddc-9688-3f6f9af4b1e0">

# Ray Caster

Al Larsen mentioned he would like to be able to cast rays he could orient manually onto shapes he imported so I wrote a little program to do that for him.

<img width="888" alt="Screen Shot 2023-07-17 at 2 12 14 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/77e6c350-175b-4c3e-b9b0-3c1a5cd055b6">

# Grassy Plane

While reading about [line clipping techniques I found an inspiring piece from Gabor Ugray](https://jealousmarkup.xyz/texts/webgl-line-hiding/).
I took a shot a recreating something in that style before making it more my own with the Tidal Flats series.

<img width="972" alt="Screen Shot 2023-07-17 at 2 01 46 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/a9e859e8-922a-4fe9-8a71-f3afd8c445c7">

# Tidal Flats

This felt like the most finished pieces of my work from the week. 
I developed my Grassy Plane piece with a Starry Night-esque sky.
To create the sky I learned some techniques from [Reinder Nijhoff](https://turtletoy.net/turtle/3c0b0779d9#iterations=4000,maxLength=20,vectorGrid=500,visibleGrid=400,stopMargin=1,lineThickness=5,gridMode=3,mode_perlinZoom=1.3,mode_spiralFactor=0.5,mode_randomBias=0.4,mode_randomOffset=-0.2,mode_jurgenPoints=8,mode_jurgenNegatives=0,mode_jurgenAmplitude=20).

<img width="1006" alt="Screen Shot 2023-07-17 at 2 09 20 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/69356f22-80d1-4b6b-ac8c-f997476c955f">

I made further improvment by varying grass length.

<img width="986" alt="Screen Shot 2023-07-17 at 2 10 15 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/ad9e90fc-685d-4518-a140-0268c7110265">

<img width="987" alt="Screen Shot 2023-07-17 at 2 10 29 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/50ead64f-b906-456d-8cb7-36c494bccabe">

<img width="979" alt="Screen Shot 2023-07-17 at 2 10 44 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/47ce5422-9850-4cb2-9088-f075c340dac0">

<img width="976" alt="Screen Shot 2023-07-17 at 2 10 55 AM" src="https://github.com/leomcelroy/machine-arts-residency/assets/27078897/a36623be-20b6-4d9e-9fb8-4542efdf9f0e">

Here is the first one plotted.

![PXL_20230616_201750729](https://github.com/leomcelroy/machine-arts-residency/assets/27078897/853d551f-c74c-413d-8862-6a117b59100e)


# The Show

The week culminated in an art show, which was delightfully well attended.

![PXL_20230617_231852367](https://github.com/leomcelroy/machine-arts-residency/assets/27078897/7dec60f7-de06-497e-a8ff-2032e29189ea)

Here are the pieces I displayed.

![PXL_20230617_231427615](https://github.com/leomcelroy/machine-arts-residency/assets/27078897/4d6561d8-7c40-44b5-90ab-07d7a2466ab6)

Along with a few leaf grids on the table with Jen's machined leaf prints.

![PXL_20230617_231320543](https://github.com/leomcelroy/machine-arts-residency/assets/27078897/6ed9da8b-7bb7-45f4-9441-50eb241ae146)

