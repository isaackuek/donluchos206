"use strict";function convertDateToISO(a){function b(a){return 10>a?"0"+a:a}return a.getUTCFullYear()+"-"+b(a.getUTCMonth()+1)+"-"+b(a.getUTCDate())+"T"+b(a.getUTCHours())+":"+b(a.getUTCMinutes())+":"+b(a.getUTCSeconds())+Date().toString().match(/([-\+][0-9]+)\s/)[1].replace(/(\d+)(\d{2})/,"$1:$2")}function toggleExtraEvents(a){console.log("check event states"),$(".location .more").is(":hidden")?(console.log("hidden! will show"),$(".location .more").slideDown("slow"),a.html("Less")):(console.log("visible! will hide"),$(".location .more").slideUp("slow"),a.html("More"),$("#locations").scrollToMe())}function addMoreButton(){var a=$("<button></button>").addClass("btn btn-default btn-lg").attr({id:"more",type:"button"});return $("<div></div>").addClass("text-center").append(a)}function populateEvents(a){var b,c,d,e,f,g,h="dddd, MMMM Do",i="h:mm a",j=$("<address></address>").addClass("event"),k=$("<div></div>").addClass("fa fa-map-marker fa-3x pull-right");$("<h3>Schedule</h3>").appendTo($(".location")),console.log(a);for(var l=!1,m=0;m<a.length;m++){b=new Date(a[m].start.dateTime),c=new Date(a[m].end.dateTime),d=moment(b).format(i),e=moment(c).format(i);var n=!1;if(m>0){var o=new Date(a[m-1].start.dateTime);n=b.getDate()===o.getDate()}n?$("<hr>").appendTo($(".event")[m-1]):(f=moment(b).format(h),l?$("<h4></h4>").html(f).appendTo($(".location")).addClass("more").hide():$("<h4></h4>").html(f).appendTo($(".location")),console.log("Adding Day: "+f)),l?j.clone().appendTo($(".location")).addClass("more").hide():j.clone().appendTo($(".location")),$("<strong></strong>").appendTo($(".event")[m]).html(a[m].summary),$("<br>").appendTo($(".event")[m]),console.log("Adding Event Address: "+a[m].location),$($(".event")[m]).append(a[m].location),g=a[m].location.replace(/\s+/g,"+");var p=$("<a></a>").attr({target:"_blank",href:"https://www.google.com/maps/place/"+g});k.clone().appendTo(p),$($(".event br")[m]).before(p);var q=$("<div></div>").addClass("time lead").html(d+" - "+e);$($(".event")[m]).append(q),a.length>2&&m>0&&(l=!0)}l&&($(".location").append(addMoreButton()),$("#more").html("More").click(function(){toggleExtraEvents($("#more"))}))}function ajaxCall(){var a="https://www.googleapis.com/calendar/v3/calendars/",b="ho9aeenj4j1i476t77u44jm9mo@group.calendar.google.com",c="AIzaSyA6ap60cQj9IaerLrKxTLfMc2AWaUAUjRY0",d=a+b+"/events",e=new Date,f=convertDateToISO(e);$.ajax({url:d,type:"GET",dataType:"json",data:{timeMin:f,orderBy:"startTime",singleEvents:!0,maxResults:10,key:c}}).done(function(a){if(console.log("success ajax call"),a.items.length>0){var b=a.items;populateEvents(b)}else console.log("die"),$(".location").addClass("noLocationMain lead").removeClass("location"),$("<h3>Locations</h3>").prependTo($(".noLocationMain")),$(".noLocationMain").append('<div class="noLocation"> <p>Closed for the Winter. Will be back Spring 2015!</p></div>')}).fail(function(){console.log("error")}).always(function(){console.log("complete")})}$(document).ready(function(){console.log("main js firing"),$(".icon-menu").click(function(){$(".navbar").animate({right:"0px"},500),$("body").animate({right:"200px"},500)}),$(".icon-close, .loc, .men, .cat, .abo").click(function(){$(window).width()<768&&$(".navbar").animate({right:"-200px"},500),$("body").animate({right:"0px"},500)}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},900),!1}})}),jQuery.fn.extend({scrollToMe:function(){var a=jQuery(this).offset().top-100;jQuery("html,body").animate({scrollTop:a},500)}}),$(function(){ajaxCall()});
