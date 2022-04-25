# Chapter 7: Adding Images

Images for content should be added through HTML. Images for decoration (background images, headers) should be added through CSS.

Images placed in content must be .png .jpeg or .gif; if it can't be one of those, it should be linked as an external image (using <a>)

## img element

Images stay in the flow of text, aligned with the baseline of the text, do not cause line breaks

src and alt attributes are required within the tag
src: location of image
alt: text that displays if image is not available

Empty (nothing in between opening and closing tag) and inline (reflow when browser window is resized)
Replaced by an external file when the page loads

Alt text should serve as a substitute for the image content, but can be left empty if the image does not contribute to the website's content. Should enhance the website without being obstrusive

"width" and "height" can specify dimensions; image will scale proportionally if only one dimension is set. Should not be used to resize images. (Just to signal to the browser to hold space on the page)

## SVG images

<svg></svg>

Not pixel-based, uses shapes and paths defined mathematically

Store instructions on *what* to draw, so they require less data

Images saved as .svg can be used as any other image
Pro: supported by all browsers
Con: cannot apply css styling to it, cannot manipulate with js

Can also create an SVG in an illustrator program and save as svg, then copy the text into an svg tag
Pro: can manipulate all elements of svg with js, can apply external css 
Con: creates a lot of text, harder to maintain and update, not cached by browser

All modern browsers support svg images within an svg tag

Can also embed an svg as an html object

## Responsive Image Markup

You provide images of multiple sizes, and the browser picks which one to use based on screen resolution

srcset: attribute for img tag that provides a list of img source options
src is still required to specify the default image

w-dsecriptor gives actual width of images
sizes attribute tells the approximate size for the website layout (vw = viewport width)