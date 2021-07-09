(function($) {
  // animation on scroll
  function aos_init() {
    AOS.init({
      duration: 1000,
    });
  }

  $(window).on('load',
    function() {
      aos_init();
    });

})(jQuery);
