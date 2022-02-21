$(document).ready(function () {

    let SliderModule = (function (params) {

        //creamos el objeto 'slider'
        let slider = {

            //almacenamos en una prop el selector de jq del slider
            selectorJQ: $("#slider"),

            items: {

                //obtenemos el array para coger los paneles
                panels: $("#slider").find(".slider-wrapper>li")
            },

            settings: {
                duration: null
            },

            /* CONSTRUCTOR */
            init: function (settings) {

                //creamos los controles de forma dinamica
                creacionControles();

                //adjudicamos la propiedad settings y le ponemos, o valor por defecto(8000) o valor parametrizado(settings)
                this.settings = settings || { duration: 8000 }

                SliderInit();

                $("#control-buttons li").click(function () {

                    //control para que no se mueva a la foto actual
                    if (currentSlider !== $(this).index()) {
                        cambiarPanel($(this).index())
                    }
                })
            },

            startSlider: function () {

                /*VARIABLES NECESARIAS*/

                //obtenemos los paneles del slider
                var paneles = slider.items.panels

                //boton de controles para el slider
                let controles = $("#control-buttons li")

                //si llega al final del slider(o se pasa)
                if (nextSlider >= lengthSlider) {

                    //ponemos que el siguiente slider sera el del inicio y que estamos en el ultimo slider
                    nextSlider = 0
                    currentSlider = lengthSlider - 1
                }

                /*EFECTOS DE MOVIMIENTO*/

                //PARA LOS CONTROLES

                //quitamos la clase a todos los controles
                controles.removeClass("active")
                //al que veremos a continuacion, le ponemos la clase para que se coloree
                controles.eq(nextSlider).addClass("active")

                //PARA LOS PANELES

                //quitamos la que tenemos visible
                paneles.eq(currentSlider).fadeOut("slow")
                //mostramos la que se supone que hemos pinchado
                paneles.eq(nextSlider).fadeIn("slow")

                /*ACTUALIZACION DE VARIABLES*/

                //actualizamos el slider actual(movimiento hacia siguiente slider)
                currentSlider = nextSlider

                //actualizamos el valor del proximo slider
                nextSlider++
            }
        }

        //DECLARAMOS VARIABLES GLOBALES
        var SliderIntervar, currentSlider = 0, nextSlider = 1, lengthSlider = slider.items.panels.length

        /**
         * Funcion para la creacion de los controles para la posicion del slider
         * de manera dinamica
         */
        const creacionControles = () => {

            //creamos el string que seran los li controles
            let controles = ""

            //bucle iterativo para generar dinamicamente los li controles
            for (let i = 0; i < lengthSlider; i++) {

                //el primero siempre activo
                if (i == 0) {
                    controles += `<li class='active'></li>`
                } else {
                    controles += `<li>></li>`
                }
            }

            //asignamos los "puntos" al hueco de los controles 
            $("#control-buttons").html(controles)
        }

        /**
         * Metodo que actualiza la posicion del slider, cambiando el valor de las variables globales 
         * en base a un indice
         * @param {Number} indice Posicion a la que se va a mover el slider
         */
        const cambiarPanel = (indice) => {

            //limpiamos el intervalo del slider
            clearInterval(SliderIntervar)

            /*VARIABLES NECESARIAS*/

            //paneles del slider
            let paneles = slider.items.panels

            //antes de nada quitamos la animacion anterior
            paneles.stop(true, true)

            //boton de controles para el slider
            let controles = $("#control-buttons li")

            if (indice >= lengthSlider) {
                indice = 0
            } else if (indice < 0) {
                indice = lengthSlider - 1
            }

            /*EFECTOS DE MOVIMIENTO*/

            /*controles*/
            //quitamos la clase a todos los controles
            controles.removeClass("active")
            //al que hemos pulsado, le ponemos la clase para que se coloree
            controles.eq(indice).addClass("active")

            /*paneles*/
            //quitamos la que tenemos visible
            paneles.eq(currentSlider).fadeOut("slow")
            //mostramos la que se supone que hemos pinchado
            paneles.eq(indice).fadeIn("slow")

            /*variables*/
            //actualizamos el slider actual(movimiento hacia ese slider)
            currentSlider = indice
            //actualizamos el valor del proximo slider
            nextSlider = indice + 1

            //reinicializar el slider
            SliderInit()
        }

        /**
         * Funcion que instancia el intervalo que tendra en slider
         */
        const SliderInit = () => {

            //establecemos el valor de la variable
            SliderIntervar = setInterval(slider.startSlider, slider.settings.duration);
        }

        /* PARA PARAR EL INTERVALO Y QUE NO CAMBIE LA FOTO */
        $("#slider>ul>li").hover(function () {
            // over
            clearInterval(SliderIntervar)
        }, function () {
            // out
            SliderInit()
        }
        );

        /* FUNCIONALIDAD BOTONES */
        $("#boton-izquierda").click(function (e) {

            cambiarPanel(currentSlider - 1);
        });

        $("#boton-derecha").click(function (e) {

            cambiarPanel(currentSlider + 1);
        });

        return slider

    }());//() para que se ejecute automaticamente

    //llamamos al constructor
    SliderModule.init()
});