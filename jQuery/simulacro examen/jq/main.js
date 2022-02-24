$(document).ready(function () {

    console.log($("#hamburger").children("span.line-ham"));
    console.log($("#hamburger").children("span.line-ham").eq(9));

    //2.A
    $("#chat").fadeIn()
    $("#barra-social").fadeIn()

    $("#hamburger").click(function (e) {
        e.preventDefault();

        //CONTROL DE ANIMACIONES
        $("#menu-toggle").stop(true, false);


        if ($("#menu-toggle").css("display") == "none") {

            $(this).children("span.line-ham").animate({ "background-color": "red" }, "fast");//1.C
            $(this).children("span.line-ham").eq(1).animate({ "width": "1.87rem" });//1.B

        } else {
            //1.D
            $(this).children("span.line-ham").animate({ "background-color": "black" }, "fast");
            $(this).children("span.line-ham").eq(1).animate({ "width": "1.37rem" });
        }

        //1.A
        $("#menu-toggle").slideToggle();

    });

    //1.E
    $("#menu-toggle").children().eq(2).click(function (e) {
        e.preventDefault();

        if ($(this).children("ul").css("display") == "none") {

            $(this).children("span").html("-")
            $(this).children("ul").fadeIn();
            $(this).children("ul").animate({ left: "0vw" }, "swin");
        } else {

            $(this).children("span").html("+")
            $(this).children("ul").fadeOut();
            $(this).children("ul").animate({ left: "-50vw" }, "swin");
        }

    });

    //1.F
    $(window).resize(function () {

        $("span.line-ham").removeAttr("style");
        $("#menu-toggle").removeAttr("style");
        $("#menu-toggle").children("ul").removeAttr("style");
        $("#menu-toggle").children("span").removeAttr("style");
    });

    //2.C
    $("#header-chat1").click(function (e) {
        e.preventDefault();

        $(this).fadeOut()

        $(this).siblings().slideToggle()
    });

    //2.D
    $("#header-chat2>span").click(function (e) {
        e.preventDefault();

        $("#header-chat1").siblings().slideToggle()
        $("#header-chat1").fadeIn()
    });

    //4.B
    $("input").focusout(function (e) {
        e.preventDefault();

        if ($(this).prop("required")) {

            if ($(this).val() == '') {

                $(this).next().css("visibility", "visible");
            } else {

                $(this).next().css("visibility", "hidden");
            }
        }
    });

    //4.C
    $("textarea").keypress(function (e) {

        $("#info-caracteres").html(`Dispone de ${100 - $(this).val().length} caracteres`);
    }).keyup(function (e) {

        $("#info-caracteres").html(`Dispone de ${100 - $(this).val().length} caracteres`);//para cuando borra
    });


    //5.A

});