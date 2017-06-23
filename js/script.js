console.log('Loding....');

$(document).ready(function() {
     // Stuff to do as soon as the DOM is ready
     $("#about").click(function(){
         about_slide();
     });
     $("i#about_info").click(function() {
         exit_about();
     });
     $("#projects").click(function(){
         projects_slide();
     });
     $("i#projects").click(function(){
         exit_projects();
     });
     $('#contact').click(function() {
         contact_slide();
     });
     $('i#contact').click(function() {
         exit_contact();
     });
     $("#about").mouseenter()
    //  ****************FUNCTIONS****************
    //  about slide
    function about_slide() {
        $(".container1").hide('slide', {direction: 'right'}, 1500);
        window.setTimeout(about_fade,1500)
        function about_fade() {
            $(".container2").fadeToggle(2000, function() {
                     //Stuff to do *after* the animation takes place
            })
        }
    }
    // exit about
    function exit_about() {
        $(".container2").fadeToggle(1000, function() {
            //Stuff to do *after* the animation takes place
        })
        window.setTimeout(exit_about,1500)
        function exit_about() {
            $(".container1").show('slide', {direction: 'right'}, 1500);
        }
    }

    // project slide
    function projects_slide() {
        $(".container1").hide('slide', {direction: 'left'}, 1500);
        window.setTimeout(project_show,1500)
        function project_show() {
            $(".container3").fadeToggle(2000, function() {
                //Stuff to do *after* the animation takes place
            })
        }
    }
    // exit project
    function exit_projects() {
        $(".container3").fadeToggle(1000, function() {
            //Stuff to do *after* the animation takes place
        })
        window.setTimeout(exit_project, 1500)
        function exit_project() {
            $(".container1").show('slide', {direction: 'left'}, 1500)
        }
    }
    // contact slide
    function contact_slide() {
        $(".container1").hide('slide', {direction:'up'}, 1500);
        window.setTimeout(contact_show, 1500)
        function contact_show() {
            $(".container4").fadeToggle(1500, function() {
                //Stuff to do *after* the animation takes place
            })
        }
    }
    // exit contact
    function exit_contact() {
        $('.container4').fadeToggle(1000, function() {
            //Stuff to do *after* the animation takes place
        })
        window.setTimeout(slide_out, 1500)
        function slide_out() {
            $(".container1").show('slide', {direction: 'up'}, 1500)
        }
    }
     console.log('Done Loading');
});
