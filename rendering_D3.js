var barWidth = 60;
var width = (barWidth + 10) * hdi_index_data.length;
var height = 100;

var x = d3.scale.linear().domain([0, hdi_index_data.length]).range([0, width]);
var y = d3.scale.linear().domain([0, d3.max(hdi_index_data, function(datum) { return datum.hdi_index})]).
rangeRound([0, height]);

// add the canvas to the DOM
var hdiBar = d3.select("#hdi_index_data").
append("svg:svg").
attr("width", width).
attr("height", 230);

hdiBar.selectAll("rect").
data(hdi_index_data).
enter().
append("svg:rect").
attr("x", function(datum, index) { return x(index); }).
attr("y", function(datum) { return height - y(datum.hdi_index); }).
attr("height", function(datum) { return y(datum.hdi_index); }).
attr("width", barWidth).
attr("fill", "#2d578b");

// numbers on bars

hdiBar.selectAll("text").
data(hdi_index_data).
enter().
append("svg:text").
attr("x", function(datum, index) { return x(index) + barWidth; }).
attr("y", function(datum) { return height - y(datum.hdi_index); }).
attr("dx", -barWidth/2).
attr("dy", "1.2em").
attr("text-anchor", "middle").
text(function(datum) { return datum.hdi_index;}).
attr("fill", "white");

// scale

hdiBar.selectAll("text.yAxis").
data(hdi_index_data).
enter().append("svg:text").
attr("x", function(datum, index) { return x(index) + barWidth; }).
attr("y", height).
attr("dx", -barWidth/2).
attr("text-anchor", "middle").
attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
text(function(datum) { return datum.scope;}).
attr("transform", "translate(0, 18)").
attr("class", "yAxis");