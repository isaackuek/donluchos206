"use strict";$(document).ready(function(){$("#slide-nav.navbar .container").append($('<div id="navbar-height-col"></div>'));var a=".navbar-toggle",b="#page-content",c=".navbar-header",d="80%",e="-100%",f="-80%";$("#slide-nav").on("click",a,function(){var a=$(this).hasClass("slide-active");$("#slidemenu").stop().animate({left:a?e:"0px"}),$("#navbar-height-col").stop().animate({left:a?f:"0px"}),$(b).stop().animate({left:a?"0px":d}),$(c).stop().animate({left:a?"0px":d}),$(this).toggleClass("slide-active",!a),$("#slidemenu").toggleClass("slide-active"),$("#page-content, .navbar, body, .navbar-header").toggleClass("slide-active")});var g="#slidemenu, #page-content, body, .navbar, .navbar-header";$(window).on("resize",function(){$(window).width()>767&&$(".navbar-toggle").is(":hidden")&&$(g).removeClass("slide-active")})});