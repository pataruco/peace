// *******************************************************************************
// Variables
// *******************************************************************************
var world_hdi_index_array = [];
var world_edu_index_array = [];
var world_heal_index_array = [];
var world_edu_exp_array = [];
var world_heal_exp_array = [];
var world_life_array = [];
var world_gdp_array = [];

var legend = {
	hdi_index: {title: 'Human Development Index', colors: ['#fff7ec', '#fc8d59', '#7f0000']},
	edu_index: {title: 'Education Index', colors: ['#f7fcfd', '#8c6bb1', '#4d004b']},
	heal_index: {title: 'Health Index', colors: ['#f7fcf0', '#7bccc4', '#084081']},
	edu_exp: {title: 'Education Expenditure', colors: ['#f7fcfd', '#66c2a4', '#00441b']},
	heal_exp: {title: 'Health Expenditure', colors: ['#fff7fb', '#74a9cf', '#023858']},
	life: {title: 'Life Expectancy', colors: ['#ffffcc', '#fd8d3c', '#800026']},
	gdp: {title: 'GDP', colors: ['#fff7f3', '#f768a1', '#49006a']}
};

var country_name;
var country_hdi_index;
var country_edu_index;
var country_heal_index;
var country_edu_exp;
var country_heal_exp;
var country_life;
var country_gdp;

var world_hdi_index;
var world_edu_index;
var world_heal_index;
var world_edu_exp;
var world_heal_exp;
var world_life;
var world_gdp;

var hdi_index_data = [];
var edu_index_data = [];
var heal_index_data = [];
var edu_exp_data = [];
var heal_exp_data = [];
var life_data = [];
var gdp_data = [];

$(document).ready(function() {
// *******************************************************************************
// Event Listeners
// *******************************************************************************

	$('#hdi_index').on('click', chooseIndicator);
	$('#edu_index').on('click', chooseIndicator);
	$('#heal_index').on('click', chooseIndicator);
	$('#edu_exp').on('click', chooseIndicator);
	$('#heal_exp').on('click', chooseIndicator);
	$('#life').on('click', chooseIndicator);
	$('#gdp').on('click', chooseIndicator);

// *******************************************************************************
// Rendering the map
// *******************************************************************************
	var map = new Datamap({
		element: document.getElementById('map-container'),

		projection: 'mercator',

		fills: {defaultFill: '#525252'},

		geographyConfig: {
            borderColor: 'white',
            borderWidth: 0,
	        highlightFillColor: 'white',
	        highlightBorderColor: 'black',
	        highlightBorderWidth: 1,
	        popupOnHover: false,
        },

		done: function(datamap) {
			datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
				var xCoord = d3.event.pageX;
				var yCoord = d3.event.pageY;
					$.ajax({ // fetching the data from DB to each country
						type: "GET",
						contentType: "application/json; charset=utf-8",
						url: 'peaces/show/' + geography.id,
						dataType: 'json',
						success: function (country_data) {
							console.log(country_data[0]);
						},
						error: function (result) {
							console.log('error');
							console.log(result);
						}
	    			}).done(function(country_data){
	    				$("#info-window").text(country_data[0].country_name);
		        		var infoWindow = $("#info-window");      
		        		infoWindow.css({
		        			position:"absolute", 
		        			top: yCoord, // need x and y coordinates from click
		        			left: xCoord
        				});
        				infoCountryWindow(country_data);
	    			});
	    			// function to populate the country window with D3 visualization
	    			function infoCountryWindow(country_data) {
	    				// console.log('inside infoCountryWindow');
	    				// console.log(country_data);

	    				$.ajax({
	    					type: "GET",
							contentType: "application/json; charset=utf-8",
							url: 'peaces/index',
							dataType: 'json',
							success: function (world_data){
								console.log('success');
							},
							error: function (data){
								console.log('error');
								console.log(data);
							}
						}).done(function(world_data){
							RenderInfoCountryWindow(country_data, world_data);
						});// end of done

						function RenderInfoCountryWindow(country_data, world_data){
						
							country_name = country_data[0].country_name;
							country_hdi_index = country_data[0].hdi_index;
							country_edu_index = country_data[0].edu_index;
							country_heal_index = country_data[0].heal_index;
							country_edu_exp = country_data[0].edu_exp;
							country_heal_exp = country_data[0].heal_exp;
							country_life = country_data[0].life;
							country_gdp = country_data[0].gdp;

							world_data.forEach(function(country){
								world_hdi_index_array.push(country.hdi_index);
								world_edu_index_array.push(country.edu_index);
								world_heal_index_array.push(country.heal_index);
								world_edu_exp_array.push(country.edu_exp);
								world_heal_exp_array.push(country.heal_exp);
								world_life_array.push(country.life);
								world_gdp_array.push(country.gdp);
							});

							world_hdi_index = (d3.sum(world_hdi_index_array) / world_hdi_index_array.length).toFixed(3);
							world_edu_index = (d3.sum(world_edu_index_array) / world_edu_index_array.length).toFixed(3);
							world_heal_index = (d3.sum(world_heal_index_array) / world_heal_index_array.length).toFixed(3);
							world_edu_exp = (d3.sum(world_edu_exp_array) / world_edu_exp_array.length).toFixed(3);
							world_heal_exp = (d3.sum(world_heal_exp_array) / world_heal_exp_array.length).toFixed(3);
							world_life = (d3.sum(world_life_array) / world_life_array.length).toFixed(3);
							world_gdp = (d3.sum(world_gdp_array) / world_gdp_array.length).toFixed(3);

							hdi_index_data = [{scope: 'World', hdi_index: world_hdi_index}, {scope: country_name, hdi_index: country_hdi_index}];
							edu_index_data = [{scope: 'World', edu_index: world_edu_index}, {scope: country_name, edu_index: country_hdi_index}];
							heal_index_data = [{scope: 'World', heal_index: world_heal_index}, {scope: country_name, heal_index: country_heal_index}];
							edu_exp_data = [{scope: 'World', edu_exp: world_edu_exp}, {scope: country_name, edu_exp: country_edu_exp}];
							heal_exp_data = [{scope: 'World', heal_exp: world_heal_exp}, {scope: country_name, heal_exp: country_heal_exp}];
							life_data = [{scope: 'World', life: world_life}, {scope: country_name, life: country_life}];
							gdp_data = [{scope: 'World', gdp: world_gdp}, {scope: country_name, gdp: country_gdp}];

							renderCountryInfoData();

						}// RenderInfoCountryWindow

	    			}// end infoCountryWindow	

        	}); // end of on('click', function(geography) 

		}// end of .done

	}); // end of map
// *******************************************************************************
// Choosing indicator to update Choropleth map
// *******************************************************************************

	function chooseIndicator () {
		$('#map-legend').html('');
		indicator = this.id;
		indicatorColor = this.id + '_color';
		console.log(indicatorColor)
		renderChoropleth(indicator, indicatorColor);
	};

// *******************************************************************************
// Retrieving the data dinamically depending of which indicatorColor has been choosen
// *******************************************************************************

	function renderChoropleth (indicator, indicatorColor) {
		$.ajax({
			type: "GET",
			contentType: "application/json; charset=utf-8",
			url: 'peaces/index',
			dataType: 'json',
			success: function (data){
				console.log('success');
			},
			error: function (data){
				console.log('error');
				console.log(data);
			}
		}).done(function(data){
			renderNewChoroplethMap(data, indicator, indicatorColor);
		});// end of done

// *******************************************************************************
// Rendering dinamically a Choropleth with a legend 
// *******************************************************************************

		function renderNewChoroplethMap(data, indicator, indicatorColor) {
			var colors = {};
			var indicatorsArray = [];

			data.forEach(function(country){
				indicatorsArray.push(country[indicator]); // creating a array of data to do the scale of the legend
				colors[country.country_code] = country[indicatorColor]; // creating object to update Choropleth map attributes
			});

			var min = d3.min(indicatorsArray);
			var mean = d3.sum(indicatorsArray) / indicatorsArray.length;
			var max = d3.max(indicatorsArray);

			var colorMin = legend[indicator].colors[0]; 
			var colorMean = legend[indicator].colors[1]; 
			var colorMax = legend[indicator].colors[2];

			var scale = d3.scale.linear()
    			.domain([min, mean, max])
    			.range([colorMin, colorMean, colorMax]);

			map.updateChoropleth(
				colors
			);

// *******************************************************************************
// Method from d3.colorLegend library to render a legend
// *******************************************************************************

			colorlegend("#map-legend", scale, "linear", {title: legend[indicator].title});

		}// end RenderNewmap

	}// end of renderChoropleth()

// *******************************************************************************
// Make map responsive
// *******************************************************************************
	
	d3.select(window).on('resize', function() {
		map.resize();
    });

}); // end of document