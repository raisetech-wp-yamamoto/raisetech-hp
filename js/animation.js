$(function(){
    $('.btn-area').click(
    function(){
        if($('.btn-menu').hasClass("close")){
            $('.btn-area').removeClass("close");
            $('.btn-area').addClass("open");
            $('.btn-menu').removeClass("close");
            $('.btn-menu').addClass("open");
        } else {
            $('.btn-area').removeClass("open");
            $('.btn-area').addClass("close");
            $('.btn-menu').removeClass("open");
            $('.btn-menu').addClass("close");
        }
        $('.header-menu').slideToggle(200);
    });

    var $win = $(window);

    $win.on('load resize', function() {
        var windowWidth = window.innerWidth;
        if (windowWidth > 1200) {
            console.log("window size over 1200px");
            $('body *').removeAttr('style');
            $('.btn-area').removeClass("open");
            $('.btn-area').addClass("close");
            $('.btn-menu').removeClass("open");
            $('.btn-menu').addClass("close");
        }
    });
});