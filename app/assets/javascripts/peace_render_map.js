$(document).ready(function() {
	// Variables
	// var country_data = [];
	// var indicator = '';

	//event listeners
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

		fills: {defaultFill: 'F4FDFF'},

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
					$.ajax({
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
	
	map.legend();

	// Choosing indicator to update Choropleth map
	function chooseIndicator () {
		indicator = this.id + '_color';
		console.log(indicator)
		renderChoropleth(indicator);
	};

	//Retrieving the data dinamically depending of which indicator has benn choosen
	function renderChoropleth (indicator) {
		$.ajax({
			type: "GET",
			contentType: "application/json; charset=utf-8",
			url: 'peaces/index',
			dataType: 'json',
			success: function (data){
				console.log('success');
				// console.log(data);
			},
			error: function (data){
				console.log('error');
				console.log(data);
			}
		}).done(function(data){
			renderNewChoroplethMap(data, indicator);
		});// end of done

		function renderNewChoroplethMap(data, indicator) {
			var colors = {};
			data.forEach(function(country){
				colors[country.country_code] = country[indicator];
			});

			map.updateChoropleth(
				colors
			);// end map.updateChoropleth

			map.legend();

		}// end RenderNewmap

	}// end of renderChoropleth()

	//Make map responsive
	d3.select(window).on('resize', function() {
		map.resize();
    });

	
    
}); // end of document



colorbrewer['rgb(247,252,253)','rgb(229,245,249)','rgb(204,236,230)','rgb(153,216,201)','rgb(102,194,164)','rgb(65,174,118)','rgb(35,139,69)','rgb(0,109,44)','rgb(0,68,27)']