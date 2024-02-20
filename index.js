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



let slideIndexCertificado = 1;
showSlidesCertificados(slideIndexCertificado);

function plusSlidesCertificado(n) {
  showSlidesCertificados(slideIndexCertificado += n);
}

function currentSlideCertificado(n) {
  showSlidesCertificados(slideIndexCertificado = n);
}

function showSlidesCertificados(n) {
  let i;
  let slidesCertificados = document.getElementsByClassName("slide_certificado");
  let dotsCertificados = document.getElementsByClassName("dot_certificado");
  if (n > slidesCertificados.length) { slideIndexCertificado = 1 }
  if (n < 1) { slideIndexCertificado = slidesCertificados.length }
  for (i = 0; i < slidesCertificados.length; i++) {
    slidesCertificados[i].style.display = "none";
  }
  for (i = 0; i < dotsCertificados.length; i++) {
    dotsCertificados[i].className = dotsCertificados[i].className.replace(" active", "");
  }
  slidesCertificados[slideIndexCertificado - 1].style.display = "block";
  dotsCertificados[slideIndexCertificado - 1].className += " active";
}

setInterval(() => {
  plusSlidesCertificado(1);
}, 3000);


document.addEventListener("DOMContentLoaded", function () {
  const loadMoreBtn = document.getElementById("load-more-btn");
  let loaded = false; // Variável para verificar se os projetos 7 ao 12 foram carregados

  function addProjects() {
    if (!loaded) {
      // Altera o estilo dos projetos 7 ao 12 para display: block
      const projectsToAdd = document.querySelectorAll("#projects-container .project:nth-child(n+7)");
      projectsToAdd.forEach(project => {
        project.style.display = "block";
      });
      loaded = true; // Marca que os projetos 7 ao 12 foram carregados
    } else {
      // Ação a ser realizada quando o botão "Carregar Mais" for clicado novamente (se necessário)
      // Por exemplo, pode adicionar mais projetos aqui se necessário
      console.log("Não há mais projetos para carregar.");
    }

    // Oculta o botão de "Carregar Mais" após exibir todos os projetos
    loadMoreBtn.style.display = "none";
  }

  // Adiciona evento de clique ao botão "Carregar Mais"
  loadMoreBtn.addEventListener("click", addProjects);

  // Adiciona eventos de clique aos botões de filtro
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      filterProjects(category);
    });
  });

  function filterProjects(category) {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
      if (category === "all") {
        project.style.display = "block";
      } else if (project.classList.contains(category)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  }
});