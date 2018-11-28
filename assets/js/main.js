$(document).ready(main);

var contador = 1;

// Mostramos y ocultamos barra de menu

function main (){
    $('.menu-bar').click(function () { 
        if (contador == 1) {
            $('nav').animate({ left: '0' });

            contador = 0;
        } else{
            contador = 1;
            $('nav').animate({ left: '-100%' });
        }
        
    });

    // Mostramos y ocultamos submenus

    $('.submenu').click(function () { 
        $(this).children('.children').slideToggle();
        
    });
}

// efecto parallax

// $(document).ready(function(){
//     $(window).scroll(function () { 
//         var barra = $(window).scrollTop();
//         var posicion = barra * 0.10;

//         $('body').css({
//             'background-position':'0 -' + posicion +'px'
//         });
//     });
// });