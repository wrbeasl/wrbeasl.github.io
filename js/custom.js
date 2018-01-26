var $j = jQuery.noConflict();
// $j(document).ready(function(){
	$j('head').load('/head.html');
	$j('#nav-bar').load('/nav.html');

	// $j.ajax({
	// 	url: 'nav.html', 
	// 	type: 'GET',
	// 	onSuccess: function(response){
	// 		console.log(response);
	// 	}
	// });
// });