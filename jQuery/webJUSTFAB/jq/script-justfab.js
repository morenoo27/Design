$(document).ready(function () {

    let menuDesplegable = $("ul#menu");
    menuDesplegable.css("display", "none")

    //seleccionamos el espacio del boton hamburguesa
    $("nav#menu-principal>span").click(function (e) {
        e.preventDefault();

        //alternamos la visivilidad con la animacion de deslizamiento hacia abajo/arriba
        menuDesplegable.slideToggle();
    });

    //a los li(hijos) del menu desplegable cuando le hacen un click...
    menuDesplegable.children().click(function (e) {

        //al ul de dentro hacemos que se despliegue o se recoja
        $(this).children("ul").slideToggle()

        $(this).children("span").children().css("transform", "rotate(90deg)")
    })
});