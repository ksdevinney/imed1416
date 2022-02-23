# Chatper 11: CSS!

1. Mark up the document- choose HTML elements that suit the purpose of the content
2. Write the rules: describe how an element (or goroup of elements) should be displayed
3. Attach styles to the document: use an external style sheet, embedded style sheet, or inline styles (last one is wrong)

Unstyled elements parents pass on style attributes to unstyled children; mostly text styles, while borders, spacing, backgrounds are not
Properties applied to child elements override properties passed down from parents

The **cascade**: style information is passed down until it is overridden by a style rule with more weight 
Weight is based on the priority of the style rule source, specificity of the selector, and rule order

Priority: !important rules (user, then author), style sheets (author, then user), then browser default
Specificity: the more specific the selector, the more weight it receives (# elements more important than . or general elements)
Rule order: if there are conflicting rules, the last one gets the highest weight

## Units of Measurement

Absolute units: px, in, mm, cm, q, pt, pc
Relative units: em, ex, rem, ch, vw, vh, vmin, vmax

Absolute units: px most common, but too rigid for responsive web design. Still fine for border width and image sizes

Relative units
rem: root em, based on the font size of the root. Keeps page proportional to font size.
em: based on the width of 'M'
vw/vh: based on viewport width/height, respectively (1/100 of each)

Use developer tools to troubleshoot and experiment with style