$(document).ready(function () {


    //EJERCICIO 1
    //los hijos que sean etiqueta span (x y aceptar)
    $("#cookies").children("span").click(function (e) {
        e.preventDefault();

        $("#cookies").slideUp();
    });

    //EJERCICIO 2

    $("#hamburger").click(function (e) {
        e.preventDefault();

        //CONTROL DE COLA
        $("#menu-toggle").stop(true, false);
        $("#contenido").stop(true, false);
        $("#shop").stop(true, false);

        if ($("#menu-toggle").css("left") == "-320px") {

            $("#menu-toggle").animate({
                left: "0rem"
            }, "fast");//1

            $("#shop").slideUp();//2

            $("#contenido").animate({
                left: "20rem"
            }, "fast");//3
        } else {

            restablecerEstado()
        }
    });

    //4
    $("#menu-toggle").children("li").click(function (e) {
        e.preventDefault();

        //control eventos
        $(this).children("ul").stop(true, false);

        //control para el movimiento del angulo
        if ($(this).children("ul").css("display") == "none") {

            //se rota la imagen
            $(this).children("span").children("img").rotate(90)//5
        } else {

            $(this).children("span").children("img").rotate(0)//5
        }

        //ecultamos los demas
        $(this).siblings().children("ul").slideUp();

        //mostramos ese
        $(this).children("ul").slideToggle()
    });


    $(window).resize(function () {
        restablecerEstado()
    });

    //EJERCICIO 3

    //A
    $(document).scroll(function () {

        $("#promo").stop(true, false);//B

        if ($(document).scrollTop() > 70) {

            $("#promo").slideUp();//B

            $("#home-header").css({
                position: "fixed",
                opacity: 0.7,
                width: "100%"
            });
        } else {

            $("#promo").slideDown();//B

            $("#home-header").css({
                position: "relative",
                opacity: 1
            });
        }
    });

    //APARTADO C
    $("#lupa").click(function (e) {
        e.preventDefault();

        $("#searcher").stop(true, false);

        $("#searcher").slideToggle();
    });

    $("#cerrar").click(function (e) {
        e.preventDefault();

        $("#searcher").slideUp();
    });

    //EJERCICIO 4
    //A
    let contador = 0
    $("#shop").click(function (e) {

        e.preventDefault();

        contador++

        $("#shopping").stop(true, false);

        $("#shopping").slideDown("slow").delay(400).slideUp("slow");

        $("#iconos").children().children().eq(2).html(`(${contador})`);//B

    });

    //EJERCICIO 5
    $(".producto").children("ul").click(function (e) {
        e.preventDefault();


        //HIJOS DE LOS HERMANOS VUELVE A SU POSICION DE OCULTAR

        $(this).siblings("ul").children("li").eq(1).slideUp()
        $(this).siblings("ul").children("li").eq(0).children("img").rotate(0)

        //PROPIOS HIJOS
        $(this).children("li").stop(true, false);

        if ($(this).children("li").eq(1).css("display") == "none") {

            $(this).children("li").eq(0).children("img").rotate(180)

        } else {

            $(this).children("li").eq(0).children("img").rotate(0)
        }

        $(this).children("li").eq(1).slideToggle()


    });

    //EJERCICIO 6
    $("#wishlist").click(function (e) {
        e.preventDefault();

        if ($(this).children().attr("src") == "img/heart.png") {

            $(this).children().attr("src", "img/heart-full.png");
        } else {

            $(this).children().attr("src", "img/heart.png");
        }
    });

    //EJERCICIO 7

    //A
    $("#mail").focusout(function (e) {
        e.preventDefault();

        comprobarEmail();

    });

    //B
    $("input[type=submit]").click(function (e) {
        e.preventDefault();

        if (comprobarEmail()) {

            if ($("input[type=checkbox]").prop("checked")) {
                $("input[type=checkbox]").parent().siblings().css("visibility", "hidden")
            } else {
                $("input[type=checkbox]").parent().siblings().css("visibility", "visible")
            }
        }
    });

    //C
    $("input[type=submit]").hover(function () {
        // over
        $(this).animate({
            "color": "white",
            "background-color": "black"
        }, "fast");
    }, function () {
        // out
        $(this).animate({
            "color": "black",
            "background-color": "white"
        }, "slow");
    }
    );
});
//apartado 6 ejercicio 2
function restablecerEstado() {

    $("#menu-toggle").animate({
        left: "-20rem"
    }, "fast");//1

    $("#shop").slideDown();//2

    $("#contenido").animate({
        left: "0rem"
    }, "fast");//3

    //SE RESTAURA TODOS LOS SUBMENUS
    $("#menu-toggle").children("li").children("ul").slideUp();//6
    $("#menu-toggle").children("li").children("span").children("img").rotate(0)//6
}

//apartado A ejercicio 7
function comprobarEmail() {

    let correcto = false;

    if ($("#mail").val().length == 0) {
        $("#mail").next().css("visibility", "visible");
    } else {
        $("#mail").next().css("visibility", "hidden");
        correcto = true
    }

    return correcto
}