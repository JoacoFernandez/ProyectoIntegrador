const track = document.querySelector('.carouseltrack');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carouselnav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;



/*console.log(slideSize);*/

//los slides al lado de cada uno//

slides.forEach((slide, index)=> {
    slide.getElementsByClassName.left = slideWidth * index + 'px';
})

/*slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth + 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px'; */


//cuando aprieto para la izq que se mueva, y vice versa
//nav indicator//
