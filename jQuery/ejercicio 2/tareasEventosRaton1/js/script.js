$(document).ready(function () {

    //a la imagen, si le hago click
    $(".noticia>img").click(function () {

        //los hermanos(el texto) se muestre en bloque
        $(this).siblings().css("display", "block")
    });

    //si es doble click
    $(".noticia>img").dblclick(function () {

        //el texto no se despliega
        $(this).siblings().css("display", "none")
    });
});