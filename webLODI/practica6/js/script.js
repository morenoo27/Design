$(document).ready(function () {

    $(window).resize(function () { 
        
        $("ul#menu").css("display", "none");
    });

    $(document).scroll(function () { 
        
        $("header").css("position", "fixed").css("opacity", "0.7");
    });

    $(document).scrollTop(function(){

        
    });

});


