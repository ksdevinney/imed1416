# Chapter 12: Formatting Text

font-family: list of fonts, in order, for the browser to try and load on the page.
Generic fonts (list font on the list):
    * serif: has decorative strokes or flares
    * sans-serif: has straight strokes
    * monospace: equal widths between each letter
    * cursive: cursive
    * fantasy: funky fresh! (for headlines and display)

font-size: use a css keyword, percentage, or length unit ('medium' is default). sizes in em and rem are preferred.
rem: the best
em is based on inherited size, so ems might be different sizes at different places in the document. nested elements compound, potentially making text very small
keywords: good for when exact measurements are not needed, scaled in relation to each other

font-weight: boldness. Can use keywords, or weights 100-900 (600 and above is generally bold)

font-style: italics (normal, italic, or oblique)

font-variant: small-caps

font-stretch: make it long

font: shortcut property for all above properties, must include at least size and family. In order: style weight stretch variant height family

Font variant fanciness??

color: use color value as a name or numeric. Color is inherited, so you can change an entire document's color through the body element

Descendant selectors: targets elements that are contained within another element, li em targets em elements only inside lists

ID selectors: for elements with a specific ID

Class selectors: targets all elements with a specified class, can be used with or without a specific element name

child selector: targets only the direct descendants of an element, p > em would catch em elements inside a p, only if they are not inside another element (such as a)

next sibling selector: comes directly after an element with the same parent. h1 + p targets p right after h1

Subsequent sibling: targets an element that shares a parent and occurs after it in the source order. h1 ~ h2 selects any h2 that shares a parent with h1, and comes after it in the document

line-height: defines the minimum distance from baseline to baseline in text

indent: indents the first line of text

text-align: aligns text

text-decoration: underline, overline, line-through, blink. blinking is not allowed 

text-transform: changes capitalization of text. Capitalize: first letter of each word

letter-spacing, word-sapcing: use a length measurement to add spacing between letters or words

text-shadow: horizontal-offset vertical-offset blur-radius (optional) color

list-style-type: different styles for bulleted lists

list-style-position: where the marker sits for a bulleted list

list-style-image: for making your own bullets

list-style to consolidate all of these