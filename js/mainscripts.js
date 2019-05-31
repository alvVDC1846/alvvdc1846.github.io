/* This file is part of ALVVDC1846 Portfolio.

ALVVDC1846 Portfolio is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

ALVVDC1846 Portfolio is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with ALVVDC1846 Portfolio.  If not, see <https://www.gnu.org/licenses/>. */

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