(function(){	

	var input_name = function () {
		var input = document.getElementsByTagName("input");
		for(var i=0;i<input.length;i++){
			(input[i].type == "checkbox" || input[i].type == "radiobutton")? false :input[i].name = input[i].id
		}
	}
 input_name();

	var get_random_user = function () {
		var random_user;
		var url = "https://randomuser.me/api/"; 
		window.XMLHttpRequest = XMLHttpRequest || window.ActiveXObject && function() { return new ActiveXObject('Msxml2.XMLHTTP'); };
		var xhr = new XMLHttpRequest();
		xhr.open('get', url, true);
		(function() {
    if (xhr.readyState == 4){        
      	random_add(xhr);}
    else
        setTimeout(arguments.callee, 10);
	})();
	xhr.send(null);
// $.ajax({
//     url: url,
//     dataType: 'JSON',
//     // jsonpCallback: 'showMyIp',
//     type: 'GET',
//     success: function (data) {
//         random_user = data
//     }
// });
	}
	get_random_user();

	var random_add = function (xhr) {
		random_user = (JSON.parse(xhr.responseText)).results[0].user;
		console.log(random_user);
		var input = document.getElementsByTagName("input");
		console.log(random_user["email"]);
		for(var i=0;i<input.length;i++){
			(input[i].id == "name")? input[i].value= random_user.name["first"] +" "+random_user.name["last"]:
			(input[i].id == "login")? input[i].value= random_user["username"]:
			(input[i].id == "email1")? input[i].value= random_user["email"]:
			(input[i].id == "email2")? input[i].value= random_user["email"]:
			(input[i].id == "password1")? input[i].value= random_user["password"]:
			(input[i].id == "password2")? input[i].value= random_user["password"]:
			(input[i].id == "city")? input[i].value= random_user.location["city"]:
			(input[i].id == "zip")? input[i].value= random_user.location["zip"]:
			(input[i].id == "city")? input[i].value= random_user.location["city"]:
			(input[i].id == "street")? input[i].value= random_user.location["street"]:false
		}
	}

	var submit_form = function () {
		document.forms[0].addEventListener("submit", function (event) {
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
			call_get();
		})
	}

	var call_post = function() {
	  var msg   = $('form').serialize();
	    $.ajax({
	    	type: 'POST',
	    	url: 'http://www.jsontest.com/',
	      	data: msg,
	      	success: function(data) {
	      	  alert(data);
	      	},
	      	error:  function(xhr, str){
	      	  alert('Возникла ошибка: ' + xhr.responseCode);
	      	}
	    	}); 
	}

	var call_get = function() {
	  var msg   = $('form').serialize();
	    $.ajax({
	    	type: 'GET',
	    	url: 'http://www.jsontest.com/',
	      	data: msg,
	      	success: function(data) {
	      	  alert(data);
	      	},
	      	error:  function(xhr, str){
	      	  alert('Возникла ошибка: ' + xhr.responseCode);
	      	}
	    	}); 
	}
	submit_form();

})();




