$(document).foundation();

$(document).ready(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        scrollOverflow: true,
        sectionsColor: ['tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet'],
        anchors: ['inicio', 'sobremi', 'tecnologias', 'proyectos', 'articulos', 'redes'],

        afterLoad: function (origin, destination, direction) {
            switch (destination.index) {
                case 0:
                    document.getElementById('menu-top').style.background = 'rgba(255, 99, 71, 0.7)';
                    break;
                case 1:
                    document.getElementById('menu-top').style.background = 'rgba(255, 165, 0, 0.7)';
                    break;
                case 2:
                    document.getElementById('menu-top').style.background = 'rgba(30, 144, 255, 0.7)';
                    break;
                case 3:
                    document.getElementById('menu-top').style.background = 'rgba(60, 179, 113, 0.7)';
                    break;
                case 4:
                    document.getElementById('menu-top').style.background = 'rgba(106, 90, 205, 0.7)';
                    break;
                case 5:
                    document.getElementById('menu-top').style.background = 'rgba(238, 130, 238, 0.7)';
                    break;
            }
        }
    });
    fullpage_api.setAllowScrolling(true);
});

$('.off-canvas a').on('click', function () {
    $('.off-canvas').foundation('close');
});