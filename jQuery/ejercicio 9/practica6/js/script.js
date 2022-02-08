$(document).ready(function () {



    $("nav#menu-principal>label>span").on({

        mouseenter: function () { $(this).animate({ "color": "red", "background-color": "yellow " }, 300) },

        mouseleave: function () { $(this).animate({ "color": "black", "background-color": "transparent" }, 300) },

        click: function () { $("nav#menu-principal>ul#menu").toggle() }

    });
});


