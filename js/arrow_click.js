$(document).ready(function () {
     $("#arrow").click(function (){
         $('html, body').animate({
             scrollTop: $("#prize").offset().top
         }, 1000);
         e.preventDefault();
     }); 
})
