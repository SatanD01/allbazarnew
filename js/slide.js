let swiper = new Swiper(".bannerSlide", {
    slidesPerView: 1,
    loop: true,
    simulateTouch: true,
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});

let swiper_brands = new Swiper(".brands--swiper", {
    slidesPerView: 10,
    loop: true,
    simulateTouch: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        991: {
            slidesPerView: 8,
        },

        768: {
            slidesPerView: 6,
        },
        576: {
            slidesPerView: 4,
        },
        0: {
            slidesPerView: 3,
        }
    }
});

let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    loopedSlides: 2,
    watchSlidesProgress: true,
    direction: 'vertical',
    autoplay: {
        delay: 3000,
    },
});
let galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    zoom: true,
    loopedSlides: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        991: {
            slidesPerView: 1,
            pagination: false,
        },
        0: {
            slidesPerView: 1.5,
            pagination: {
                dynamicBullets: true,
                el: '.swiper-pagination',
                clickable: true,
            },
        }
    }
});