
// First JS
// document.getElementsByClassName('container-main')[0].innerHTML = document.getElementsByClassName('hidden')[0].innerHTML;
// First Jquery
$(".container-main").html($(".hidden").html());

// Second JS
// var list_object = (document.getElementsByTagName("nav")[0]).getElementsByTagName("a");
// var list_array = ([].slice.call(list_object, 0)).reverse();
// var copy = []
// for(var i = 0; i<list_array.length; i++) {
// 	copy[i] = list_array[i].innerHTML
// }
// for(var i = 0; i<list_object.length; i++) {
// 	list_object[i].innerHTML = copy[i];
// }

// Second jquery
var list_object = $("header nav a");
var list_array = list_object.toArray().reverse();
var copy = [];
for ( i in list_array) {
	copy[i] = list_array[i].text;
}
for ( i in list_object) {
	list_object[i].text = copy[i];
}

//Third JS
// var footer_list_span = (document.getElementsByTagName("nav")[1]).getElementsByTagName("span");
// var index = [];
// for( var i = 1; i<footer_list_span.length+1; i++) {	
// 	index[i] = "#" + i;
// }
// index.reverse();
// for (var i = 0; i<footer_list_span.length; i++) {
// 	footer_list_span[i].innerHTML = index[i];
// }

//Third Jquiery
var footer_list_span = $("footer nav span");
var index = [];
for( var i = 1; i<footer_list_span.length+1; i++) {
	index[i] = '#' + i;
}
index.reverse();
for( var i =0; i<footer_list_span.length; i++) {
	footer_list_span[i].innerHTML = index[i]
}