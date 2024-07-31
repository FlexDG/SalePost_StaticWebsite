
$(function() {
	"use strict";


// slider

$(document).ready(function(){

    $('.banner-slider').slick({
       dots: true,
       arrows: false,
       infinite: true,
       speed: 300,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
       nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
       responsive: [
         {
           breakpoint: 1025,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             infinite: true,
           }
         },
         {
           breakpoint: 769,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false,
           }
         },
         {
           breakpoint: 500,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false,
           }
         }
       ]
     });


   });

   
   $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });
   

// deals slider

   $(document).ready(function(){

    $('.deals-slider').slick({
       dots: true,
       arrows: false,
       infinite: true,
       speed: 300,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
       nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
       responsive: [
         {
           breakpoint: 1025,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             infinite: true,
           }
         },
         {
           breakpoint: 769,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false,
           }
         },
         {
           breakpoint: 500,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false,
           }
         }
       ]
     });


   });


// banner-slider 2

$(document).ready(function(){

  $('.banner-slider-2').slick({
     dots: false,
     arrows: false,
     infinite: false,
     speed: 300,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
     nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
     responsive: [
       {
         breakpoint: 1025,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           infinite: true,
         }
       },
       {
         breakpoint: 769,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false,
         }
       },
       {
         breakpoint: 500,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false,
         }
       }
     ]
   });


 });


// reviews slider 

$(document).ready(function(){


    $('.review-slider').slick({
       dots: true,
       arrows: false,
       infinite: true,
       speed: 300,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       //centerMode: true,
       prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
       nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
       responsive: [
         {
           breakpoint: 1025,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             infinite: true,
           }
         },
         {
           breakpoint: 769,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             arrows: false,
           }
         },
         {
           breakpoint: 500,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false,
           }
         }
       ]
     });
     

   });





   

// category slider 

$(document).ready(function(){


  $('.sales-category-slider').slick({
     dots: false,
     arrows: false,
     infinite: true,
     speed: 300,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     centerMode: true,
     prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
     nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
     responsive: [
       {
         breakpoint: 1025,
         settings: {
           centerMode: false,
           slidesToShow: 3,
           slidesToScroll: 1,
           infinite: true,
         }
       },
       {
         breakpoint: 769,
         settings: {
           centerMode: false,
           slidesToShow: 3,
           slidesToScroll: 1,
           arrows: false,
         }
       },
       {
         breakpoint: 500,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false,
         }
       }
     ]
   });
   

 });



 
// category slider 

$(document).ready(function(){


  $('.brands-slider').slick({
     dots: false,
     arrows: false,
     infinite: true,
     speed: 300,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     //centerMode: true,
     prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
     nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
     responsive: [
       {
         breakpoint: 1025,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 1,
           infinite: true,
         }
       },
       {
         breakpoint: 769,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           arrows: false,
         }
       },
       {
         breakpoint: 500,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           arrows: false,
         }
       }
     ]
   });
   

 });






 
// category slider 

$(document).ready(function(){


  $('.sales-accessories-slider').slick({
     dots: false,
     arrows: false,
     infinite: true,
     speed: 300,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     //centerMode: true,
     prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
     nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
     responsive: [
       {
         breakpoint: 1025,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           infinite: true,
         }
       },
       {
         breakpoint: 769,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           arrows: false,
         }
       },
       {
         breakpoint: 500,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           arrows: false,
         }
       }
     ]
   });
   
 });
 var popup = document.querySelector('.popup')
 var close = document.querySelector('.close')

 window.onload = function() {
   setTimeout(function() {
     popup.style.display = "block"
   }, 2000)
 }

 close.addEventListener('click', () => {
   popup.style.display = "none"
 })






});




