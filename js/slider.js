const images = document.querySelectorAll('.slider .slider__line img');
const sliderLine = document.querySelector('.slider__line');
let count = 0;
let width; 

function init() {
   console.log('resize');
   width = document.querySelector('.slider').offsetWidth;
   console.log(width);
   sliderLine.style.width = width * images.length + 'px';
   images.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
   });

   console.log(count);
   sliderLine.style = 'transform: translate(-' + count * width * 1.05 + 'px);';
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-next').addEventListener("click", function () {
   count++;
   if (count >= images.length) {
      count = 0;
   }
   console.log(count);
   sliderLine.style = 'transform: translate(-' + count * width * 1.05 + 'px);';
});

document.querySelector('.slider-prev').addEventListener("click", function () {
   count--;
   if (count < 0) {
      count = 5;
   }
   console.log(count);
   sliderLine.style = 'transform: translate(-' + count * width * 1.05 + 'px);';
});

