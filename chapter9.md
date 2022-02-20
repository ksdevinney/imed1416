# Chapter 9: Forms

Forms require form controls (html side) and application/script to process information

form rendered on page - information entered into form - broswer collects information and encodes it - information processed - web application returns a response - response returned to browser for user

Form element contains controls for the form

Attributes
Action: url of application to process the form
Method: POST or GET data
Name: variable name for the form control

Text-entry controls: 
input type=
* text: single line text
* textarea: multiline entry
* password: text, but characters are obscured
* search:
* email:
* tel:
* url:

value= default text that appears on the form
maxlength, minlength= character upper and lower limits
size= length of input in number of visible characters
rows/cols= height and width of textarea
wrap= for line breaks

datalist: for a drop-down menu
Menu: <select> is a container for option elements

Buttons: submit (sends data) and reset (resets form)
Radio: only one can be selected at a time
checkbox: multiple can be selected
optgroup: for grouping menu options together

input type="file" allows user to input a file

Various date and time controls...time, date, datetime-local, month, week

Numerical input: number, range

color

## Form Accessibility

Label element: associates information with form controls
implicit association: nests the control and its description within a label element
explicit association: matches the label (label for=) with the control's id
Fieldset: indicates a logical group of form controls
Legend: provides caption for enclosed fields

## Good Form Design

* Avoid unneccesary questions
* Consider the impact of label placement (top or left)
* Choose input types carefully
* Group related inputs
* Classify primary (submitting) and secondary actions

