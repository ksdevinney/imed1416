# Table Markup

Tables: for data that needs to be organized in columns and rows (schedules, data)

<table> main element
<tr> table row
<th> table header
<td> table data

Only uses rows, columns are implied by the number of cells in each row

Be sure to use th correctly for screen reading devices

## Column spans

Used to have a single column extended into others

Every row or column should have the same colspan (or rowspan) values

Tables typically expand just enough to fit all content in table, we use CSS to style further

## Readability

Use <caption> within your table to display a title

scope attribute associates table content with a cell or group of cells (use with th)

