$(document).ready(function(){
    console.log("document ready::::");
    // var $item = $('.icons');
    mouseEnterHandler = function(event){
        $(this).find('.overlay,.overlayLegal').fadeIn(500).show();
        $('.icons').not(this).fadeOut(500).hide().stop(true, true);

    };
    mouseLeaveHandler = function(event){
        $(this).find('.overlay,.overlayLegal').fadeOut(500).hide().stop(true, true);
        $('.icons').not(this).fadeIn(500).show();
    };
        
    $('body')
        .delegate('.icons','mouseenter', mouseEnterHandler)
        .delegate('.icons','mouseleave', mouseLeaveHandler);

    // function() {
    //     $(window).bind('scroll',function()
    //     {
    //         console.log('window bind scroll:::::');
    //         if($(window).scrollTop() >= $('.layoutBodyNarrowAreaInnerFloatWrap').offset().top){
    //             $('.container').fadeIn().show();
    //             console.log('fade in container:::::');
    //             //$('.itinerary-wrap.box').css({'margin-top':'fixed', 'left': floatingContentLeft.toString()+'px'});

    //         } else {
    //             $('.container').fadeOut().hide();
    //             // $('.itinerary-wrap.box').removeAttr('style');
    //             // $('.itinerary-wrap.box').css({'position':'absolute','top':'0px','right':'0px'});
    //         }
    //     });
    // }
});