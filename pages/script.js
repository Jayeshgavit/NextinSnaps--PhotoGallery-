
$(document).ready(function(){

$('.buttons').click(function(){

    $(this).addClass('active').siblings().removeClass('active');

    var filter = $(this).attr('data-filter')

    if(filter == 'all'){
        $('.image').show(400);
    }else{
        $('.image').not('.'+filter).hide(200);
        $('.image').filter('.'+filter).show(400);
    }

});

$('.gallery').magnificPopup({

    delegate:'a',
    type:'image',
    gallery:{
        enabled:true
    },
    callbacks: {
        buildControls: function() {
            this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
        },
        change: function() {
            var currItem = this.currItem;
            this.content.find('.mfp-title').remove();
            $('<button class="mfp-download"><i class="fas fa-download"></i></button>').appendTo(this.contentContainer).on('click', function() {
                var link = document.createElement('a');
                link.href = currItem.src;
                link.download = 'image.jpg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
    }

});

});


