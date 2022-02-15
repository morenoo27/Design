$(document).ready(function () {

    let menuDesplegable = $("ul#menu");
    menuDesplegable.css("display", "none")

    //seleccionamos el espacio del boton hamburguesa
    $("nav#menu-principal>span").click(function (e) {
        e.preventDefault();

        //quitamos todas las animaciones
        menuDesplegable.stop(true)

        //alternamos la visivilidad con la animacion de deslizamiento hacia abajo/arriba
        menuDesplegable.slideToggle();

        //si tenemos algo abierto, accedemos a los submenus y le damos display none
        //(una vez recogido el menu padre)
        menuDesplegable.children().children("ul").css("display", "none")
    });

    //a los li(hijos) del menu desplegable cuando le hacen un click...
    menuDesplegable.children().click(function (e) {

        let submenu = $(this).children("ul")

        //quitamos todas las animaciones
        submenu.stop(true)

        //al ul de dentro hacemos que se despliegue o se recoja
        submenu.slideToggle()

        //a los submenus de los hermanos, los recogemos
        $(this).siblings().children("ul").slideUp()
    })



    //FUNCION PARA EL SCROLL
    let botonUp = $("div#volverarriba")

    $(window).scroll(function () {

        //CONTROL PARA QUE SALGA EL BOTON O NO
        if ($(this).scrollTop() > 200) {

            botonUp.fadeIn()
        } else {

            botonUp.fadeOut()
        }

        //POSICIONAMIENTO DEL HEADER
        if ($(this).scrollTop() > 0) {

            $("header#top").css({
                "position": "fixed",
                "width": "100%"
            })

            $("p#promo").slideUp()
        } else {

            $("header#top").css({
                "position": "relative",
                "width": "100%"
            })

            $("p#promo").slideDown()
        }
    });

    botonUp.click(function (e) {
        e.preventDefault()

        $("html, body").animate({ scrollTop: 0 })
    })

    $("article>a>picture").mouseenter(function () {

        console.log();
    });

    $("article>a>picture").hover(function () {

        // over
        let foto = $(this).children().attr("src")

        let composicion = foto.split(".")

        composicion[0] += "-1"

        foto = composicion[0] + "." + composicion[1]

        $(this).children().attr("src", foto)

    }, function () {
        // out
        let foto = $(this).children().attr("src")

        let composicion = foto.split("-")

        composicion[1] = ".jpg"

        foto = composicion[0] + composicion[1]

        $(this).children().attr("src", foto)
    }
    );
});