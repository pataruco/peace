$(document).ready(function() {
	// Variables  //
	var legend = {
		hdi_index: {title: 'Human Development Index', colors: ['#fff7ec', '#fc8d59', '#7f0000']},
		edu_index: {title: 'Education Index', colors: ['#f7fcfd', '#8c6bb1', '#4d004b']},
		heal_index: {title: 'Health Index', colors: ['#f7fcf0', '#7bccc4', '#084081']},
		edu_exp: {title: 'Education Expenditure', colors: ['#f7fcfd', '#66c2a4', '#00441b']},
		heal_exp: {title: 'Health Expenditure', colors: ['#fff7fb', '#74a9cf', '#023858']},
		life: {title: 'Life Expectancy', colors: ['#ffffcc', '#fd8d3c', '#800026']},
		gdp: {title: 'GDP', colors: ['#fff7f3', '#f768a1', '#49006a']}
	}

	//event listeners //
	$('#hdi_index').on('click', chooseIndicator);
	$('#edu_index').on('click', chooseIndicator);
	$('#heal_index').on('click', chooseIndicator);
	$('#edu_exp').on('click', chooseIndicator);
	$('#heal_exp').on('click', chooseIndicator);
	$('#life').on('click', chooseIndicator);
	$('#gdp').on('click', chooseIndicator);

	//Rendering a map
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
	    			});		
        	});
		},
	}); // end of map
	

	// Choosing indicator to update Choropleth map
	function chooseIndicator () {
		$('#map-legend').html('');
		indicator = this.id;
		indicatorColor = this.id + '_color';
		console.log(indicatorColor)
		renderChoropleth(indicator, indicatorColor);
	};

	//Retrieving the data dinamically depending of which indicatorColor has benn choosen
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


		// rendering a Choropleth with a legend dinamically
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
			
			// method from d3.colorLegend library to render a legend
			
			colorlegend("#map-legend", scale, "linear", {title: legend[indicator].title });

		}// end RenderNewmap

	}// end of renderChoropleth()

	//Make map responsive
	d3.select(window).on('resize', function() {
		map.resize();
    });

}); // end of document