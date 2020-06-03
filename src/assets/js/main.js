$(function() {
    $('#wrapper').addClass('loaded');
    $('#btn_q1, #btn_q2, #btn_q3, #btn_q4, #btn_q5').on('click', function() {
        slideJudge($(this));
    });

    const $naviHeight=$('#navi').height() + 20;
    $('.navi_1, #modal_1').on('click', function() {
        $('html,body').animate({scrollTop: $('#l-about').offset().top - $naviHeight});
    });
    $('.navi_2, #modal_2').on('click', function() {
        $('html,body').animate({scrollTop: $('#l-3cs').offset().top - $naviHeight});
    });
    $('.navi_3, #modal_3').on('click', function() {
        $('html,body').animate({scrollTop: $('#l-wecan').offset().top - $naviHeight});
    });

    $('#hb_btn').on('click', function() {
        $('#modal_sp').addClass('animated slideInRight');
    });
    $('#modal_sp').on('click', function() {
        $(this).addClass('animated slideOutLeft')
        .one('animationend', function() {
            $(this).removeClass('animated slideInRight slideOutLeft');
        });
    });

    const  controller = new ScrollMagic.Controller();
    let scene = new ScrollMagic.Scene({
        triggerElement: "#navi",
        triggerHook: 'onLeave',
        offset: 0,
        reverse: true
    })
    .setClassToggle("#navi-fix", "fixed")
    .addTo(controller);
    let scene2 = new ScrollMagic.Scene({
        triggerElement: "#l-3cs",
        triggerHook: 'onCenter',
        offset: 0,
        reverse: false
    })
    .setClassToggle("#l-3cs", "enter")
    .addTo(controller);
});


function slideJudge(ele) {
    let target = $(ele).data('toggle');
    $('#' + target).slideToggle(700, 'easeOutCubic');
}
