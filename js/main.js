(function ($) {
  'use strict';

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $('.navbar').removeClass('navbar-dark');
      $('.navbar').addClass('navbar-light sticky-top shadow-sm');
    } else {
      $('.navbar').removeClass('navbar-light sticky-top shadow-sm');
      $('.navbar').addClass('navbar-dark');
    }
  });

  // Smooth scrolling on the navbar links
  $('.navbar-nav a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      $('html, body').animate(
        {
          scrollTop: $(this.hash).offset().top - 60,
        },
        1500,
        'easeInOutExpo'
      );
    }
  });

  $('body').on('click', function (event) {
    $('.navbar-collapse').removeClass('show');
  });
})(jQuery);
