$(document).ready(function () {

    //a la imagen, si pongo el raton encima
    $(".noticia>img").hover(function () {

        //los hermanos(el texto) se muestre en bloque
        $(this).siblings().css("display", "block")
    }, function () {

        //el texto no se despliega
        $(this).siblings().css("display", "none")
    });
});