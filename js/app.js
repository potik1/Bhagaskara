$(function() {

  //fixed nav

  var body = $('html, body');
  var nav = $('nav');
  var menu = $('.navbar');
  var positionTop = menu.offset().top;

  function setSticky() {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > positionTop) {
      menu.addClass('sticky');
    }
    else {
      menu.removeClass('sticky');
    }
  }

  $(window).on('scroll', function() {

    setSticky();

  });

  //progress bar

  var hr1 = $('.hr1');

  $(window).on('scroll', function() {
    hr1.each(function() {

      var width = $(this).data('width');
      var span = $(this).find('span');

      $(span).addClass('color').animate({width: width}, 5000);
    });
  });

  //gallery with filter

  var all = $('#all');
  var web = $('#web');
  var icons = $('#icons');
  var apps = $('#apps');
  var labels=$('.figure-caption').find('p');



  web.on('click', function() {

    labels.each(function() {

      var tagText = $(this).text();

      var web1='web';

     if (tagText.indexOf(web1)>=0) {

        $(this).parent().parent().css("display", "block");
      }
      else {
        $(this).parent().parent().css("display", "none");
      }
    });

  });

  icons.on('click', function() {

    labels.each(function() {

      var tagText = $(this).text();

      var icons1='icons';

      if (tagText.indexOf(icons1)>=0) {

        $(this).parent().parent().css("display", "block");
      }
      else {
        $(this).parent().parent().css("display", "none");
      }
    });
  });

  apps.on('click', function() {

    labels.each(function() {

      var tagText = $(this).text();

      var apps1='apps';

      if (tagText.indexOf(apps1)>=0) {

        $(this).parent().parent().css("display", "block");
      }

      else {
        $(this).parent().parent().css("display", "none");
      }
    });
  });

  all.on('click', function() {

    labels.each(function() {

      $(this).parent().parent().css('display', 'block');
    });
  });


  //menu ruchome

  $('a[href^="#"]').on('click', function(e) {

    var target = $(this.getAttribute('href'));
    if( target.length ) {
      e.preventDefault();
      body.stop().animate({scrollTop: target.offset().top}, 2000);
    }
  });

  //scroller

  var scroller = $('#scroller');

  scroller.on('click', function(e){
    e.preventDefault();
    body.stop().animate({scrollTop: menu.offset().top}, 2000, "swing");

  });

});