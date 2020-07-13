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

// slateblue

$(document).foundation();

const sectionsColor = [
    'tomato', 
    'orange', 
    'dodgerblue',

    'mediumseagreen', 
    '#d58f60', 
    'violet'
]

const menuColors = [
    'rgba(255, 99, 71, 0.7)',
    'rgba(255, 165, 0, 0.7)',
    'rgba(30, 144, 255, 0.7)',

    'rgba(60, 179, 113, 0.7)',
    'rgba(213, 143, 96, 0.7)',
    'rgba(238, 130, 238, 0.7)'
]

$(document).ready(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        scrollOverflow: true,
        sectionsColor: ['tomato', 'orange', 'dodgerblue', 'mediumseagreen', '#d58f60', 'violet'],
        anchors: ['inicio', 'sobremi', 'tecnologias', 'proyectos', 'articulos', 'redes'],

        afterLoad: function (origin, destination, direction) {
            setMenuTopBackground(menuColors[destination.index])
        }
    });
    fullpage_api.setAllowScrolling(true);
});

const setMenuTopBackground = (string) => document.getElementById('menu-top').style.background = string

$('.off-canvas a').on('click', function () {
    $('.off-canvas').foundation('close');
});