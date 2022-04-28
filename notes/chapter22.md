# Chapter 22: Using JavaScript

DOM: Document Object Model

Accessing nodes in the DOM:

getElementsByTagName("tag")
returns any element of the specified tag

getElementById("id")
returns a single element, of the specified ID

getElementByClassName("class")
Returns all elements of the specified class

querySelectorAll()
Returns elements based on CSS-style selector

getAttribute()
returns the value of a specified attribute

Maniputating nodes
setAttribute(attribute, value)
Changes the value of the attribute

someElementVar.innerHTML = "marked-up string"

.style
Allows you to add a CSS property to an element

Adding and Removing Elements
createElement("element")
Creates an element, but doesn't add it to the document

createTextNode("text")
Creates an element with text

.appendChild(newElement)
Allows you to append an element to an existing one, text to element

insertBefore()
Inserts an element before another element

replaceChild()
Replaces one element with another

removeChild()
Removes a node from the tree

## Polyfills

Making new technology work in browsers that don't natively support it

HTML5 shim
Search the DOM for elements IE doesn't recognize, then replace them with the same element so they are visible
Must be referenced in the *head*

Selectivizr
Allows IE to recognize complex CSS3 selectors
Referenced like any other js script

PictureFill
Support for responsive images

## JavaScript Libraries

jQuery