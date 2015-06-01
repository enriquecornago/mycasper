(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        function casperFullImg() {
            $("img").each( function() {
                var contentWidth = $(".post-content").outerWidth(); // Width of the content
                var imageWidth = $(this)[0].naturalWidth; // Original image resolution

                if (imageWidth >= contentWidth) {
                    $(this).addClass('full-img');
                } else {
                    $(this).removeClass('full-img');
                }
            });
        };

        casperFullImg();
        $(window).smartresize(casperFullImg);

    });

}(jQuery));

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

(function ($) {
    "use strict";

    $(document).ready(function(){

        var headerText = $('.header-text'),
            headerHeight = $('.site-head').height(),
            mainContainer = $('.content');

		function setOpacity() {
          var conOffset = mainContainer.offset().top - $(window).scrollTop();       
          headerText.css('opacity', (conOffset / headerHeight));
		}

		setOpacity();
        $(window).scroll(setOpacity);

    });

}(jQuery));

/*TEMPORARILY DISABLING FLUIDBOX AS IT HAS UPSET THE REST OF THE PICTURES IN THE BLOG
if($("#main").hasClass("content")){
    $.getScript(siteurl+"/assets/js/helper/jquery.fluidbox.min.js", function() {
        $.getScript(siteurl+"/assets/js/helper/imagesloaded.pkgd.min.js", function() {
            function lightBox(){
                $('.content a').filter(function() {
                    return $(this).attr('href').match(/\.(jpeg|jpg|png|gif)/i);
                }).fluidbox({
                        closeTrigger: [
                            { selector: '#fluidbox-overlay', event: 'click'         },
                            { selector: 'window',            event: 'resize scroll' }
                        ]
                });
            }
            $("#main").imagesLoaded(lightBox);
        });
    });
}
*/