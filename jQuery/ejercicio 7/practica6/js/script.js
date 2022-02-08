$(document).ready(function () {

    

    $("nav#menu-principal>label>span").on({

        mouseenter: function () { $(this).css("color", "red") },

        mouseleave: function () { $(this).css("color", "black") },

        click: function () { $("nav#menu-principal>ul#menu").toggle() }

    });
});


