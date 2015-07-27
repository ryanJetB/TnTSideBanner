   //flyFiStyle
    $("#flyFiIcon").hover(function () {
    $(".overlayFlyFi").fadeIn(500)
    $("#smileyIcon,#legRoomIcon,#snacksIcon,#awardIcon").fadeOut(500)
}, function () {
    $(".overlayFlyFi").fadeOut(500).stop( true, true )
    $("#smileyIcon,#legRoomIcon,#snacksIcon,#awardIcon").fadeIn(500).stop( true, true )
});

$("#smileyIcon").hover(function () {
    $(".overlaySmiley").fadeIn(500)
    $("#flyFiIcon,#legRoomIcon,#snacksIcon,#awardIcon").fadeOut(500)
}, function () {
    $(".overlaySmiley").fadeOut(500).stop( true, true )
    $("#flyFiIcon,#legRoomIcon,#snacksIcon,#awardIcon").fadeIn(500).fadeIn(500).stop( true, true )
});

$("#legRoomIcon").hover(function () {
    $(".overlayLegRoom").fadeIn(500)
    $("#flyFiIcon,#smileyIcon,#snacksIcon,#awardIcon").fadeOut(500)
}, function () {
    $(".overlayLegRoom").stop( true, true ).fadeOut(500)
    $("#flyFiIcon,#smileyIcon,#snacksIcon,#awardIcon").fadeIn(500).stop( true, true )
});


$("#snacksIcon").hover(function () {
    $(".overlaySnacks").fadeIn(500)
    $("#flyFiIcon,#smileyIcon,#legRoomIcon,#awardIcon").fadeOut(500)
}, function () {
    $(".overlaySnacks").stop( true, true ).fadeOut(500)
    $("#flyFiIcon,#smileyIcon,#legRoomIcon,#awardIcon").fadeIn(500).stop( true, true )
});


$("#awardIcon").hover(function () {
    $(".overlayAward").fadeIn(500).css({
        "display": "block"
    });
    $("#flyFiIcon,#smileyIcon,#snacksIcon,#legRoomIcon").fadeOut(500)
}, function () {
    $(".overlayAward").stop( true, true ).fadeOut(500)
    $("#flyFiIcon,#smileyIcon,#snacksIcon,#legRoomIcon").fadeIn(500).stop( true, true )
});

