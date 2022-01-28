# Chapter 4: Creating a Simple Page

1. Start with the content (raw text content)
2. Give the document structure
3. Identify text elements
4. Add an image
5. Change how it looks with CSS

## Start with Content

Use plain text for content, all text needed for the page. 
Browsers will only display the first space in a series, so multiple spaces will be compressed.
Line breaks also count as white space, so they are ignored and converted to a single space. Same with tabs.
Unrecognized tags will either display as plain text, or nothing, depending on the browser.
Comments <!-- --> are not displayed.

## Structure

Markup: tags around content

Title is technically only required content

Basic document structure on page 56. I'm not typing all of it here.

DOCTYPE: lets browsers know which HTML specification to use
html element: root element, contains everything else
head: for elements that are not part of the content
meta: provides metadata, such as character encoding(UTF-8)
body: everything for the browser window

## Text Elements

HTML tags should add meaning and structure to a document, not describe how the content should look
(most important heading should be an h1)

Headings and paragraphs are *block elements*: each "block" is a rectangular box in a stack; each block element starts on a new line

## Add Image

Image tags are empty elements: used to provide a simple directive (get an image from a server and insert)

src= URL of the image file
alt= description of image

## Style Sheet

We'll worry about that in part 3!

## Validation

Use a validator to check and correct errors