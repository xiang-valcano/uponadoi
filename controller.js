// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

var $animation_elements = $('.animation-element');
var $window = $(window);
var bg = $('#background');
if (!isSafari && !isFirefox) bg.css('transition', 'transform 0.1s')
var feeth = $('#step');
var leftStep = $('#left');
var rightStep = $('#right');
if (!isFirefox && !isChrome && $window.width() >= 600) {
    leftStep.css('transition', 'transform 0.05s ease-out');
    rightStep.css('transition', 'transform 0.05s ease-out');
}
var buttons = [
    { id: '#button1', active: false, toggleItem: '#msg3' },
    { id: '#button2', active: false, toggleItem: '#msg4' },
    { id: '#button3', active: false, toggleItem: '#msg5' },
    { id: '#button4', active: false, toggleItem: '#msg6' },
    { id: '#button5', active: false, toggleItem: '#msg9' }
]
var scrollPos = [5000, 10000, 15000, 17500]

var controller = function () {
    var scrollY = $(window).scrollTop();
    var height = bg.height() - $window.height();
    var width = bg.width() - $window.width();
    leftStep.css('transform', 'translateY(' + (((scrollY + 150) % 300 / 3) * $window.height() * 0.001) + 'px)')
    rightStep.css('transform', 'translateY(' + ((scrollY % 300 / 3) * $window.height() * 0.001) + 'px)')
    if (scrollY < scrollPos[0]) {
        var percentX = ((scrollY * bg.width() / scrollPos[0]));
        var x = ((bg.width() * 0.18) - ($window.width() / 2)) + percentX * 0.65;
        var y = (bg.height() * 0.834) - ($window.height() / 2);
        bg.css('transform', 'translate(' + (x * -1) + 'px, ' + (y * -1) + 'px)')
        feeth.css('transform', 'rotate(90deg)')
        if (scrollY > (scrollPos[0] * 0.053) && scrollY < (scrollPos[0] * 0.2075)) $('#msg1').addClass('show');
        else $('#msg1').removeClass('show');
        if (scrollY > (scrollPos[0] * 0.2590) && scrollY < (scrollPos[0] * 0.3960)) $('#msg2').addClass('show');
        else $('#msg2').removeClass('show');
        if (scrollY > (scrollPos[0] * 0.7800)) $('#challenge1').addClass('show');
        else $('#challenge1').removeClass('show');
    }
    else if (scrollY >= scrollPos[0] && scrollY < scrollPos[1]) {
        var percentY = ((scrollY - scrollPos[0]) / scrollPos[0]) * bg.height();
        var x = (bg.width() * 0.832) - ($window.width() / 2);
        var y = ((bg.height() * 0.835) - ($window.height() / 2)) - percentY * 0.67;
        bg.css('transform', 'translate(' + (x * -1) + 'px, ' + (y * -1) + 'px)')
        feeth.css('transform', 'rotate(0deg)')
        if (scrollY < (scrollPos[0] * 1.22)) $('#challenge1').addClass('show');
        else $('#challenge1').removeClass('show');
        if (scrollY > (scrollPos[0] * 1.3) && scrollY < (scrollPos[0] * 1.65)) $('#challenge2').addClass('show');
        else $('#challenge2').removeClass('show');
        if (scrollY > (scrollPos[0] * 1.78)) $('#challenge3').addClass('show');
        else $('#challenge3').removeClass('show');
    }
    else if (scrollY >= scrollPos[1] && scrollY < scrollPos[2]) {
        var percentX = ((scrollY - scrollPos[1]) / scrollPos[0]) * bg.width();
        var x = ((bg.width() * 0.83) - ($window.width() / 2)) - percentX * 0.6655;
        var y = (bg.height() * -0.168) + ($window.height() / 2);
        feeth.css('transform', 'rotate(-90deg)');
        // if (scrollY >= scrollPos[1] && scrollY <= (scrollPos[1] * 1.015)) {
        //     feeth.css('transform', 'rotate(-90deg)')
        // }
        // else if (scrollY >= (scrollPos[1] * 1.015) && scrollY <= (scrollPos[1] * 1.05)) {
        //     feeth.css('transform', 'rotate(-45deg)')
        //     y = y + (scrollY - (scrollPos[1] * 1.015)) * 0.00025 * bg.height();
        // }
        // else if (scrollY >= (scrollPos[1] * 1.05) && scrollY <= (scrollPos[1] * 1.085)) {
        //     feeth.css('transform', 'rotate(225deg)')
        //     y = y + ((scrollPos[1] * 1.085) - scrollY) * 0.00025 * bg.height();
        // }
        // else {
        //     feeth.css('transform', 'rotate(270deg)')
        // }
        bg.css('transform', 'translate(' + (x * -1) + 'px, ' + y + 'px)')

        if (scrollY < (scrollPos[1] * 1.06)) $('#challenge3').addClass('show');
        else $('#challenge3').removeClass('show');
        if (scrollY > (scrollPos[1] * 1.185) && scrollY < (scrollPos[1] * 1.265)) $('#msg7').addClass('show');
        else $('#msg7').removeClass('show');
        if (scrollY > (scrollPos[1] * 1.3) && scrollY < (scrollPos[1] * 1.39)) $('#msg8').addClass('show');
        else $('#msg8').removeClass('show');
    }
    else if (scrollY >= scrollPos[2] && scrollY < scrollPos[3]) {
        var percentY = (((scrollY - scrollPos[2]) / (scrollPos[3] - scrollPos[2])) / 2) * bg.height();
        var x = (bg.width() * -0.166) + ($window.width() / 2);
        var y = (bg.height() * -0.166) + ($window.height() / 2) - percentY * 0.68;
        bg.css('transform', 'translate(' + x + 'px, ' + y + 'px)')
        feeth.css('transform', 'rotate(180deg)')
        if (scrollY > (scrollPos[2] * 1.093)) $('#msg10').addClass('show');
        else $('#msg10').removeClass('show');
    }
    else if (scrollY >= scrollPos[3]) {
        var x = (bg.width() * -0.166) + ($window.width() / 2);
        var y = (bg.height() * -0.166) + ($window.height() / 2) - bg.height() * 0.34;
        bg.css('transform', 'translate(' + x + 'px, ' + y + 'px)')
        feeth.css('transform', 'rotate(180deg)')
        $('#challenge4').addClass('show');
        $('#start-over').addClass('show');
    }
    check_if_in_view()
}

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', controller);
window.scrollTo(0, 2);
$window.trigger('scroll');


function toggleMsg(id) {
    if (buttons[id].active) {
        buttons[id].active = false;
        ($(buttons[id].toggleItem)).removeClass('show');
    }
    else {
        buttons[id].active = true;
        $(buttons[id].toggleItem).addClass('show');
    }
}

function startOver() {
    window.scrollTo(0, 0);
    $('#challenge4').removeClass('show');
    $('#start-over').removeClass('show');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].active = false;
        ($(buttons[i].toggleItem)).removeClass('show');
    }
}

var img = [
    { id: '#floor', loaded: false },
    { id: '#cloud-left', loaded: false },
    { id: '#cloud-right', loaded: false },
    { id: '#msg1', loaded: false },
    { id: '#msg2', loaded: false },
    { id: '#msg3', loaded: false },
    { id: '#msg4', loaded: false },
    { id: '#msg5', loaded: false },
    { id: '#msg6', loaded: false },
    { id: '#msg7', loaded: false },
    { id: '#msg8', loaded: false },
    { id: '#msg9', loaded: false },
    { id: '#msg10', loaded: false },
    { id: '#challenge1', loaded: false },
    { id: '#challenge2', loaded: false },
    { id: '#challenge3', loaded: false },
    { id: '#challenge4', loaded: false },
    { id: '#start-over', loaded: false },
    { id: '#left', loaded: false },
    { id: '#right', loaded: false },
]
var totalLoaded = 0;
for (var i = 0; i < img.length; i++) {
    $(img[i].id).on('load', function () {
        totalLoaded += 1;
        if (totalLoaded == img.length) {
            var loading = $('#loading');
            loading.addClass('finish');
            controller();
            setTimeout(function () {
                loading.fadeOut();
            }, 600);
        }
    });
}

// if (window.addEventListener) {
//     window.addEventListener('DOMMouseScroll', wheel, false);
//     window.onmousewheel = document.onmousewheel = wheel;
// }

// var wheelDelay = false;
// function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) delta = (event.wheelDelta) / 120;
//     else if (event.detail) delta = -(event.detail) / 3;
//     if (!wheelDelay) {
//         window.scrollTo(0, $window.scrollTop() - ((event.wheelDelta < 0) ? -20 : 20));
//         // handle(delta);
//         if (event.preventDefault) event.preventDefault();
//     }
//     event.returnValue = false;
// }

// function handle(sentido) {
//     var inicial = $window.scrollTop();
//     var time = 1000;
//     var distance = 200;
//     animate({
//         delay: 0,
//         duration: time,
//         delta: function (p) { return p; },
//         step: function (delta) {
//             window.scrollTo(0, inicial - distance * delta * sentido);
//         }
//     });
// }

// function animate(opts) {
//     var start = new Date();
//     var id = setInterval(function () {
//         var timePassed = new Date() - start;
//         var progress = (timePassed / opts.duration);
//         if (progress > 1) { progress = 1; }
//         var delta = opts.delta(progress);
//         opts.step(delta);
//         if (progress == 1) { clearInterval(id); }
//     }, opts.delay || 10);
// }