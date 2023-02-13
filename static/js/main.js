$(function () {
  // 手机端导航栏切换显示隐藏
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


  $(".totop").click(function () { $("html,body").animate({ scrollTop: 0 }, 500); });
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 200) {
      $('.totop').addClass('is-active')
    } else {
      $('.totop').removeClass('is-active')
    }
  });

  $(document).ready(function () {
    if (window.location.pathname == "/") {
      $("#navi li:eq(0) a").addClass("active");
    }
    a = window.location;
    $("#navi li a").each(function () {
      b = String($(this).attr("href")).replace("/", "");
      if (String(a).indexOf(b) > 0) {
        $(this).closest("li a").addClass("active");
      }
    });
  });

  // Artalk
  $('.atk-main-editor>.atk-bottom').after($('.atk-main-editor>.atk-plug-panel-wrap'))
  
})
