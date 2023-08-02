$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    dots: false,
    navText: ['<i class="fa-solid fa-angles-left fa-2x"></i>', '<i class="fa-solid fa-angles-right fa-2x"></i>'],
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        768: {
            items: 2,
            nav: true,
        },
        1000: {
            items: 3,
            dots: true,
            slideBy: 3,
            smartSpeed: 100,
        }
    }
})