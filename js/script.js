console.log('Loding....');

$(document).ready(function() {
     // Stuff to do as soon as the DOM is ready
     $("#about").click(function(){
         $("div.logo_container").slideToggle("slow", function(){
             $("div.about_container").fadeToggle(800, function() {
                 //Stuff to do *after* the animation takes place
             })
         })
     });
     console.log('Done Loading');
});
