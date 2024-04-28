// script.js

function copyWeChat(id) {
  const el = document.createElement('input');
  el.value = id;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert(
    document.documentElement.lang === 'jp'
      ? 'IDをコピーしました'
      : '微信号已复制',
  );
}

$(window).on('load', function () {
  // 初始化分类插件
  if ($.fn.imagesLoaded) {
    $('.alime-portfolio').imagesLoaded(function () {
      var $grid = $('.alime-portfolio').isotope({
        itemSelector: '.single_gallery_item',
        percentPosition: true,
        masonry: {
          columnWidth: '.single_gallery_item',
        },
      });

      // 绑定分类按钮点击事件
      $('.portfolio-menu button').on('click', function () {
        $('.portfolio-menu button').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
    });
  }
});
