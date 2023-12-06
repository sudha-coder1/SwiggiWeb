const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;

// Calculate the width of one card
const cardWidth = carouselSlide.firstElementChild.clientWidth;

nextBtn.addEventListener('click', () => {
    if (counter < (carouselSlide.children.length - 3)) {
        counter++;
        carouselSlide.style.transform = `translateX(${-counter * cardWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        carouselSlide.style.transform = `translateX(${-counter * cardWidth}px)`;
    }
});



const foodcarouselSlide = document.querySelector('.food-carousel-slide');
const foodprevBtn = document.querySelector('.food-prev-btn');
const foodnextBtn = document.querySelector('.food-next-btn');

let foodcounter = 0;

// Calculate the width of one card
const foodcardWidth = foodcarouselSlide.firstElementChild.clientWidth;

nextBtn.addEventListener('click', () => {
    if (foodcounter < (foodcarouselSlide.children.length - 3)) {
        foodcounter++;
        foodcarouselSlide.style.transform = `translateX(${-counter * foodcardWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (foodcounter > 0) {
        foodcounter--;
        foodcarouselSlide.style.transform = `translateX(${-foodcounter * foodcardWidth}px)`;
    }
});




