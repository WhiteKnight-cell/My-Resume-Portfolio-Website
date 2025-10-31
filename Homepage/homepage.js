// ====== ENHANCED BACKGROUND SHAPE ANIMATIONS WITH PARALLAX ======

// Select all shapes
const shapes = document.querySelectorAll('.shape');

// Floating / drifting animation
function animateShapes() {
  shapes.forEach((shape, index) => {
    const randomX = Math.random() * 60 - 30; // -30px to +30px
    const randomY = Math.random() * 60 - 30;
    const randomRotate = Math.random() * 40 - 20; // -20deg to +20deg
    const randomScale = 1 + Math.random() * 0.3; // 1.0 to 1.3
    const duration = 4000 + Math.random() * 4000; // 4–8s
    const delay = index * 300;

    shape.animate(
      [
        {
          transform: 'translate(0, 0) rotate(0deg) scale(1)',
          opacity: 0.5,
        },
        {
          transform: `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(${randomScale})`,
          opacity: 0.8,
        },
        {
          transform: 'translate(0, 0) rotate(0deg) scale(1)',
          opacity: 0.5,
        }
      ],
      {
        duration: duration,
        delay: delay,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
      }
    );
  });
}

// Run floating animation
window.addEventListener('DOMContentLoaded', animateShapes);

// ====== PARALLAX EFFECT ======
document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth - 0.5) * 2;  // -1 to +1
  const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to +1

  shapes.forEach((shape, i) => {
    const speed = 10 + i * 5; // different layers move differently
    const moveX = x * speed;
    const moveY = y * speed;

    shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

// ====== NAVBAR SCROLL EFFECT ======
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
