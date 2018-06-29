$(document).ready(function () {
    setDebug();

    var alto = $(window).height();
    var ancho = $(window).width();

    if (alto > ancho) {
        $("html").addClass("vr");

    }

    var controller = new ScrollMagic.Controller();

    /* Escena Inicio */
    var tweenLayoutE01 = new TimelineMax()
        .add([
            TweenMax.fromTo("#layoutE01", 0.4, { opacity: 2 }, { opacity: 0 }),
            TweenMax.fromTo("#layoutE000", 0.6, { opacity: 2 }, { opacity: 0 }),
            TweenMax.fromTo("#layoutE05", 0.7, { opacity: 2 }, { opacity: 0 }),
        ]);
    var scenelayoutE01 = new ScrollMagic.Scene({ triggerElement: "#escena_0", offset: alto * .44, duration: alto / 2 })
        .setTween(tweenLayoutE01)
        .addTo(controller);

    var tweenLayoutE02 = new TimelineMax()
        .add([
            TweenMax.fromTo("#layoutE02", 0.4, { opacity: 2 }, { opacity: 0 }),
            TweenMax.fromTo("#layoutE00", 0.6, { opacity: 2 }, { opacity: 0 }),
            TweenMax.fromTo("#layoutE06", 0.7, { opacity: 2 }, { opacity: 0 }),
        ]);
    var scenelayoutE02 = new ScrollMagic.Scene({ triggerElement: "#escena_0", offset: alto * .44, duration: alto / 2 })
        .setTween(tweenLayoutE02)
        .addTo(controller);

    var tweenLayoutE03 = new TimelineMax()
        .add([
            TweenMax.fromTo("#layoutE03", 0.3, { opacity: 2 }, { opacity: 0 }),
            TweenMax.fromTo("#layoutE07", 0.2, { opacity: 2 }, { opacity: 0 })
        ]);
    var scenelayoutE03 = new ScrollMagic.Scene({ triggerElement: "#escena_0", offset: alto * .74, duration: alto / 2 })
        .setTween(tweenLayoutE03)
        .addTo(controller);

    var tweenLayoutE04 = new TimelineMax()
        .add([
            TweenMax.fromTo("#layoutE04", 0.3, { opacity: 2 }, { opacity: 0 }),
            TweenMax.fromTo("#layoutE08", 0.2, { opacity: 2 }, { opacity: 0 }),
        ]);
    var scenelayoutE04 = new ScrollMagic.Scene({ triggerElement: "#escena_0", offset: alto * .74, duration: alto / 2 })
        .setTween(tweenLayoutE04)
        .addTo(controller);

    /* Escena Taller */
    var tweenRobot = new TimelineMax()
        .add([
            TweenMax.fromTo("#robot", 1, { x: ancho / 4 }, { x: ancho / 15 }),
            TweenMax.fromTo("#robot", 0.3, { opacity: 0 }, { opacity: 1 }),
            TweenMax.fromTo("#herramienta", 1, { x: -ancho / 4 }, { x: ancho / 15 }),
            TweenMax.fromTo("#herramienta", 0.3, { opacity: 0 }, { opacity: 1 }),
        ]);
    var sceneTweenRobot = new ScrollMagic.Scene({ triggerElement: "#escena_1", offset: alto / 4, duration: alto / 4 })
        .setTween(tweenRobot)
        .addIndicators()
        .addTo(controller);
    var scenePinRobot = new ScrollMagic.Scene({ triggerElement: "#escena_1", offset: alto / 3 })
        .setPin("#robot")
        .addTo(controller);
    var scenePinHerramienta = new ScrollMagic.Scene({ triggerElement: "#escena_1", offset: alto / 3 })
        .setPin("#herramienta")
        .addTo(controller);

    /* Escena Gas */
    var tweenLayout = new TimelineMax()
        .add([
            TweenMax.fromTo("#layout", 1, { x: -ancho / 4 }, { x: ancho / 5 }),
            TweenMax.fromTo("#layout", 0.3, { opacity: 0 }, { opacity: 1 }),
        ]);
    var sceneTweenLayout = new ScrollMagic.Scene({ triggerElement: "#escena_2 img", offset: 0, duration: alto / 5 })
        .setTween(tweenLayout)
        .addTo(controller);
    var scenePinLayout = new ScrollMagic.Scene({ triggerElement: "#escena_2", offset: alto / 3 })
        .setPin("#layout")
        .addIndicators()
        .addTo(controller);

    /* Escena Accidente */
    var tweenBD = new TimelineMax()
        .add([
            TweenMax.fromTo("#cara", 1, { x: -ancho * 10 }, { x: ancho / 5 }),
            TweenMax.fromTo("#cara", 0.3, { opacity: 0 }, { opacity: 1 }),
        ]);
    var sceneTweenBD = new ScrollMagic.Scene({ triggerElement: "#escena_3 img", offset: 0, duration: alto / 4 })
        .setTween(tweenBD)
        .addTo(controller);
    var scenePinLayout = new ScrollMagic.Scene({ triggerElement: "#escena_3", offset: alto / 3 })
        .setPin("#cara")
        .addIndicators()
        .addTo(controller);
});

/* Funciones */
function setDebug() {
    $(window).scroll(function (evento) {
        $("#debug").html($(window).scrollTop());
    });
}
