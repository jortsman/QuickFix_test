/*global $, jQuery*/
/*MENU*/
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
