// Variables
var country_data = [];

$(document).ready(function() {

	//Rendering the map
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
						success: function (data) {
							country_data = data;
							console.log(country_data[0]);
						},
						error: function (result) {
							console.log('error');
							console.log(result);
						}
	    			}).done(function(data){
	    				$("#info-window").text(country_data[0].country_name);
		        		var infoWindow = $("#info-window");      
		        		infoWindow.css({
		        			position:"absolute", 
		        			top: yCoord, // need x and y coordinates from click
		        			left: xCoord
        				});
	    			});		
          
        	});

		}

	}); // end of map

	function renderChoropleth() {
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
			console.log('done');
			console.log(data);
			test(data);
			// data.forEach(function(countryData){
			// 	console.log(countryData);
			// 	console.log(countryData.country_code);
			// 	console.log(countryData.edu_exp_color);
			// }); // end of for each


		});// end of done

		
		function test(data) {

			var colors = {}
			data.forEach(function(country){
				colors[country.country_code] = country.edu_exp_color;
			})
			console.log(colors);
			// data.forEach(function(country){
			// 	var code = country.country_code;
			// 	var color = country.edu_exp_color;

				map.updateChoropleth(
					colors

				// }); // end of for each

				);// end map.updateChoropleth

		}// end test


	}// end of renderChoropleth()

	renderChoropleth();


	// map.updateChoropleth({
 //  		IRQ: '#ff2b2b'
 //  	});

	

			
		



	//Make map responsive
	$(window).on('resize', function() {
	 	map.resize();
	})
       


}); // end of document

