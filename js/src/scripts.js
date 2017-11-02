$(document).ready(init);

function init(){
	$('html').click(clicked);
}


function clicked(){
	$('html').toggleClass('sun-bg');
}

