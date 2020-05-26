(function ($) {
    // USE STRICT
    "use strict";

    $(document).ready(function() {


        

        $('.js-addwish-b2').on('click', function(e){
        e.preventDefault();
        });
        $('.gallery-lb').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled:true
            },
            mainClass: 'mfp-fade'
        });
    });


  });
       
})(jQuery);