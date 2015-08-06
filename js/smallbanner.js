$(document).ready(function () {
    mouseEnterHandler = function (event) {
        var findOverlay = "#overlay" + this.id;
        $(this).find(findOverlay).fadeIn(500).show();
        $(this).find('.overlayLegal').fadeIn(500).show();
        $('.icons').not(this).fadeOut(500).hide().stop(true, true);
        
    };
    mouseLeaveHandler = function (event) {
      var findOverlay = "#overlay" + this.id;
        $(this).find(findOverlay).fadeOut(500).hide().stop(true, true);
        $(this).find('.overlayLegal').fadeOut(500).hide().stop(true, true);
        $('.icons').not(this).fadeIn(500).show();
    };

    $('body')
        .delegate('.icons', 'mouseenter', mouseEnterHandler)
        .delegate('.icons', 'mouseleave', mouseLeaveHandler);
});