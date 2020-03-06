const colorfulImages = ['lion1.png', 'lion2.png'];
const colorlessImages = ['lion1a.png', 'lion2a.png'];
const titlesh1 = ["Lion", "King of"];
const titlesh2 = ["King", "Jungle"];

let activeElement = 0;

const colorImg = document.querySelector('.color');
const colorlessImg = document.querySelector('.colorless');
const h1 = document.querySelector('.titles h1');
const h2 = document.querySelector('.titles h2');

changeSlide = () => {
    activeElement++;
    if (activeElement == colorfulImages.length) {
        activeElement = 0;
    }
    colorImg.src = colorfulImages[activeElement];
    colorlessImg.src = colorlessImages[activeElement];
    h1.textContent = titlesh1[activeElement];
    h2.textContent = titlesh2[activeElement];



}

setInterval(changeSlide, 4000);