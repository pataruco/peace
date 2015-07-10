// Variables
country_data = [];

$(document).ready(function() {

	//Rendering the map
	var map = new Datamap({
		element: document.getElementById('map-container'),

		done: function(datamap) {
			datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                country_code = (geography.id); 
                dataOnInfoWindow(country_code);
            });
        },

	}); // end of map


	// fetch the data from database on click on map and storing in a global variables
	function dataOnInfoWindow (country_code){
		$.ajax({
			type: "GET",
			contentType: "application/json; charset=utf-8",
			url: 'peaces/show/' + country_code,
			dataType: 'json',
			success: function (data) {
				country_data = data;
				console.log(country_data[0]);
			},
			error: function (result) {
				console.log('error');
				console.log(result);
			}
	    });

	}

	//Make map responsive
	$(window).on('resize', function() {
	 	map.resize();
	})
       

}); // end of document

