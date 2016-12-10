$(function () {
    $('#phone').mask('8 (000) 000-00-00');
    $('.faq__link').on('click', function (e) {
        e.preventDefault();
        let $this = $(this),
            item = $this.closest('.faq__item');
        
        if (!item.hasClass('active')) {
            
            item.addClass('active')
                .siblings()
                .removeClass('active');
            
        } else
            item.removeClass('active');
    })
})
;
