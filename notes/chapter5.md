# Marking Up Text

### Paragraphs
<p></p>
Paragraphs are displayed as blocks, each one starts a new line

### Headings
<h1></h1>
h1 should be close to the top of the page, working downwards through the other numbers. Using headings to mark "levels" of text helps screen readers create an outline of the page

h1 by default displays the largest

### Thematic Breaks
<hr>
Horizontal line between paragraphs

## Lists

#### Unordered Lists
<ul>
<li></li>
</ul>
Displays with bullets by default

#### Ordered Lists
<ol>
<li></li>
</ol>
List for items in a particular order. Numbered by default.

#### Description Lists
<dl>
<dt>Name, term, or label</dt> 
<dd>Value, description or definiton</dd>
</dl>
For name/value pairs; one dt can have multiple dds

Each type is a block element.
Lists can be nested within each other.

### More Content Elements
blockquote: long quotations
pre: preformatted text
figure, figcaption: figures and captions

## Page Content

### Main Content
<main></main>
Use to identify the primary content of the page or application
Content should be unique to that page (no information from headers, sidebars, etc)

### Header
<header></header>
Introductory material at the top of a web page

### Footer
<footer></footer>
Information that typically comes at the end of a page or article (author, copyright, navigation)

### Section, Article
<section></section>
Divide long documents into thematic sections

<article></article>
Self-contained works that can stand alone or be reused

### Aside
<aside></aside>
Information that is seperate from, but related to, main content

### Navigation
<nav></nav>
Navigation for a site

### Address
<address></address>
Contact information for maintainer of website, not necessarily mailing address

## Inline Elements

Display within the flow of text

<em> italics, emphasized
<strong> bold, important
<q> short quotations, browsers should add quotation marks
<abbr title=""> abbreviations
<mark> highlighted text
<time> date and time
<data> Data
<wbr> word break

More on p 89

## Generic Elements

### Div
Division of content
Logical grouping of content

### Span 
Word or phrase with no text-level element?
Similar to div, but inline
May only contain text and other inline elements

## ARIA

## Character Escapes
Used for characters that the browser may interpret as code and not display
< > " ' &
Use abbreviated name, or numeric value