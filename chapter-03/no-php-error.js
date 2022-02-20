

var message = "The search did not work because you are not running this example on a PHP-enabled server. You can view this example without to setup PHP at <a href='http://wordpress.jamesakweter@gmail.com</a>",
	messageDialog = $( "<div><p>" + message + "</p></div>" ).dialog({
		autoOpen: false,
		width: 600
	});

$( document ).ajaxError(function() {
	messageDialog.dialog( "open" );
});
