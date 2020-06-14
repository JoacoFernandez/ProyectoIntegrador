const track = document.querySelector('.carouseltrack');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carouselnav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

/*console.log(slideSize);*/
//los slides al lado de cada uno//

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


prevButton.addEventListener('click' , e => {
const currentSlide = track.querySelector('.current-slide');
const prevSlide = currentSlide.previousElementSibling;

moveToSlide(track, currentSlide, prevSlide);
});

//cuando aprieto para la izq que se mueva, y vice versa
//nav indicator//

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
  
    moveToSlide(track, currentSlide, nextSlide);
//move to next slide//
 });

//si usas un class list sin punto, si usas query con punto//

dotsNav.addEventListener('click', e => {
   //que indicador apretamos//
    const targetDot = e.target.closest('button');

    if (!targetDot) return; //si algo en la funcion es falso, el return para la funcion//
  
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide')

    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targeIndex === slides.length - 1 ) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    
    
})