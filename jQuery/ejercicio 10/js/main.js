$(document).ready(function () {

    //quitamos el texto
    $("div.texto").css("display", "none");

    //seleccionamos el div del +
    $("main>article>div>section>div>div").click(function (e) {
        e.preventDefault();

        //si se ve el texto
        if ($(this).parent().siblings().css("display") == "flex") {
            //el texto (padre y hermano => tio) se oculta
            $(this).parent().siblings().fadeOut();
            //el menos se convierte en mas rotando el vector vertical a su pos inicial
            $(this).children().last("svg").children().css("transform", "rotate(0deg)")
        } else {
            //el texto (padre y hermano => tio) se muestra
            $(this).parent().siblings().fadeIn();
            //el mas se convierte en menos rotando el vector vertical a horizontal
            $(this).children().last("svg").children().css("transform", "rotate(90deg)")
        }
    });
});