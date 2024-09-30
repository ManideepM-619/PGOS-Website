document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navItems = document.getElementById('nav-items');

  hamburger.addEventListener('click', function() {
      if (navItems) {
          navItems.classList.toggle('show');
      } else {
          console.error('nav-items not found');
      }
  });
});


//existing function for another carousel (card-wrapper scroll)
function scrollCarousel(direction) {
    const carouselInner = document.querySelector('.card-wrapper');
    const scrollAmount = 434 + 10; 
    carouselInner.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}


function scrollTestimonialCarousel(direction) {
    const carousel = document.getElementById('testimonialCarousel');
    // const boxWidth = document.querySelector('.testimonial-box').offsetWidth;
    carousel.scrollBy({ left: direction * boxWidth, behavior: 'smooth' });
}

// JavaScript code to toggle the mobile navigation menu
function toggleMenu() {
    var mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.style.display === "block") {
      mobileNav.style.display = "none";
    } else {
      mobileNav.style.display = "block";
    }
  }