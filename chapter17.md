# Chapter 17: Responsive Web Design

Concept that allows a website to be viewed comfortably on any size device

Pinching to zoom is not "optimal" for small browsers

RWD consists of:
* A flexible grid
* Flexible images
* CSS media queries

Viewport: 980pt normally, 320pt for phones

in a fluid layout, page area and its grid resize to fill the available space
fixed layouts stay the same size and content may be cut off

Flexible images: max-width attribute allows images to scale appropriately (max-width: 100%; max-height: auto)

Media queries: apply different styles based on the size of the browser
@media *type* and (*feature: value*) {
    whatever styles u like
}

media types: all, print, screen, and speech

media features: width, height, orientation, aspect-ratio, color, color-index, monochrome, resolution, scan, grid

Media queries can go in the stylesheet, media queries need to come after other rules; set up rules for small screens first, then override with larger screens later

Breakpoint: where a style change is introduced

Module-based breakpoints: for individual parts of a page

May be better to use EMs instead of pixels- em is based on font size

The same content should be accessible regardless of what device is used