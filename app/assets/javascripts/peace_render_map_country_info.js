// *******************************************************************************
// Rendering country data visualization inside a div
// *******************************************************************************

function renderCountryInfoData() {	

// *******************************************************************************
// Human Development Index
// *******************************************************************************

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

// *******************************************************************************
// Education Index
// *******************************************************************************

	var barWidth = 60;
	var width = (barWidth + 10) * edu_index_data.length;
	var height = 100;

	var x = d3.scale.linear().domain([0, edu_index_data.length]).range([0, width]);
	var y = d3.scale.linear().domain([0, d3.max(edu_index_data, function(datum) { return datum.edu_index})]).
		rangeRound([0, height]);

	// add the canvas to the DOM
	var eduIndexBar = d3.select("#edu_index_data").
	append("svg:svg").
	attr("width", width).
	attr("height", 230);

	eduIndexBar.selectAll("rect").
	data(edu_index_data).
	enter().
	append("svg:rect").
	attr("x", function(datum, index) { return x(index); }).
	attr("y", function(datum) { return height - y(datum.edu_index); }).
	attr("height", function(datum) { return y(datum.edu_index); }).
	attr("width", barWidth).
	attr("fill", "#2d578b");

	// numbers on bars

	eduIndexBar.selectAll("text").
	data(edu_index_data).
	enter().
	append("svg:text").
	attr("x", function(datum, index) { return x(index) + barWidth; }).
	attr("y", function(datum) { return height - y(datum.edu_index); }).
	attr("dx", -barWidth/2).
	attr("dy", "1.2em").
	attr("text-anchor", "middle").
	text(function(datum) { return datum.edu_index;}).
	attr("fill", "white");

	// scale

	eduIndexBar.selectAll("text.yAxis").
	data(edu_index_data).
	enter().append("svg:text").
	attr("x", function(datum, index) { return x(index) + barWidth; }).
	attr("y", height).
	attr("dx", -barWidth/2).
	attr("text-anchor", "middle").
	attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
	text(function(datum) { return datum.scope;}).
	attr("transform", "translate(0, 18)").
	attr("class", "yAxis");	

// *******************************************************************************
// Heal Index
// *******************************************************************************

	var barWidth = 60;
	var width = (barWidth + 10) * heal_index_data.length;
	var height = 100;

	var x = d3.scale.linear().domain([0, heal_index_data.length]).range([0, width]);
	var y = d3.scale.linear().domain([0, d3.max(heal_index_data, function(datum) { return datum.heal_index})]).
		rangeRound([0, height]);

	// add the canvas to the DOM
	var healIndexBar = d3.select("#heal_index_data").
	append("svg:svg").
	attr("width", width).
	attr("height", 230);

	healIndexBar.selectAll("rect").
	data(heal_index_data).
	enter().
	append("svg:rect").
	attr("x", function(datum, index) { return x(index); }).
	attr("y", function(datum) { return height - y(datum.heal_index); }).
	attr("height", function(datum) { return y(datum.heal_index); }).
	attr("width", barWidth).
	attr("fill", "#2d578b");

	// numbers on bars

	healIndexBar.selectAll("text").
	data(heal_index_data).
	enter().
	append("svg:text").
	attr("x", function(datum, index) { return x(index) + barWidth; }).
	attr("y", function(datum) { return height - y(datum.heal_index); }).
	attr("dx", -barWidth/2).
	attr("dy", "1.2em").
	attr("text-anchor", "middle").
	text(function(datum) { return datum.heal_index;}).
	attr("fill", "white");

	// scale

	healIndexBar.selectAll("text.yAxis").
	data(heal_index_data).
	enter().append("svg:text").
	attr("x", function(datum, index) { return x(index) + barWidth; }).
	attr("y", height).
	attr("dx", -barWidth/2).
	attr("text-anchor", "middle").
	attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
	text(function(datum) { return datum.scope;}).
	attr("transform", "translate(0, 18)").
	attr("class", "yAxis");

// *******************************************************************************
// Education Expenditure
// *******************************************************************************

	var barWidth = 60;
	var width = (barWidth + 10) * edu_exp_data.length;
	var height = 100;

	var x = d3.scale.linear().domain([0, edu_exp_data.length]).range([0, width]);
	var y = d3.scale.linear().domain([0, d3.max(edu_exp_data, function(datum) { return datum.edu_exp})]).
		rangeRound([0, height]);

	// add the canvas to the DOM
	var eduExpBar = d3.select("#edu_exp_data").
	append("svg:svg").
	attr("width", width).
	attr("height", 230);

	eduExpBar.selectAll("rect").
	data(edu_exp_data).
	enter().
	append("svg:rect").
	attr("x", function(datum, index) { return x(index); }).
	attr("y", function(datum) { return height - y(datum.edu_exp); }).
	attr("height", function(datum) { return y(datum.edu_exp); }).
	attr("width", barWidth).
	attr("fill", "#2d578b");

	// numbers on bars

	eduExpBar.selectAll("text").
	data(edu_exp_data).
	enter().
	append("svg:text").
	attr("x", function(datum, index) { return x(index) + barWidth; }).
	attr("y", function(datum) { return height - y(datum.edu_exp); }).
	attr("dx", -barWidth/2).
	attr("dy", "1.2em").
	attr("text-anchor", "middle").
	text(function(datum) { return datum.edu_exp;}).
	attr("fill", "white");

	// scale

	eduExpBar.selectAll("text.yAxis").
	data(edu_exp_data).
	enter().append("svg:text").
	attr("x", function(datum, index) { return x(index) + barWidth; }).
	attr("y", height).
	attr("dx", -barWidth/2).
	attr("text-anchor", "middle").
	attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
	text(function(datum) { return datum.scope;}).
	attr("transform", "translate(0, 18)").
	attr("class", "yAxis");

// *******************************************************************************
// Life Expectancy
// *******************************************************************************

	var barWidth = 60;
	var width = (barWidth + 10) * life_data.length;
	var height = 100;

	var x = d3.scale.linear().domain([0, life_data.length]).range([0, width]);
	var y = d3.scale.linear().domain([0, d3.max(life_data, function(datum) { return datum.life})]).
		rangeRound([0, height]);

	// add the canvas to the DOM
	var lifeBar = d3.select("#life_data").
	append("svg:svg").
	attr("width", width).
	attr("height", 230);

	lifeBar.selectAll("rect").
	data(life_data).
	enter().
	append("svg:rect").
	attr("x", function(datum, index) { return x(index); }).
	attr("y", function(datum) { return height - y(datum.life); }).
	attr("height", function(datum) { return y(datum.life); }).
	attr("width", barWidth).
	attr("fill", "#2d578b");

	// numbers on bars

	lifeBar.selectAll("text").
	data(life_data).
	enter().
	append("svg:text").
	attr("x", function(datum, index) { return x(index) + barWidth; }).
	attr("y", function(datum) { return height - y(datum.life); }).
	attr("dx", -barWidth/2).
	attr("dy", "1.2em").
	attr("text-anchor", "middle").
	text(function(datum) { return datum.life;}).
	attr("fill", "white");

	// scale

	lifeBar.selectAll("text.yAxis").
	data(life_data).
	enter().append("svg:text").
	attr("x", function(datum, index) { return x(index) + barWidth; }).
	attr("y", height).
	attr("dx", -barWidth/2).
	attr("text-anchor", "middle").
	attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
	text(function(datum) { return datum.scope;}).
	attr("transform", "translate(0, 18)").
	attr("class", "yAxis");

// *******************************************************************************
// GDP
// *******************************************************************************
	
	var barWidth = 60;
	var width = (barWidth + 10) * gdp_data.length;
	var height = 100;

	var x = d3.scale.linear().domain([0, gdp_data.length]).range([0, width]);
	var y = d3.scale.linear().domain([0, d3.max(gdp_data, function(datum) { return datum.gdp})]).
		rangeRound([0, height]);

	// add the canvas to the DOM
	var healExpBar = d3.select("#gdp_data").
	append("svg:svg").
	attr("width", width).
	attr("height", 230);

	healExpBar.selectAll("rect").
	data(gdp_data).
	enter().
	append("svg:rect").
	attr("x", function(datum, index) { return x(index); }).
	attr("y", function(datum) { return height - y(datum.gdp); }).
	attr("height", function(datum) { return y(datum.gdp); }).
	attr("width", barWidth).
	attr("fill", "#2d578b");

	// numbers on bars

	healExpBar.selectAll("text").
	data(gdp_data).
	enter().
	append("svg:text").
	attr("x", function(datum, index) { return x(index) + barWidth; }).
	attr("y", function(datum) { return height - y(datum.gdp); }).
	attr("dx", -barWidth/2).
	attr("dy", "1.2em").
	attr("text-anchor", "middle").
	text(function(datum) { return datum.gdp;}).
	attr("fill", "white");

	// scale

	healExpBar.selectAll("text.yAxis").
	data(gdp_data).
	enter().append("svg:text").
	attr("x", function(datum, index) { return x(index) + barWidth; }).
	attr("y", height).
	attr("dx", -barWidth/2).
	attr("text-anchor", "middle").
	attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
	text(function(datum) { return datum.scope;}).
	attr("transform", "translate(0, 18)").
	attr("class", "yAxis");
}