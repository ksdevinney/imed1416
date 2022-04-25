# Chapter 13: Colors and Backgrounds

Color names: 140 colors can be identified by names in css

RGB: identify by using rgb(r, g, b)
Values should be between 0-255

Hex: use # and then 6-digit identifier
If the 6-digit identifier has 3 pairs of the same digit, you can shorten it to 3 digits (each unique number)
#33CC00 = #3C0

RGBa: rgb color, as above, but with alpha, a 4th value for transparency (between 0 and 1)
ex: rgb(0, 0, 0, .5)

HSL values: hue, saturation, light
Presented as hue value and 2 percentages (can also include an alpha value at the end)

## Color Elements

color: applies to foreground elements (text and border)

background-color: for canvas behind element, does not extend into margin. Background colors are not inherited, but all elements are transparent by default 

background-clip: border-box, padding-box, or content-box. To stop background from completely filling an element

opacity: value between 0 and 1, to make an element transparent

## Pseudo Classes!

Most commonly used on links, to show whether or not they've been clicked

a:link for unvisited
a:visited

:focus for when an element is selected
:hover
:active link or button is in the process of being clicked

## Pseudo Elements

::first-line: for the first line of the specified element

::first-letter: first letter of an element

::before and ::after can place content right before or after an element

## Background Images

background-image: to set an image as a background, url should be relative to location of css rule (for external style sheets, it will be relative to the html document). Image will tile on the page.

It is recommended to use background-color similar to the main color of the background-image, so that the appearance will stay similar even if background image doesn't load

background-repeat: changes tiling of background image

background-position: positions background element on page. Keyword values can be paired (left bottom)

background-origin: similar to background-clip

background-attachment: lets you keep the image in a fixed position

background-size: yeah

Can abbreviate all of these into "background"

CSS also allows multiple backgrounds- the one listed last goes on the bottom, everything else goes on top

## Gradients

Linear gradient: provides the angle of the gradient line and one or more "stops" along the way

Radial gradients: start from one point and radiate out in a circle. Requires at least two colors. Fills available background area. Shape, size, and position keywords.

Both types of gradients can also repeat (or stripe)