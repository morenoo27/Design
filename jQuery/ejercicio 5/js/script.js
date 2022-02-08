$(document).ready(function () {

    $("form>p").children("input").focus(function (e) {
        e.preventDefault();

        let input = $(this);

        input.css("background", "palegoldenrod")
        input.css("color", "red")

        console.log($(this));
    });



    $("form>p").children("input").blur(function (e) {
        e.preventDefault();

        $(this).css("background", "white")
        $(this).css("color", "black")
    });
});