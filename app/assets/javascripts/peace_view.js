$.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: 'peaces/show/VEN',
            dataType: 'json',
            success: function (data) {
            	console.log('success');
            	console.log(data);
            	
            },
            error: function (result) {
            	console.log('error');
            	console.log(result);
            }
    });





$(document).ready(function() {

	//Rendering the map
	var map = new Datamap({
		element: document.getElementById('map-container'),
		    done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                console.log(geography.properties.name);
                console.log(geography);

            });
        },
	});

	//Make map responsive
	$(window).on('resize', function() {
	 	map.resize();
	})
       

}); // end of document

