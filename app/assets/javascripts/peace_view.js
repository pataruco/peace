$.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: 'peaces/show/VEN',
            dataType: 'json',
            data: "{}", 
            success: function (data) {
            	console.log('success');
            	debugger;
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
		element: document.getElementById('map-container')
	});

	//Make map responsive
	$(window).on('resize', function() {
	 	map.resize();
	})
       

}); // end of document

