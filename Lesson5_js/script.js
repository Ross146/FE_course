

var first_js = function() {
	document.getElementsByClassName('container-main')[0].innerHTML = document.getElementsByClassName('hidden')[0].innerHTML;
} 
var first_jq = function(){
	$(".container-main").html($(".hidden").html());
};
var second_js = function () {
	var list_object = (document.getElementsByTagName("nav")[0]).getElementsByTagName("a");
	var list_array = ([].slice.call(list_object, 0)).reverse();
	var copy = []
	for(var i = 0; i<list_array.length; i++) {
		copy[i] = list_array[i].innerHTML
	}
	for(var i = 0; i<list_object.length; i++) {
		list_object[i].innerHTML = copy[i];
	}
}
var second_jq = function () {
	var list_object = $("header nav a");
	var list_array = list_object.toArray().reverse();
	var copy = [];
	for ( i in list_array) {
		copy[i] = list_array[i].text;
	}
	for ( i in list_object) {
		list_object[i].text = copy[i];
	}
}
var third_js = function () {
	var footer_list_span = (document.getElementsByTagName("nav")[1]).getElementsByTagName("span");
	var index = [];
	for( var i = 1; i<footer_list_span.length+1; i++) {	
		index[i] = "#" + i;
	}
	index.reverse();
	for (var i = 0; i<footer_list_span.length; i++) {
		footer_list_span[i].innerHTML = index[i];
	}
}
var third_jq =function() {
	var footer_list_span = $("footer nav span");
	var index = [];
	for( var i = 1; i<footer_list_span.length+1; i++) {
		index[i] = '#' + i;
	}
	index.reverse();
	for( var i =0; i<footer_list_span.length; i++) {
		footer_list_span[i].innerHTML = index[i];
	}
}

first_jq();
second_jq();
third_jq();

//1
$('p').remove('.loading');
$('.container-main').append($('.hidden').removeClass('hidden'));
//2
$('header nav ul').append($('header nav ul li').get().reverse());
//3
var $listLength = $('footer nav ul li').length;
$('footer nav ul li').each(function(){
	$(this).find('a span').text('#' + $listLength + ' ');
	$listLength--;
});
