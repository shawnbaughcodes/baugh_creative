console.log('Loding....');

$(document).ready(function() {
     // Stuff to do as soon as the DOM is ready
     $("#about").click(function(){
         about_slide();
     });
     $("#projects").click(function(){
         projects_slide();
     });
     $('#contact').click(function() {
         contact_slide();
     });
     $("i#projects").click(function(){
         exit_projects();
     });
     $("i#about_info").click(function() {
         exit_about();
     });
     $('i#contact').click(function() {
         exit_contact();
     });
     $("#about").mouseenter()
    //  ****************FUNCTIONS****************
    //  about slide
    function about_slide() {
        $(".container1").hide('slide', {direction: 'right'}, 800);
        window.setTimeout(about_fade,800)
        function about_fade() {
            $(".container2").fadeToggle(800, function() {
            })
        }
    }
    // exit about
    function exit_about() {
        $(".container2").fadeToggle(800, function() {
            //Stuff to do *after* the animation takes place
        })
        window.setTimeout(exit_about,800)
        function exit_about() {
            $(".container1").show('slide', {direction: 'right'}, 800);
        }
    }

    // project slide
    function projects_slide() {
        $(".container1").hide('slide', {direction: 'left'}, 800);
        window.setTimeout(project_show,800)
        function project_show() {
            $(".container3").fadeToggle(800, function() {
                //Stuff to do *after* the animation takes place
            })
        }
    }
    // exit project
    function exit_projects() {
        $(".container3").fadeToggle(800, function() {
            //Stuff to do *after* the animation takes place
        })
        window.setTimeout(exit_project, 800)
        function exit_project() {
            $(".container1").show('slide', {direction: 'left'}, 800)
        }
    }
    // contact slide
    function contact_slide() {
        $(".container1").hide('slide', {direction:'up'}, 800);
        window.setTimeout(contact_show, 800)
        function contact_show() {
            $(".container4").fadeToggle(800, function() {
                //Stuff to do *after* the animation takes place
            })
        }
    }
    // exit contact
    function exit_contact() {
        $('.container4').fadeToggle(800, function() {
            //Stuff to do *after* the animation takes place
        })
        window.setTimeout(slide_out, 800)
        function slide_out() {
            $(".container1").show('slide', {direction: 'up'}, 800)
        }
    }
     console.log('Done Loading');
});
