# JavaScript!

Client-side scripting language
Loosely typed (variables are automatically categorized into types), dynamic (doesn't need to be compiled to run)

Adds interactivity to pages

Variable data types
Undefined (variable name is used, but it not given a value)
var foo;

Null (define a variable, but give it no value)
var foo = null;

Boolean
Null, undefined, and " " are inherently false (or falsy), everything else is inherently true (truthy)

== equal to
=== identical to

if/else
loops
functions

variables defined within a function will only be accessible to that function
to make a variable within a function accessible outside the function, omit the variable keyword

Event Handlers
Can be applied...

* As an HTML attribute
* As a method attached to the element
* using addEventListener()

As an HTML element: not ideal, harder to maintain
As a method: still not great. window.onlick = myFunction
addEventListener is the best

window.addEventListener(event, function)