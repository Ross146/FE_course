(function(){
	var header = document.getElementsByTagName("header")[0];
	var menu_generator = function (){		
		var menu = $("<div/>");
		menu.classList.add("menu");
		var wrap = document.createDocumentFragment("div");
		wrap.classList.add("wrap");
		var ul = document.createElement("ul");	
		for( var i=0; i < 10; i++){
			var li = document.createElement("li");
			var a = document.createElement("a");
			a.innerHTML = "menu_1 "+i;
			for(var j=0;j<10;j++){
				var ul2 = document.createElement("ul")
				for(var k = 0;k<9;k++){
					var li2 = document.createElement("li");
					var a2 = document.createElement("a");
					a2.html("menu_2 "+k);
					ul2.appendChild(li2.append(a2));
				}				
			}
			li.appendChild(a)
			  .appendChild(ul2);
			ul.appendChild(li);
		}			
		header.appendChild(menu);		
		var button = document.createElement("button");
		button.innerHTML="Menu";
		button.classList.add("menu_button", "hidden");
		wrap.appendChild(button);
		wrap.appendChild(ul);	
		menu.appendChild(wrap);		
	}	
	var menu_button_hide = function () {
		var button = document.getElementsByTagName("button")[0];
		var menu = document.getElementsByTagName("ul")[0];
		var button_hide_menu = function() {
			window.innerWidth < 600 ? button.classList.remove("hidden"): button.classList.add("hidden");
			window.innerWidth < 600 ? menu.classList.add("hidden"): menu.classList.remove("hidden")
		}			
		button_hide_menu();
		window.addEventListener("resize", button_hide_menu);	
	}
	var function_click = function () {
		var button = document.getElementsByTagName("button")[0];
		var menu = document.getElementsByTagName("ul")[0];
		window.addEventListener("click", function (e) {
			(e.target == button) ? menu.classList.toggle("hidden"): (e.target.tagName == "A") ? alert(e.target.innerHTML): false
		})
	}
	menu_generator();
	menu_button_hide();
	function_click();	
})();

$(window).resize(function(){
	
})
