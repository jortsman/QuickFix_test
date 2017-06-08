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

    /* end equalizeHeight */

    /* start heighAdjust */

(function ($) {
    'use strict';

    $.fn.equalizeHeight = function () {
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
}(jQuery));

$(document).ready(function () {
    'use strict';

    $('#stories-1')
        .find('.story')
        .equalizeHeight()
        .css('background', 'red');

    $('#stories-2')
        .find('.story')
        .equalizeHeight()
        .css('background', 'green');
});

/* end equalizeHeight */

/* start menu */

(function ($) {
    "use strict";
    $.fn.mainMenu = function (options) {
        var defaults, settings, menuItem, charItem, menuWidth = false;
        defaults = {

            "backgroundColor": "#4b5f9b",
            "highlightColor":  "aqua",
            "submenuColor":    "#5c688a",
            "toggleSpeed":     "1000",
            "fontColor":       "white",
            "menuNumber":       "5"
        };
        settings = $.extend({}, defaults, options);
        return this.each(function () {
//            SETTING SETUP
            $(".menu").css("background-color", settings.backgroundColor);
            $(".main-menu li:not('.subMenu')").css("background-color", settings.backgroundColor);
            $(".menu-header, .menu span, .main-menu li a, .subMenu ul").css("color", settings.fontColor);
            if ($(".menu").outerWidth() < 820) {
                $(".subMenu, .subMenu li").css("background-color", settings.submenuColor);

					
            }
            
            
            if ($(".menu").outerWidth() >= 820) {
                menuItem = 100 / settings.menuNumber;
                charItem = menuItem.toString() + "%";
                $(".main-menu li:not('.subMenu li')").width(charItem);
                $(".subMenu, .subMenu li").css("background-color", settings.backgroundColor);
            }
            $(window).resize(function () {
                if ($(".menu").outerWidth() >= 820) {
                    $(".menu-header, .menu span, .main-menu li a, .subMenu ul").css("color", settings.fontColor);
                    $(".subMenu, .subMenu li").css("background-color", settings.backgroundColor);
                    $(".main-menu li:not('.subMenu li')").width(charItem);
                    $(".main-menu").css("display", "block");
                    
                }
				


                if ($(".menu").outerWidth() < 820) {
                    $(".subMenu, .subMenu li").css("background-color", settings.submenuColor);
                    $(".main-menu li:not('.subMenu li')").css("width", "100%");
					$(".main-menu").hide();
                    $("li.subMenu ul").hide();
                }
            });

            $(".subMenu ul").hide();
            var state = "up", slide;


            $(".menu-header").click(function () {

                $(".main-menu").slideToggle(settings.toggleSpeed);

            });


            $("li.subMenu > a").click(function (event) {
                event.preventDefault();
                var slide = event.target;
                $(slide).next().slideToggle(settings.toggleSpeed);
                

            });


            
            //    Hover Menu


            if ($(".menu").outerWidth() >= 1070) {
                $(".subMenu span").hide();

                $(".main-menu a").hover(function () {
                    $(this).css("background-color", settings.highlightColor);
                }, function () {
                    $(this).css("background-color",  settings.backgroundColor);
                });

                $("li.subMenu > a").hover(function (event) {

                    slide = event.target;
                    if (state === "up") {
                        $(this).next().slideDown(settings.toggleSpeed);
                        state = "down";
                    }
                }, function (event) {

                    slide = event.target;
                    if (state === "down") {
                        $(this).next().mouseleave(function () {
                            $("li.subMenu ul").slideUp(settings.toggleSpeed);
                        });
                        state = "up";
                    }
                });

                $(".main-menu li[data-trigger != 'submenu']").mouseenter(function () {
                    $("li.subMenu ul").slideUp(settings.toggleSpeed);
                });
            }
        });
    };
    
})(jQuery);

/* end menu */

/* start sticky */

(function ($) {
    $.fn.stickyAside = function () {
        var $stick = this;
        var $foot = $('footer');
        var margin = 20;
        var offtop = $stick.offset().top - margin;
        var offbtm = $foot.offset().top - (margin * 2 + $stick.height());

        $(window).scroll(function () {
            var scrtop = $(window).scrollTop();
            if (scrtop > offtop) {
                $stick.addClass('fixed sticky').css('top', margin);
            }
            if (offtop > scrtop && $stick.hasClass('fixed sticky')) {
                $stick.removeClass('fixed sticky').css('top', 'auto');
            }
            if (scrtop > offbtm && $stick.hasClass('fixed sticky')) {
                $stick.removeClass('fixed sticky').addClass('bottom').css('top', offbtm + margin);
            }
            if (offbtm > scrtop && $stick.hasClass('bottom')) {
                $stick.removeClass('bottom').addClass('fixed sticky').css('top', margin);
            }
        });
    };
})(jQuery);


/* end sticky */

/* start tooltip */

(function ($) {
	"use strict";
//name of plugin and how to call it
    $.fn.tooltip = function (options) {
        var defaults, settings, tooltip_container, url, elementToGet, toolTipWidth, toolTipHeight, pageWidth;
		defaults = {

            "backgroundColor": "#000",
            "color":  			"#FFF",
			"fontSize": 		"12px",
           	"border":       	"solid #f6e902"
		};
        
        settings = $.extend({}, defaults, options);
        tooltip_container = $('<div id = "tooltip-container"></div>').hide().appendTo('body');
		return this.each(function () {
			$(this).mouseover(function (e) {
		
				if ($(this).attr('data-tip-type') === 'html') {
					url = $(this).attr("rel");
					$('#tooltip-container').load(url);
				}
				if ($(this).attr('data-tip-type') === 'text') {
			
					elementToGet = $(this).attr("tooltip-title");

					$('#tooltip-container').html(elementToGet);
				}
				$('#tooltip-container').css({'display': 'block', 'opacity': 0}).animate({opacity: 1}, 250);
				$("#tooltip-container").css("background-color", settings.backgroundColor);
				$("#tooltip-container").css("color", settings.color);
				$("#tooltip-container").css("font-size", settings.fontSize);
				$("#tooltip-container").css("border", settings.border);
				
			}).mousemove(function (e) {
				toolTipWidth = $('#tooltip-container').outerWidth();
				toolTipHeight = $('#tooltip-container').outerHeight();
				pageWidth = $('body').width();
				if (e.pageX > pageWidth / 2) {
					$('#tooltip-container').css('left', (e.pageX - toolTipWidth + 20) + 'px');
				} else {
					$('#tooltip-container').css('left', (e.pageX - 20) + 'px');
				}
		
				$('#tooltip-container').css('top', (e.pageY + 20) + 'px');
		
		
			});
		
            if ($(this).attr('data-tip-type') === 'text') {
                $(this).mouseout(function (e) {
                    $('#tooltip-container').animate({opacity: 0}, 50, function () {
                        $('#tooltip-container').css('display', 'none').html('');
                    });
                });
            } else {
                $('html').click(function () {

                    $('#tooltip-container').animate({opacity: 0}, 50, function () {
                        $('#tooltip-container').css('display', 'none').html('');
       
                    });
                });
            }
           
        });
         
    };
})(jQuery);

/* end tooltip */