$(function () {
    $(document).on('click', 'button[type="button"]', function (event) {
        var id = this.id;
        switch (id) {
            case 'modal1':
                $(".modal-header").html(
                    '<h5 class="modal-title" id="exampleModalLabel">Rock black and Green</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    ' <span aria-hidden="true">&times;</span> </button>');
                $('#img-modal').html('<img src="assets/img/plantillas/rock.png" alt="">');
                break;
            case 'modal2':
                $(".modal-header").html(
                    '<h5 class="modal-title" id="exampleModalLabel">Tacos magic</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span> </button>');
                $('#img-modal').html('<img src="assets/img/plantillas/template-tacos.png" alt="">');
                break;
            case 'modal3':
                $(".modal-header").html(
                    '<h5 class="modal-title" id="exampleModalLabel">TED developers</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span> </button>');
                $('#img-modal').html('<img src="assets/img/plantillas/template-ted.png" alt="">');
                break;
            case 'modal4':
                $(".modal-header").html(
                    '<h5 class="modal-title" id="exampleModalLabel">Refrigeration blueSky</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span> </button>');
                $('#img-modal').html('<img src="assets/img/plantillas/template-tacos.png" alt="">');
                break;
            default:
                break;
        }
    });
});
