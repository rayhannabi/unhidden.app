$(window).scroll(function(e)
  {
    var offsetRange = $(window).height() / 3,
        offsetTop = $(window).scrollTop() + offsetRange + $("#video_header").outerHeight(true),
        offsetBottom = offsetTop + offsetRange;

    $("#demo").each(function () { 
      var y1 = $(this).offset().top;
      var y2 = offsetTop;
      if (y1 + $(this).outerHeight(true) < y2 || y1 > offsetBottom) {
        this.pause(); 
      } else {
        this.play();
      }
    });
});

