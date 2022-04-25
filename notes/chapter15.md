# Chapter 15: Floating and Positioning

Elements normally flow top-to-bottom in the order they appear

float: moves an element as far to the right or left as possible, so other content can wrap around it

floats stay in the content area of the containing content
margins are maintained

always provide a width for floating text elements
floated inline elements behave like block elements (margins rendered on all 4 sides)
margins on floated elements do not collapse
elements do not float higher than their container
non-floated elements maintain the normal flow

clear: prevents an element from appearing next to a floated element- applied to the element you want below the floated element

When all elements in a container are floated, the elements may extend beyond the container (nothing left to give the containing element appropriate height)

can use container:after pseudo element with
content: " "
display: block
clear: both

OR

float the containing element as well and give it a width of 100%

shape-outside: for wrapping text in facy shapes- can use an image url to wrap around a transparent image, can also use shape attribute with a size modifier circle(150px)

shape-margin: include a buffer between image and text

## Positioning

position: 
* static: item placed normally in document flow
* relative: moves the element box relative to the original position
* absolute: element box is completely removed from the flow, placed with respect to the viewport or other containing element
* fixed: element stays in one position, even when scrolling
* sticky: combination of relative and fixed; relatively positioned until scrolled into a specific position

offset: specifies the actual position of the element (top, right, bottom, left), moves it *away* from the specified direction

z-index: can be positive or negative. the higher the number, the higher the element is in the stack