let awardsSlider = new Swiper(".awards__slider", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


$('.header__burger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
})