document.addEventListener('DOMContentLoaded', function() {
    const jobList = document.getElementById('jobList');
    const departmentFilter = document.getElementById('departmentFilter');
    const roleFilter = document.getElementById('roleFilter');
    const searchInput = document.getElementById('searchInput');

    const jobs = [
        { title: "Physics Teacher", eligibility: "Post Graduation in relevant subject with Minimum 2 years of Experience." },
        { title: "Trained Graduate Teacher", eligibility: "Graduation/ Post Graduation and B.Ed with relevant subject with minimum 2 years of work experience." },
        { title: "Primary Teacher", eligibility: "Graduation/ Post Graduation and B.ED in relevant subject having minimum 1 year experience." },
        { title: "Pre Primary Teacher", eligibility: "Graduation with PPTC/ECCE Certification." },
        { title: "Physical Education", eligibility: "Graduate in Physical Education or B.Ped with Minimum 2 years' experience." },
        // Add more job listings as needed
    ];

    function renderJobs() {
        jobList.innerHTML = '';
        jobs.forEach(job => {
            const jobItem = document.createElement('div');
            jobItem.className = 'job-item';
            jobItem.innerHTML = `
                <div class="job-details">
                    <h3>${job.title}</h3>
                    <p>Eligibility: ${job.eligibility}</p>
                </div>
                <button class="apply-btn">APPLY</button>
            `;
            jobList.appendChild(jobItem);
        });
    }

    // Initial render
    renderJobs();

    // Add event listeners for filters and search
    // Implement filtering and search logic here
});

// Existing function for another carousel (card-wrapper scroll)
function scrollCarousel(direction) {
    const carouselInner = document.querySelector('.card-wrapper');
    const scrollAmount = 434 + 10; 
    carouselInner.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// New function for testimonial carousel
function scrollTestimonialCarousel(direction) {
    const carousel = document.getElementById('testimonialCarousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const activeItem = carousel.querySelector('.carousel-item.active');
    let nextIndex = Array.from(items).indexOf(activeItem) + direction;

    if (nextIndex < 0) nextIndex = items.length - 1;
    if (nextIndex >= items.length) nextIndex = 0;

    items[nextIndex].classList.add('active');
    activeItem.classList.remove('active');
}

// Optional: Add this function to adjust the carousel on window resize
function adjustTestimonialCarousel() {
    const carousel = document.getElementById('testimonialCarousel');
    const wrapper = carousel.querySelector('.testimonial-wrapper');
    const boxes = wrapper.querySelectorAll('.testimonial-box');
    const boxWidth = boxes[0].offsetWidth + 20; // Add margin

    wrapper.style.width = `${boxWidth * boxes.length}px`;
}

// Call the adjust function on page load and window resize
window.addEventListener('load', adjustTestimonialCarousel);
window.addEventListener('resize', adjustTestimonialCarousel);

