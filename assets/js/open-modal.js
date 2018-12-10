$(function () {
    $(document).on('click', 'button[type="button"]', function (event) {
        var id = this.id;
        switch (id) {
            case 'modal1':
                $(".modal-header").html(
                    '<h3 class="modal-title" id="exampleModalLabel">Rock black and Green</h3>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    ' <span aria-hidden="true">&times;</span> </button>');
                $('#img-modal').html('<img src="assets/img/plantillas/rock.png" alt="">');

                $('#desc-modal').html('<h4>Descripcion de la plantilla</h4>' +
                    '<p></p>');
                break;
            case 'modal2':
                $(".modal-header").html(
                    '<h3 class="modal-title" id="exampleModalLabel">Tacos magic</h3>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span> </button>');

                $('#img-modal').html('<img src="assets/img/plantillas/template-tacos.png" alt="">');

                $('#desc-modal').html('<h4>Promociona tu servicios y tus mejores platillos </h4>' +
                    '<p>Con esta plantilla genera nuevos comensales potenciales ' +
                    ', Atraves de imagenes de tus platillos, cuentales la historia y calidad de tus productos,' +
                    ' ofrece servicio a domicilio e indica tu ubicacion atraves de google maps' +
                    '</p>');
                break;
            case 'modal3':
                $(".modal-header").html(
                    '<h3 class="modal-title" id="exampleModalLabel">TED developers</h3>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span> </button>');
                $('#img-modal').html('<img src="assets/img/plantillas/template-ted.png" alt="">');

                $('#desc-modal').html('<h4>Pagina Generada por TED</h4>' +
                    '<p>Plantilla llamativa que ofrece un contacto con clientes potenciales' +
                    ' atraves de tu correo electronico, describe que ofreces y que te hace diferente a los demas' +
                    ' promociona a tu equipo de trabajo, ademas de mostrar que cuentas con los mejores</p>');
                break;
            case 'modal4':
                $(".modal-header").html(
                    '<h3 class="modal-title" id="exampleModalLabel">Refrigeration blueSky</h3>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span> </button>');
                $('#img-modal').html('<img src="assets/img/plantillas/template-mp.png" alt="">');
                $('#desc-modal').html('<h4>Climatiza tus ideas</h4>' +
                    '<p>Pagina donde se ofrece el servicio profesional de la instalacion y reparacion' +
                    ' de aires acondicionados, esta pagina ofrece animaciones en las imagenes que hace que'+
                    ' al cliente le sea mas llamativa brindandole una mejor presentacion de su marca.</p>');
                break;
            default:
                break;
        }
    });
});