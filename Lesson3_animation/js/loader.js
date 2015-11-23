(function(){
	var div = document.createElement('div');
	div.id = 'preloader';
	document.body.appendChild(div);
})();



window.onload = function() {
	setTimeout(function() {
		document.getElementById('preloader').style.display = 'none';
	}, 5000)
	
}
