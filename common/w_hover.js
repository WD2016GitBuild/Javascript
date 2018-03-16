$.fn.w_hover = function() {
    var timer;
    var items;
    var slides = r.find(".swiper-slide");
    slides.click(function() {
    	location.href = $(this).find("a").eq(0).attr("href");
    }).hover(function() {
      clearTimeout(timer);
      var index = slides.index($(this));
      items.removeClass("show");
      var a = items.eq(index);
      if(a.length) {
      	a.addClass("show");
      }
    }, function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
      	items.removeClass("show");
      }, 3000);
    });
    items.hover(function() {
    	clearTimeout(timer);
    }, function() {
    	clearTimeout(timer);
      timer = setTimeout(function() {
      	items.removeClass("show");
      }, 3000);
    });
}