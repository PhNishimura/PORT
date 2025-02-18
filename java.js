// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const bars = document.querySelectorAll('.bar');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  bars.forEach((bar, index) => {
    if (mobileMenu.classList.contains('active')) {
      if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
      if (index === 1) bar.style.opacity = '0';
      if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      bar.style.transform = 'none';
      bar.style.opacity = '1';
    }
  });
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    bars.forEach(bar => {
      bar.style.transform = 'none';
      bar.style.opacity = '1';
    });
  });
});

// Scroll Animation
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.scroll-fade').forEach(element => {
  observer.observe(element);
});