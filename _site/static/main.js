
;(function(w, $) {

	var answer = {
		'init': {
			content: [
				'Hi!',
				'Welcome to my site!', 
				'Do you want\nto know me?'
			],
			callback: function() {
				$('#box').append('\n'
					+'<a class="action" data-action="want-know">Yes</a>'
					+' | '
					+'<a class="action" data-action="dont-want-know">No</a>'
				);
				resizeBox();
			}
		},
		'want-know': {
			content: [
				'Allright.',
				'My name is\nAlfiana Sibuea.',
				'People usually\ncalled me\nFian.',
				'I work as a\nweb developer.',
				'In my spare time,',
				'I love watching\na movie,',
				'I love travelling,',
				'I love reading,',
				'Here is\nmy reading list\non '
			],
			callback: function() {
				$('#box').append(
					'<a href="http://fian.svbtle.com/" class="action" target="_blank">Svbtle.</a>'
					+'\n'
					+'\n'
					+'<a class="action" data-action="want-know-project">Tell me more</a>'
				);
				resizeBox();
			}
		},
		'want-know-project': {
			content: [
				'and...',
				'I love hacking\nsome codes.',
				'Here is one of\nmy project:'
			],
			callback: function() {
				$('#box').append('\n'
					+'<a href="http://climbi.com" class="action" target="_blank">Climbi</a>'
					+'\n'
					+'\n'
					+'<a class="action" data-action="want-know-github">Tell me more</a>'
				);
				resizeBox();
			}
		},
		'want-know-github': {
			content: [
				'You can also\nsee the rest of\nmy project on '
			],
			callback: function() {
				$('#box').append(
					'<a href="https://github.com/fians" class="action" target="_blank">Github.</a>'
					+'\n'
					+'\n'
					+'<a class="action" data-action="want-know-more">Tell me more</a>'
				);
				resizeBox();
			}
		},
		'want-know-more': {
			content: [
				'You want more?',
				'I cannot tell you\ndetails of my self\nhere.',
				'But...',
				'You can say hello\nto me at'
			],
			callback: function() {
				$('#box').append('\n'
					+ '<a href="https://twitter.com/alfianeffendy" class="action" target="_blank">Twitter</a>'
					+'\n'
					+'or'
					+'\n'
					+'alfian.sibuea[at]gmail.com'
				);
				resizeBox();
			}
		},
		'dont-want-know': {
			content: [
				'Are you sure?'
			],
			callback: function() {
				$('#box').append('\n'
					+'<a class="action" data-action="dont-want-know">Yes</a>'
					+' | '
					+'<a class="action" data-action="want-know">No</a>'
				);
				resizeBox();
			}
		},
		'dont-want-know': {
			content: [
				'Ok, then.',
				'I\'m curious.',
				'If you are not\ninterested on me...',
				'Why do you \nvisit this site?',
				'Are you getting lost\nor just bored?',
			],
			callback: function() {
				$('#box').append('\n'
					+'<a class="action" data-action="im-lost">I\'m lost</a>'
					+' | '
					+'<a class="action" data-action="im-bored">I\'m bored</a>'
				);
				resizeBox();
			}
		},
		'im-lost': {
			content: [
				'Well...',
				'Google might be\nknow the answer.'
			],
			callback: function() {
				$('#box').append('\n'
					+'<a href="http://bit.ly/1aJy87K" class="action">Visit Google</a>'
				);
				resizeBox();
			}
		},
		'im-bored': {
			content: [
				'Oh, I see...',
				'You come\nto right place.',
				'I have a fun video\nto make\nyour mood better.',
				'Watch it.'
			],
			callback: function() {

				var videos = [
					'ctlEBHDROAw', 'KZ6rJ-ra8zg',
					'FzRH3iTQPrk', 'a1Y73sPHKxw',
					'sJgDYdA8dio', '1TqBSI8ZBzQ',
					'blpe_sGnnP4', 'o-r02-oZAW4',
					'Fc1P-AEaEp8', 'WApuXPDR5Q0',
					'9fLoEgk9I-k', 'oI6uYJrIqaw',
					'P2jViqMnnK4', 'vLfAtCbE_Jc',
					'7QLSRMoKKS0', 'CMNry4PE93Y',
					'_O1hM-k3aUY',
					'WJq4jWSQNd8',
				];


				$('#box').append('\n'
					+'<a href="http://www.youtube.com/watch?v='
					+ videos[(Math.floor(Math.random() * (videos.length+1)))]
					+'" class="action">View</a>'
				);
				resizeBox();
			}
		}
	}

	function resizeBox() {
		var boxHeight = $('#box').height();
		$('#box').css('margin-top', '-'+(boxHeight/2)+'px');
	}

	function typing(strings, fn) {
		$('#box').typed({
			strings: strings,
			typeSpeed: 50,
			onStringTyped: resizeBox,
			callback: function() {
				return fn();
			}
		});
	}

	function action() {
		var type = $(this).data('action');
		return typing(answer[type].content, function() {
			answer[type].callback();
		});
	}


	$(document).on('ready', function() {
		
		// Init
		typing(answer['init'].content, answer['init'].callback);

		$(document).on('click', '.action', action);
	});

})(window, jQuery);