document.addEventListener('DOMContentLoaded', () => {
    let headerMenu = document.querySelector('.header__nav');
    document.addEventListener('click', ({ target }) => {
        // burger
        if (target.classList.contains('burger')) {
            target.classList.toggle('_opened');
            headerMenu.classList.toggle('active');
        }
    });

    // footer top btn
    const footerBtnToTop = document.querySelector('.footer__top');
    footerBtnToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            smooth: 'behavior'
        })
    });
});

window.onload = () => {
    // $.fn.setCursorPosition = function(pos) {
    //     if ($(this).get(0).setSelectionRange) {
    //         $(this).get(0).setSelectionRange(pos, pos)
    //     } else if ($(this).get(0).createTextRange) {
    //         var range = $(this).get(0).createTextRange()
    //         range.collapse(true)
    //         range.moveEnd('character', pos)
    //         range.moveStart('character', pos)
    //         range.select()
    //     }
    // }
    // $('input[type="tel"]').on('click', function() {
    //     $(this).setCursorPosition(3)
    // }).mask('+7 (999) 999 99 99')

    // $('.way').waypoint({
    //     handler: function() {
    //         $(this.element).addClass("way--active");

    //     },
    //     offset: '88%'
    // });
    const clientsSlider = new Swiper('.clients__items', {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        autoplay: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            577: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1360: {
                slidesPerView: 6,
            },
        },
    });
};

// loader func
function submitForm() {
    $('#form_loader').show();
}
//Alert form
let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close")
for (let item of alertClose) {
    item.addEventListener('click', function(event) {
        alertt.classList.remove("alert--active")
        alertt.classList.remove("alert--warning")
        alertt.classList.remove("alert--error")
    })
}