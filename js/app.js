
    // бургер меню
    const burger = document.querySelector('.burger');
    const navigation = document.querySelector('.navigation');
    const navigationClose = document.querySelector('.burger__close')
    burger.addEventListener('click', () => {
        navigation.classList.add('navigation_active')
    })
    navigationClose.addEventListener('click', () => {
        navigation.classList.remove('navigation_active')
    })

    // фоновая музыка c чекбокса включение

    const mute = document.querySelector('.mute__checkbox');
    const audio = new Audio('audio/waterTower.mp3');

    mute.addEventListener('change', () => {
        if(mute.checked) {
            audio.play()
        } else {
            audio.pause()
        }
    })

    // пагинация анимация

    const pagination = document.querySelector('.pagination');
    const paginationButton = document.querySelector('.pagination__arrow');

    paginationButton.addEventListener('click', () => {
        pagination.classList.toggle('pagination_active')
    });

try {
    const sliderThumbs = new Swiper('.slider-thumbs', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides: 4,
});

sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex)
})

const sliderMain = new Swiper('.slider-main', {
    loop: true,
    spaceBetween: 10,
    loopedSlides: 4,
});

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;

const videos = document.querySelectorAll('video');
sliderMain.on('slideChange', () => {
    for (let i = 0; i < videos.length; i += 1) {
        videos[i].pause();
    }
})
} catch {

};


