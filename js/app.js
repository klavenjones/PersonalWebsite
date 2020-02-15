

let container = $('.container.hide');
let skill = $("#skill");
let skills = ['JavaScript', 'HTML', 'CSS', 'Sass', 'Java', 'MySQL', 'MongoDB', 'React', 'Node.js', 'Android' ];
let index = 0;
let nameTrigger = $("#name");
let screen = $(window).width();
let image = $(".img-section");
let greeting = $(".greeting");
let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';




$( document ).ready(function() {
    
    //fade in animation at start of page
    container.removeClass("hide").addClass("animated fadeInUp");
    
  
       //Roll over Picture effect
        if(screen > 768){

            nameTrigger.mouseenter(function(){
                    
                image.addClass("is-active");
                greeting.addClass("is-active");

            }); 
            nameTrigger.mouseleave(function(){
                    
                image.removeClass("is-active");
                greeting.removeClass("is-active");
            });
    }

           
   
   


    //This will create a loop that will cycle through all my skills in the skill array
    setInterval(function(){
        skill.fadeOut(function(){
            if(skills.length > index){
                $(this).text(skills[index]).fadeIn(400);
                index++;
            }
            else{
                index = 0;
            }
        
        });

    }, 1000);
});