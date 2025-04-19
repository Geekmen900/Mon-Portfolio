// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  mirror: false
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Progress bar animation
const progressBars = document.querySelectorAll('.progress-bar');
const animateProgress = () => {
  progressBars.forEach(progress => {
    const value = progress.style.width;
    progress.style.width = '0%';
    setTimeout(() => {
      progress.style.width = value;
    }, 100);
  });
};

// Trigger progress bar animation when in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateProgress();
    }
  });
});

document.querySelectorAll('.skills-wrapper').forEach(element => {
  observer.observe(element);
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message envoyé avec succès!');
    contactForm.reset();
  });
}

// Portfolio item hover effect
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('.portfolio-overlay').style.opacity = '1';
  });
  
  item.addEventListener('mouseleave', () => {
    item.querySelector('.portfolio-overlay').style.opacity = '0';
  });
});

// Typing effect for hero section
const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  const typing = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  };
  typing();
};

// Initialize typing effect
window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero-section h1');
  if (heroText) {
    heroText.innerHTML = '';
    typeWriter(heroText, 'Bonjour,\nJe suis Akibou Armel');
  }
});