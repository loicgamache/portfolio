/**
 * Created by Loic on 10/12/2017.
 */

$(document).ready(function () {


    // $('.open-popup-link').magnificPopup({
    //     type: 'inline',
    //     midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    // });

    $('#nav-icon2').click(function(){
        $('#menu, #nav-icon2').toggleClass('open');
    });
});

document.querySelector("header .hamburger").addEventListener('click', function() {
    this.classList.toggle("close");
    document.querySelector("header .menu").classList.toggle("open");
});

document.querySelectorAll('.projetsContainer .projet .projetLink').forEach(item => {
    item.addEventListener('click', () => {
        item.parentNode.querySelector(".popinContainer").classList.add("open");
    });
});

document.querySelectorAll(".projetsContainer .projet .popinContainer").forEach(item => {
    item.addEventListener('click', e => {
        if (e.target === item || e.target === item.querySelector(".close")) {
            item.classList.remove("open");
        }
    });
});