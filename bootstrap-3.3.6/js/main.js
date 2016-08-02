$(document).ready(function() {

$("#owl-demo").owlCarousel({
      items : 6,
      lazyLoad : true,
      navigation : true,
		  autoPlay:true,
		
      });
$(document).ready(function(){
    'use strict';
    var left = null;
    var center = null;
    var right = null;
    function getItem(){
     left=$(".left1");
     center=$(".center1");
     right=$(".right1");
    }
    
   function clickleft(){
        getItem();   
         
         left.removeClass("left1");
         left.addClass("center1 active1");
        center.removeClass("center1 active1");
        center.addClass("right1");
        right.removeClass("right1");
         right.addClass("left1");
       
    }
    function clickright(){
        getItem();   
        left.removeClass("left1");
        left.addClass("right1");
        center.removeClass("center1 active1");
        center.addClass("left1");
        right.removeClass("right1");
        right.addClass("center1 active1");
    }
    $("body").on('click',".left1", function () {
      clickleft();
    });
    $("body").on('click',".right1", function () {
      clickright();
    });

 });
        });