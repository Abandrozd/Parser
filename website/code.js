let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
  // Скрываем все слайды
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));
  
  // Показываем нужный слайд
  slides[index].classList.add('active');
  indicators[index].classList.add('active');
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function previousSlide() {
  currentSlideIndex = currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index - 1;
  showSlide(currentSlideIndex);
}

// Автоматическое переключение каждые 5 секунд (опционально)
setInterval(nextSlide, 5000);
