$(document).ready(function () {

    $(document).keypress(function (e) {
        e.preventDefault();

        //filtro si es una d
        if (String.fromCharCode(e.which) == "d") {

            //a los h3, intercambio el display con toggle
            $(".noticia>h3").toggle()
        }
    });
});