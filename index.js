let slideIndex = 1;
showSlides(slideIndex);

// Função para avançar/retroceder slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Função para escolher um slide específico
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Função para avançar os slides automaticamente
setInterval(() => {
  plusSlides(1);
}, 3000); // Altere o intervalo de avanço dos slides conforme necessário (em milissegundos)