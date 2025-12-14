const slider = document.querySelector('.slider');
const next = document.getElementById('nextBtn');
const back = document.getElementById('backBtn');

next.addEventListener('click', () => {
  slider.style.transform = "translateX(-50%)";
});

back.addEventListener('click', () => {
  slider.style.transform = "translateX(0)";
});
