$(document).ready(function () {

    $("body").first().click(function () {

        $("body>div").css("width", function (index, value) {

            let tamanioExtra = parseInt(prompt("¿Cuanto quiere aumentar el tamaño?", "25"))

            return parseInt(value) - tamanioExtra + "px"
        }
        )
    })

    $("nav#menu-principal>label>span").on({

        mouseenter: function () { $(this).css("color", "red") },

        mouseleave: function () { $(this).css("color", "black") },

        click: function () { $("nav#menu-principal>ul#menu").toggle() }

    });
});


