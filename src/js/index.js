import { ceateBreads } from './modules/breadCrumbs.js';
import { getPageElements } from './modules/getPageElements.js';
import './module/swiper-bundle.min.js';
const pageElements = getPageElements();
pageElements.breadCrumbLinks.at(-1).classList.add('bread-crumbs__link_active');
const elemsList = pageElements.breadCrumbElems.slice(1, pageElements.breadCrumbElems.length);
elemsList.forEach(item => item.insertAdjacentHTML('afterbegin', ceateBreads()));

const allTabBtns = pageElements.characteristicsBtns;
const allTabBlocks = [...document.querySelectorAll('.characteristics-details-list')];
allTabBtns.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        for (let i = 0; i < allTabBlocks.length; i += 1) {
            if (index === i) {
                allTabBlocks[i].classList.add('characteristics-details-list_active');
                allTabBtns[i].classList.add('tab-btn_active');
            } else {
                allTabBlocks[i].classList.remove('characteristics-details-list_active');
                allTabBtns[i].classList.remove('tab-btn_active');
            }
        }
    });
});

export const acc = () => {
    pageElements.infoItemHeader.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            for (let i = 0; i < pageElements.deliveryItem.length; i += 1) {
                if (index === i) {
                    pageElements.infoItemContent[i].style.height = pageElements.deliveryItem[
                        i
                    ].classList.contains('info-item_active')
                        ? ''
                        : `${pageElements.infoItemContent[i].scrollHeight}px`;
                    pageElements.deliveryItem[i].classList.toggle('info-item_active');
                } else {
                    pageElements.deliveryItem[i].classList.remove('info-item_active');
                    pageElements.infoItemContent[i].style.height = '';
                }
            }
        });
    });
};
acc();
new Swiper('.swiper', {
    loop: true,
    speed: 400,
    slidesPerView: 2,
    loopedSlides: 1,
    grabCursor: true,
    allowTouchMove: true,
    navigation: {
        nextEl: '.swiper-button_next',
        prevEl: '.swiper-button_prev',
    },

    breakpoints: {
        1440: {
            allowTouchMove: true,
            slidesPerView: 2,
            loopedSlides: 3,
        },
        1024: {
            slidesPerView: 3,
            loopedSlides: 3,
        },
        768: {
            slidesPerView: 2,
            loopedSlides: 2,
        },
    },
});
