$(function() {
            		function print(object) {
		var finalstring = "<p>";

		finalstring = finalstring + object.name + " " + object.title + " " + object.city + " " + object.text + "</p>";

		return finalstring; 
	};

                $("#search").on("submit", function(e) {
                    e.preventDefault();
                    $.ajax({
                        url: $(this).attr("action"),
                        type: 'GET',
                        data: $(this).serialize(),
                        beforeSend: function() {
                            $("searchdiv").html("sending...");
                        },
                        success: function(data) {
                        	console.log("Hello");
                        	var finalstring = "";

                        	console.log(data.length);

                        	for (var i = 0; i < data.length; i++) {
                        		console.log("Hi");
                        		finalstring += print(data[i]);
                        	}

                        	console.log(finalstring);

                        	document.querySelector("#response").innerHTML = finalstring;
                            //$("#response").html(data);
                        }
                    });
                });
            });