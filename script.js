const btns = document.querySelectorAll('.toggler img');
const authorImgs = document.querySelectorAll('.author__img');
const testimonialBottom = document.querySelectorAll('.testimonial__bottom');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const index = e.target.classList.contains('prev') ? -1 : 1;
    const activeAuthorImg = document.querySelector('.author__img.active');
    const activeTestimonial = document.querySelector(
      '.testimonial__bottom.active'
    ); 

    let nextIndex = [...authorImgs].indexOf(activeAuthorImg) + index;

    if (nextIndex < 0) {
      nextIndex = authorImgs.length - 1;
    }

    if (nextIndex >= authorImgs.length) {
      nextIndex = 0;
    }

    authorImgs[nextIndex].classList.add('active');
    testimonialBottom[nextIndex].classList.add('active');

    activeAuthorImg.classList.remove('active');
    activeTestimonial.classList.remove('active');
  });
});