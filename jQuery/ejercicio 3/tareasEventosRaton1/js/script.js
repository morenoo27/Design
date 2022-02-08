$(document).ready(function () {

    //a los hijos de la lista (li) cuando ocurre hover
    $("#lista").children().hover(function () {
        //le añadimos la clase raton-encimas
        $(this).toggleClass("raton-encima")
    })
});