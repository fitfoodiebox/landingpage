var modalTrigger = $('.cta'),
    modalEl = $('.modal'),
    modalPop = $('modal-popup');

modalTrigger.on('click', function() {
    modalEl.addClass('-show');
});

modalEl.on('click', function(event) {
    var target = $(event.target);

    if ( target.hasClass('-show') ) {
        modalEl.removeClass('-show');
    }
});
