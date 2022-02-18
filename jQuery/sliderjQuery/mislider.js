$(document).ready(function () {

    let SliderModule = (function (params) {

        //creamos el objeto que sera el slider
        let slider = {}

        //almacenamos en una prop el selector de jq del slider
        slider.selectorJQ = $("#slider")

        //captamos los items del mismo slider
        slider.items = {

            panels: slider.selectorJQ.find(".slider-wrapper>li")
        }

        //DECLARAMOS VARIABLES GLOBALES
        var SliderIntervar, currentSlider = 0, nextSlider = 1, lengthSlider = slider.items.panels.length

        /* CONSTRUCTOR */
        slider.init = function (settings) {

            //creamos los controles
            creacionControles();

            //adjudicamos la propiedad settings y le ponemos, o valor por defecto(8000) o valor parametrizado(settings)
            this.settings = settings || { duration: 8000 }

            //console.log("inicializado");
            SliderInit();

            $("#control-buttons li").click(function () {

                //control para que no se mueva a la foto actual
                if (currentSlider !== $(this).index()) {
                    cambiarPanel($(this).index())
                }
            })
        }

        const creacionControles = () => {

            //creamos el string que seran los li controles
            let controles = ""

            //bucle iterativo para generar dinamicamente los li controles
            for (let i = 0; i < lengthSlider; i++) {

                //el primero siempre activo
                if (i == 0) {
                    controles += "<li class='active'></li>"
                } else {
                    controles += "<li></li>"
                }
            }

            //asignamos los "puntos" al hueco de los controles 
            $("#control-buttons").html(controles)
        }

        const cambiarPanel = (indice) => {

            //limpiamos el intervalo del slider
            clearInterval(SliderIntervar)

            /*VARIABLES NECESARIAS*/

            //paneles del slider
            let paneles = slider.items.panels

            //boton de controles para el slider
            let controles = $("#control-buttons li")

            if (indice >= lengthSlider) {
                indice = 0
            } else if (indice < 0) {
                indice = lengthSlider - 1
            }

            /*EFECTOS DE MOVIMIENTO*/

            //PARA LOS CONTROLES

            //quitamos la clase a todos los controles
            controles.removeClass("active")
            //al que hemos pulsado, le ponemos la clase para que se coloree
            controles.eq(indice).addClass("active")

            //PARA LOS PANELES

            //quitamos la que tenemos visible
            paneles.eq(currentSlider).fadeOut("slow")
            //mostramos la que se supone que hemos pinchado
            paneles.eq(indice).fadeIn("slow")

            //ACTUALIZACION DE VARIABLES

            //actualizamos el slider actual(movimiento hacia ese slider)
            currentSlider = indice
            //actualizamos el valor del proximo slider
            nextSlider = indice + 1

            //reinicializar el slider
            SliderInit()

        }


        const SliderInit = () => {

            //establecemos el valor de la variable
            SliderIntervar = setInterval(slider.startSlider, slider.settings.duration);
        }

        slider.startSlider = function () {

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

        let anteriorSlider = SliderIntervar

        let contador = 0

        slider.items.panels.hover(function () {
            // over

        }, function () {
            // out

        }
        );

        return slider

    }());//() para que se ejecute automaticamente

    //llamamos al constructor
    SliderModule.init()
});