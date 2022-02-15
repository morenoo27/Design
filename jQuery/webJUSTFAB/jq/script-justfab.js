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

        //control de visibilidad
        if (submenu.css("display") == "none") {

            //el submenu lo desplegamos
            submenu.slideDown();

            //a los demas que esten desplegados los plegamos
            $(this).siblings().children("ul").slideUp();

            //cambio de clase
            $(this).find("i").attr("class", "fa fa-angle-up");
        } else {

            //pliegue
            submenu.slideUp();

            //cambio de clase
            $(this).find("i").attr("class", "fa fa-angle-down");
        }
    })



    //FUNCION PARA EL SCROLL
    let botonUp = $("div#volverarriba")

    $(window).scroll(function () {

        //CONTROL PARA QUE SALGA EL BOTON O NO
        if ($(this).scrollTop() > 200) {

            //aparece
            botonUp.fadeIn()

            //menus se pliegan
            $("nav#menu-principal > ul#menu").slideUp()
            $("ul#menu > li").children("ul").slideUp()

        } else {

            //desaparece
            botonUp.fadeOut()
        }

        //POSICIONAMIENTO DEL HEADER
        if ($(this).scrollTop() > 0) {

            //posicionamiento
            $("header#top").css({
                "position": "fixed",
                "width": "100%"
            })

            //ocultamos el panel de promos
            $("p#promo").slideUp()
        } else {

            //posicionamiento
            $("header#top").css({
                "position": "relative",
                "width": "100%"
            })

            //mostramos el panel
            $("p#promo").slideDown()
        }
    });

    botonUp.click(function (e) {
        e.preventDefault()

        //scroleamos hacia el inicio de la pagina
        $("html, body").animate({ scrollTop: 0 })
    })

    $("article>a>picture").hover(function () {

        // over

        //obtenemos el src
        let foto = $(this).children().attr("src")

        //lo dividimos por el .
        let composicion = foto.split(".")

        //al nombre le ponemos "-1"
        composicion[0] += "-1"

        //volvemos a construir el nombre del src
        foto = composicion[0] + "." + composicion[1]

        //adjudicamos el src
        $(this).children().attr("src", foto)

    }, function () {
        // out

        //REVERSA
        let foto = $(this).children().attr("src")

        let composicion = foto.split("-")

        composicion[1] = ".jpg"

        foto = composicion[0] + composicion[1]

        $(this).children().attr("src", foto)
    }
    );
});