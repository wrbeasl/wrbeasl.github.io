var $j = jQuery.noConflict();
var container = $j('#main_container');
$j('head').load('/head.html');
$j('body').prepend($j('<div>').load('/nav.html'));

/* Change the div content to the page selected */
$j('.link').on('click', function(e){
	console.log($j(this));
	if($j(this).data('name') == 'smk'){
		$j(container).load('/smk/index.html');
	}
});