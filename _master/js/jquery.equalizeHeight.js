/* start equalizeHeight */

(function ( $ ) {
		'use strict';
	
		$.fn.equalizeHeight = function() {
			var tallestHeight = 0,
			$stories = this; 
			
			$stories.each(function (i, el) {
				var elHeight = $(el).outerHeight();
			
				if (elHeight > tallestHeight) {
					tallestHeight = elHeight;
				}
			});
		
			$stories.css('min-height', tallestHeight);
			
			return $stories;
		}
	}( jQuery ));
	
	$(document).ready(function (){
		
		$('#stories-1') // select wrapping element by ID
			.find('.story') // select element to height adjust
			.equalizeHeight() // sets tallest min-height to element
			.css('background', 'red'); // enter css styles here
		
		$('#stories-2')
			.find('.story')
			.equalizeHeight()
			.css('background', 'green');
	});