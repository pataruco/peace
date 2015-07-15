// *******************************************************************************
// Rendering country data visualization inside a div
// *******************************************************************************

function renderCountryInfoData() {	
	//Clearing the divs



	$('#hdi_index_data').html('');
	$('#edu_index_data').html('');
	$('#heal_index_data').html('');
	$('#edu_exp_data').html('');
	$('#heal_exp_data').html('');
	$('#life_data').html('');
	$('#gdp_data').html('');


	//Setting the Country name
	countryName = $('#country_name');
	countryName.text('');
	countryName.text(country_name);

// *******************************************************************************
// Human Development Index
// *******************************************************************************

	var barWidth = 50;
	var width = 140;
	var height = 80;

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
	  attr("fill", "#7f0000");

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
	attr("fill", "#4d004b");

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
	attr("fill", "#084081");

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
	attr("fill", "#00441b");

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
	attr("fill", "#800026");

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

	var x = d3.scale.linear().domain([0, gdp_data.length]).range([0, width]);
	var y = d3.scale.linear().domain([0, d3.max(gdp_data, function(datum) { return datum.gdp})]).
		rangeRound([0, height]);

	// add the canvas to the DOM
	var gdpBar = d3.select("#gdp_data").
	append("svg:svg").
	attr("width", width).
	attr("height", 230);

	gdpBar.selectAll("rect").
	data(gdp_data).
	enter().
	append("svg:rect").
	attr("x", function(datum, index) { return x(index); }).
	attr("y", function(datum) { return height - y(datum.gdp); }).
	attr("height", function(datum) { return y(datum.gdp); }).
	attr("width", barWidth).
	attr("fill", "#f768a1");

	// numbers on bars

	gdpBar.selectAll("text").
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

	gdpBar.selectAll("text.yAxis").
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


// *******************************************************************************
// Health Expenditure
// *******************************************************************************
	
	var x = d3.scale.linear().domain([0, heal_exp_data.length]).range([0, width]);
	var y = d3.scale.linear().domain([0, d3.max(heal_exp_data, function(datum) { return datum.heal_exp})]).
		rangeRound([0, height]);

	// add the canvas to the DOM
	var heal_expBar = d3.select("#heal_exp_data").
	append("svg:svg").
	attr("width", width).
	attr("height", 230);

	heal_expBar.selectAll("rect").
	data(heal_exp_data).
	enter().
	append("svg:rect").
	attr("x", function(datum, index) { return x(index); }).
	attr("y", function(datum) { return height - y(datum.heal_exp); }).
	attr("height", function(datum) { return y(datum.heal_exp); }).
	attr("width", barWidth).
	attr("fill", "#7bccc4");

	// numbers on bars

	heal_expBar.selectAll("text").
	data(heal_exp_data).
	enter().
	append("svg:text").
	attr("x", function(datum, index) { return x(index) + barWidth; }).
	attr("y", function(datum) { return height - y(datum.heal_exp); }).
	attr("dx", -barWidth/2).
	attr("dy", "1.2em").
	attr("text-anchor", "middle").
	text(function(datum) { return datum.heal_exp;}).
	attr("fill", "white");

	// scale

	heal_expBar.selectAll("text.yAxis").
	data(heal_exp_data).
	enter().append("svg:text").
	attr("x", function(datum, index) { return x(index) + barWidth; }).
	attr("y", height).
	attr("dx", -barWidth/2).
	attr("text-anchor", "middle").
	attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
	text(function(datum) { return datum.scope;}).
	attr("transform", "translate(0, 18)").
	attr("class", "yAxis");

}//end of the function