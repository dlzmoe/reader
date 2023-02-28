$(function () {
  $('.menu-btn').click(function () {
    $("header .sticky").slideToggle();
    $('.opacity').toggle();
  })

  $('.opacity').click(function () {
    $("header .sticky").slideToggle();
    $('.opacity').toggle();
  })

  $('.post-content a').attr('target', '_blank');
  $('#TableOfContents a').attr('target', '')
  $('.post-content img').addClass('slb');
  $('.slb').simplebox({
    fadeSpeed: 100
  });

  $('iframe').wrap('<p class="iframe"></p>')

  $(document).ready(function () {
    if (window.location.pathname == "/") {
      $(".nav a:eq(0)").addClass("active");
    }
    a = window.location;
    $(".nav a").each(function () {
      b = String($(this).attr("href")).replace("/", "");
      if (String(a).indexOf(b) > 0) {
        $(this).closest("a").addClass("active");
      }
    });
  });

  $('.atk-main-editor>.atk-bottom').after($('.atk-main-editor>.atk-plug-panel-wrap'))
  
})
