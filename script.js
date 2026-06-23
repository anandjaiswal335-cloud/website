const cube = document.getElementById('cube');
const scene = document.getElementById('scene');

if (scene && cube) {
  scene.addEventListener('pointermove', (event) => {
    const rect = scene.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const rotateY = x / rect.width * 45;
    const rotateX = -y / rect.height * 30;
    cube.style.transform = `rotateX(${rotateX - 20}deg) rotateY(${rotateY + 35}deg)`;
  });

  scene.addEventListener('pointerleave', () => {
    cube.style.transform = '';
  });
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, footer');
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 120) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0px)';
    }
  });
});

document.querySelectorAll('section, .topbar, footer').forEach((element) => {
  if (element instanceof HTMLElement) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(24px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  }
});

window.addEventListener('load', () => {
  document.querySelectorAll('section, .topbar, footer').forEach((element) => {
    if (element instanceof HTMLElement) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0px)';
    }
  });
});
