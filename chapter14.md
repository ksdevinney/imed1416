# Chapter 14: The Element Box

The box model: every element creates a box for properties such as width, height, padding, margins

* Content area
* Inner edges: edges of the content area
* Padding: between the content area and border. Optional
* Border: surrounds the element and its padding. Optional
* Margin: space outside the border, transparent
* Outer edge: outside of the margin box

Width and height calculated automatically by browser

box-sizing? sets the size of the visible box to either content-box or border-box

Visible element box: content + border + padding

Entire element box: visible element box + margin

overflow: to handle contents too big to fit in an element

padding: space between content area and border
Can enter all values individually, or use top right bottom left shorthand

Borders: can be applied to individual sides, or all.
10 different border styles

border-style: can apply different styles in one attribute, in order: top right bottom left

border-width: yeah

outlines: lay on top of everything, drawn on outside edge of border, overlap margin

border: border-style border-width border-color
takes one set of values and applies them to each side

border-radius: curves corners, can use different values for each side, or use two values (one for each pair)

Margins: space outside the border
setting margins to "auto" on left and right effectively centers content on the page

Margin "collapse" is when margins between two elements overlap; the largest value is used

Margins on inline elements sometimes act weird?

Negative margins: content, border, and padding are moved in the opposite direction than they would be with a positive margin value

Display types: can change the layout of some elements, like changing ul/ol to be horizontal

box-shadow: what it says on the label, different types of shadows. can be altered for color and size

Shadows slow performance, so use sparingly