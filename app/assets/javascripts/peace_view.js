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
		        		var bubbly = $("#info-window");      
		        		bubbly.css({
		        			position:"absolute", 
		        			top: yCoord, // need x and y coordinates from click
		        			left: xCoord
        				});
	    			});		
                // var test = dataOnInfoWindow(geography.id);
                // debugger;
                // console.log(test);
          //       $("#info-window").text(country_data[0].country_name);
        		// var bubbly = $("#info-window");      
        		// bubbly.css({
        		// 	position:"absolute", 
        		// 	top: d3.event.pageY, 
        		// 	left: d3.event.pageX
        		// });

        	});

		}

	}); // end of map


	// fetch the data from database on click on map and storing in a global variables
	// function dataOnInfoWindow (country_code){
	// 	$.ajax({
	// 		type: "GET",
	// 		contentType: "application/json; charset=utf-8",
	// 		url: 'peaces/show/' + country_code,
	// 		dataType: 'json',
	// 		success: function (data) {
	// 			country_data = data;
	// 			console.log(country_data[0]);
	// 		},
	// 		error: function (result) {
	// 			console.log('error');
	// 			console.log(result);
	// 		}
	//     }).done(function(data){debugger; return data;});
			
		



	//Make map responsive
	$(window).on('resize', function() {
	 	map.resize();
	})
       

}); // end of document

