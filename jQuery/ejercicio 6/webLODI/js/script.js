$(document).ready(function () {

    $(document).scroll(function () {

        $("header").css("position", "fixed").css("opacity", "0.5");
    });

    $(window).resize(function () {
        $("ul#menu").css("display", "none");
    });
});