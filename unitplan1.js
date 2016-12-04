function buttonMove() {
    var element = $('.box'),
        originalY = element.offset().top;
    var topMargin = 20;

    $(window).on('scroll', function(event) {
        var scrollTop = $(window).scrollTop();
    
        element.stop(false, false).animate({
            top: scrollTop < originalY
                ? 0
                : scrollTop - originalY + topMargin
        }, 175);
    });
}

$(document).ready(function() {
    $('.box').on("click", function() { 
       
    });

    buttonMove();
});