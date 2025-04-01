document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navbar links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Carousel functionality
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const btnLeft = document.querySelector('.carousel-button-left');
    const btnRight = document.querySelector('.carousel-button-right');
    let currentIndex = 0;
    const totalImages = images.length;
  
    function updateCarousel() {
      carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    btnLeft.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
      updateCarousel();
    });
  
    btnRight.addEventListener('click', () => {
      currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    });
  
    // Optional: Automatic carousel change every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    }, 5000);
  
    // Contact form simulation
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      formStatus.textContent = "Message sent successfully!";
      formStatus.style.color = "green";
      setTimeout(() => {
        form.reset();
        formStatus.textContent = "";
      }, 2000);
    });
  });