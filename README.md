So here's information about importing the data into another javascript file:
https://www.tutorialrepublic.com/faq/how-to-include-a-javascript-file-in-another-javascript-file.php
https://www.w3docs.com/learn-javascript/export-and-import.html
changeQuestions seems to be about looping through the data in the file and if data is constructed as an object, you can use dot notation or [] notation with keys to obtain the values and use template literals to build either build the html (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
or if you have the html done, use this to place the content into existing elements (https://www.w3schools.com/js/js_htmldom_html.asp)