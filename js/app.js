
/**
 *  Static transform
 */
$(function() {
	$('#enter').on('click', function() { 
		var welcome = $('#welcome');
		var home = $('#home');
		var body = $('body');
		welcome.addClass('stealth');
		setTimeout(function() {
			welcome.addClass('hide');
			body.addClass('bg-level-2').removeClass('bg-level-1');
			home.removeClass('hide');
			setTimeout(function() {
				home.removeClass('stealth');
			}, 1500);
		}, 1500);
	});
});


	