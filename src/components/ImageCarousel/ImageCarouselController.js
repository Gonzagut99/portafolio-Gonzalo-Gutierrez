import { Carousel } from 'flowbite';
import {PROJECTS} from '../projectTypes.ts'

const carouselElement = document.getElementById('indicators-carousel');

// const items = [
//     {
//         position: 0,
//         el: document.getElementById('carousel-item-1'),
//     },
//     {
//         position: 1,
//         el: document.getElementById('carousel-item-2'),
//     },
//     {
//         position: 2,
//         el: document.getElementById('carousel-item-3'),
//     },
//     {
//         position: 3,
//         el: document.getElementById('carousel-item-4'),
//     },
// ];

//const itemsObjects=
// object options with default values
const options = {
    indicators: {
        activeClasses: 'bg-white dark:bg-gray-400',
        inactiveClasses:
            'bg-white/50 dark:bg-gray-400/50 hover:bg-white dark:hover:bg-gray-300',
        items: [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1'),
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2'),
            },
        ],
    },

    // callback functions
    // onNext: () => {
    //     console.log('next slider item is shown');
    // },
    // onPrev: () => {
    //     console.log('previous slider item is shown');
    // },
    // onChange: () => {
    //     console.log('new slider item has been shown');
    // },
};

// instance options object
const instanceOptions = {
  id: 'indicators-carousel',
  override: true
};

const carousel = new Carousel(carouselElement, options, instanceOptions);

//carousel.cycle();

// set event listeners for prev and next buttons
const $prevButton = document.getElementById('data-carousel-prev');
const $nextButton = document.getElementById('data-carousel-next');

$prevButton.addEventListener('click', () => {
    carousel.prev();
});

$nextButton.addEventListener('click', () => {
    carousel.next();
});