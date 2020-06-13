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
    slide.style.left = slideWidth * index + 'px' ;
};

slides.forEach(setSlidePosition);


/*slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth + 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px'; */


//cuando aprieto para la izq que se mueva, y vice versa
//nav indicator//

nextButton.addEventListener('click', e => {
const currentSlide = track.querySelector('.current-slide');
const nextSlide = currentSlide.nextElementSibling;
const amountToMove = nextSlide.style.left;

//move to next slide//
track.style.transform = 'translateX(' + amountToMove + ')';
currentSlide.classList.remove('.current-slide');
nextSlide.classList.add('.current-slide');
})
