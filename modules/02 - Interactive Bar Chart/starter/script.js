// Global var for FIFA world cup data
var allWorldCupData;

/**
 * Render and update the bar chart based on the selection of the data type in the drop-down box
 *
 * @param selectedDimension a string specifying which dimension to render in the bar chart
 */
function getScale(selectedDimension){
    if (selectedDimension == "attendance"){
        return 100;
    }else if(selectedDimension == "teams") {
        return 0.06;
    }else if(selectedDimension == "matches") {
        return 0.1;
    }else if(selectedDimension == "goals") {
        return 0.3;
    }
}

function updateBarChart(selectedDimension) {
    var svgBounds = d3.select("#barChart").node().getBoundingClientRect(),
        xAxisWidth = 100,
        yAxisHeight = 70;

    // ******* TODO: PART I *******
    var counter = 0;
    var arrayD = [];
    for (var i = 19; i >= 0; i--) {
        arrayD.push(allWorldCupData[i][selectedDimension]);
    }
    console.log("the array " + arrayD);
    console.log("selectedDimension " + selectedDimension);
    // Update
    var scale = getScale(selectedDimension);
    var startingX = 60;
    var color = d3.scaleOrdinal().range(d3.schemeCategory20);
    var highlightColor = 'blue';
    var clickF = false;

    var graph = d3.select("#bars")
    .selectAll("rect")
    .data(arrayD)
    .on("mouseover", function(){
        d3.select(this).style("fill", "blue");
    })
    .on("mouseout", function(){
        if (clickF) {

        }else {
            d3.select(this).style("fill", "black");
        }
        clickF = false;
    })
    .on("click", function(d){
        clickF = true;
        d3.select("#bars")
        .selectAll("rect")
        .style("fill", "black");
        console.log(d);
        d3.select(this).style("fill", "yellow")
    })
    .transition()
    .attr("x", function(){
        counter++;
        return startingX + counter*21;
    })
    .attr("y", function(d){
        console.log("update y " + d/scale);
        return 700-d/scale;
    })
    .attr("width", 20)
    .attr("height", function(d){
        return d/scale;
    })
    .style("fill", function(d, i) {

    })
    .duration(1000);

    //Add new nodes
    var clickF = false;
     d3.select("#bars")
    .selectAll("rect")
    .data(arrayD)
    .enter()
    .append("rect")
    .on("mouseover", function(){
        d3.select(this).style("fill", "blue");
    })
    .on("mouseout", function(){
        if (clickF) {

        }else {
            d3.select(this).style("fill", "black");
        }
        clickF = false;
    })
    .on("click", function(d){
        clickF = true;
        d3.select("#bars")
        .selectAll("rect")
        .style("fill", "black");
        console.log(d);
        d3.select(this).style("fill", "yellow")
    })
    .transition()
    .attr("x", function(){
        counter++;
        return startingX + counter*21;
    })
    .attr("y", function(d){
        console.log("add y " + d/scale);
        return 700-d/scale;
    })
    .attr("width", 20)
    .attr("height", function(d){
        return d/scale;
    })
    .style("fill", function(d, i) {

    })
    .duration(1000);

    //Remove nodes
    // graph.remove() ;

    //X-axis
    //Create the Scale we will use for the Axis
    var axisScaleX = d3.scaleTime().domain([new Date(1930, 0 , 1), new Date(2014, 0 , 1)]).range([0, 420]);
    
    //Create the Axis
    var xAxis = d3.axisBottom().scale(axisScaleX).tickFormat(d3.timeFormat("%Y"));

    var myXAxis = d3.select('#xAxis').attr("transform", "translate(" + 80 + "," + 700 + ")").call(xAxis);

    //Y-axis
    //Create the Scale we will use for the Axis
    console.log()
    var axisScaleY = d3.scaleLinear().domain([Math.max(...arrayD), 0]).range([0, 700]);
    
    //Create the Axis
    var yAxis = d3.axisLeft().scale(axisScaleY);

    var myYAxis = d3.select('#yAxis').transition().duration(1000).attr("transform", "translate(" + 80 + "," + 0 + ")").call(yAxis);
    // Create the x and y scales; make
    // sure to leave room for the axes

    // Create colorScale

    // Create the axes (hint: use #xAxis and #yAxis)

    // Create the bars (hint: use #bars)

    // ******* TODO: PART II *******

    // Implement how the bars respond to click events
    // Color the selected bar to indicate is has been selected.
    // Make sure only the selected bar has this new color.

    // Output the selected bar to the console using console.log()

}

/**
 *  Check the drop-down box for the currently selected data type and update the bar chart accordingly.
 *
 *  There are 4 attributes that can be selected:
 *  goals, matches, attendance and teams.
 */
function chooseData() {

    // ******* TODO: PART I *******
    //Changed the selected data when a user selects a different
    // menu item from the drop down.
    var choose = document.getElementById("dataset").value;
    console.log("choose " + choose);
    updateBarChart(choose);

}

/* DATA LOADING */

// This is where execution begins; everything
// above this is just function definitions
// (nothing actually happens)

// Load CSV file
d3.csv("data/fifa-world-cup.csv", function (error, csv) {

    csv.forEach(function (d) {

        // Convert numeric values to 'numbers'
        d.year = +d.YEAR;
        d.teams = +d.TEAMS;
        d.matches = +d.MATCHES;
        d.goals = +d.GOALS;
        d.avg_goals = +d.AVERAGE_GOALS;
        d.attendance = +d.AVERAGE_ATTENDANCE;
        //Lat and Lons of gold and silver medals teams
        d.win_pos = [+d.WIN_LON, +d.WIN_LAT];
        d.ru_pos = [+d.RUP_LON, +d.RUP_LAT];

        //Break up lists into javascript arrays
        d.teams_iso = d3.csvParse(d.TEAM_LIST).columns;
        d.teams_names = d3.csvParse(d.TEAM_NAMES).columns;

    });

    // Store csv data in a global variable
    allWorldCupData = csv;
    // Draw the Bar chart for the first time
    console.log("start updating attendance bar chart");
    updateBarChart('attendance');
});
