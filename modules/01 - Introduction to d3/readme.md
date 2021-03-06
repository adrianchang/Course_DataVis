# Data Visualization - Module 01


## Visualization Assignment

In this assignment you will create a simple webpage with some graphical content using HTML, CSS, and SVG. These are basic building blocks that we will manipulate in later projects using Javascript and D3 in order to create visualizations. As such, it is important that you know how the pieces work on their own, before moving forward.

## The Data

This is one of the datasets from Anscombe's quartet that we discussed in Lecture 1. You will create multiple representations for this dataset, specifically a bar chart, a line chart, an area chart and a scatterplot, all using vanilla SVG. *You should write the svg manually and NOT create it using either javascript or drawing software.*

| X | Y |
--- |----
10.0	| 8.04
8.0	| 6.95
 13.0	| 7.58
 9.0	|8.81
 11.0	|8.33
 14.0	|9.96
 6.0	|7.24
 4.0	|4.26
 12.0	|10.84
 7.0	|4.82
 5.0	|5.68


## Design and Implementation

Implement your solution in a file called ``module_01.html``. Use the proper HTML elements to structure this information and use headings to label your charts.

You can choose your design parameters freely, i.e., things like the color, aspect ratio and size of your charts is up to you. You need to make sure, however, that the data can be clearly read.  Note that you will probably need to make some kind of transformation to the data to achieve pleasant results.  

You must use selectors to style your SVG elements, i.e., you should not use inline styling. (Using the separate css file should be helpful) You should also not use classes or identifiers more than necessary for each chart, i.e., one class definition per chart should be sufficient.  There are good reasons to use both, css class selectors and element selectors in this homework.

If you are unfamiliar with html5, make sure your submission is a valid HTML5 file. Check that it is valid by uploading it to the [W3C HTML Validator](https://validator.w3.org/#validate_by_upload).

### Bar Charts

Create a horizontal bar chart for both the X and the Y dimensions of the data. Your bars should be aligned along the left and point right. Here is how your bars could look like:

![Bar chart](figures/bars.png)

### Line Charts

Create a line chart for both, the X and the Y dimensions of the data. Your y-axis should have 0 at the bottom. Create the line chart for the X dimension out of a path element, and the line chart for the Y dimension out of SVG line elements. An example of the line charts:

![Line chart](figures/lines.png)

### Area Charts

Next, you should draw an area chart of the same data. An area chart is very much like the line chart (hint: you can probably re-use some of the code from before), but it is filled. See this example:

![Area chart](figures/areas.png)

### Scatterplot

A scatterplot shows how two dimensions relate to each other. Plot the X dimension along the x-axis, and the Y dimension along the y-axis. Frame your scatterplot. This should be your result, approximately:

![Scatterplot](figures/scatterplot.png)


### ASSESSMENT

The charts don’t have to look exactly like the ones shown, but the data must be clearly legible. HTML validity and efficient use of the SVG elements and styles are considered in the evaluation, i.e., even if your charts look exactly like shown here you could still lose points if you do complicated and unnecessary things.

As you will see it can be a little tedious to get the SVG to represent the data, in the next module we will no longer write this by hand but use JavaScript to generate SVG!
