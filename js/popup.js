   //flyFiStyle
    $("#flyFiIcon").hover(function () {
    $(".overlayFlyFi").fadeIn(500).css({
        "display": "block"
    });
    $("#smileyIcon,#legRoomIcon,#snacksIcon,#awardIcon").fadeOut(500).css({
        "display": "none"
    });
}, function () {
    $(".overlayFlyFi").fadeOut(500).stop( true, true ).css({
        "display": "none"
    });
    $("#smileyIcon,#legRoomIcon,#snacksIcon,#awardIcon").fadeIn(500).stop( true, true ).css({
        "display": "block"
    });
});

$("#smileyIcon").hover(function () {
    $(".overlaySmiley").fadeIn(500).css({
        "display": "block"
    });
    $("#flyFiIcon,#legRoomIcon,#snacksIcon,#awardIcon").fadeOut(500).css({
        "display": "none"
    });
}, function () {
    $(".overlaySmiley").fadeOut(500).stop( true, true ).css({
        "display": "none"
    });
    $("#flyFiIcon,#legRoomIcon,#snacksIcon,#awardIcon").fadeIn(500).fadeIn(500).stop( true, true ).css({
        "display": "block"
    });
});

$("#legRoomIcon").hover(function () {
    $(".overlayLegRoom").fadeIn(500).css({
        "display": "block"
    });
    $("#flyFiIcon,#smileyIcon,#snacksIcon,#awardIcon").fadeOut(500).css({
        "display": "none"
    });
}, function () {
    $(".overlayLegRoom").stop( true, true ).fadeOut(500).css({
        "display": "none"
    });
    $("#flyFiIcon,#smileyIcon,#snacksIcon,#awardIcon").fadeIn(500).stop( true, true ).css({
        "display": "block"
    });
});


$("#snacksIcon").hover(function () {
    $(".overlaySnacks").fadeIn(500).wrap().css({
        "display": "block"
    });
    $("#flyFiIcon,#smileyIcon,#legRoomIcon,#awardIcon").fadeOut(500).css({
        "display": "none"
    });
}, function () {
    $(".overlaySnacks").stop( true, true ).fadeOut(500).css({
        "display": "none"
    });
    $("#flyFiIcon,#smileyIcon,#legRoomIcon,#awardIcon").fadeIn(500).stop( true, true ).css({
        "display": "block"
    });
});


$("#awardIcon").hover(function () {
    $(".overlayAward").fadeIn(500).css({
        "display": "block"
    });
    $("#flyFiIcon,#smileyIcon,#snacksIcon,#legRoomIcon").fadeOut(500).css({
        "display": "none"
    });
}, function () {
    $(".overlayAward").stop( true, true ).fadeOut(500).css({
        "display": "none"
    });
    $("#flyFiIcon,#smileyIcon,#snacksIcon,#legRoomIcon").fadeIn(500).stop( true, true ).css({
        "display": "block"
    });
});

