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


  document.addEventListener("DOMContentLoaded", function() {
    const projectsContainer = document.getElementById("projects-container");
    const loadMoreBtn = document.getElementById("load-more-btn");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");
    const projectsToAdd = [
      "<div class='project backend'>Projeto 7 (Backend)</div>",
      "<div class='project frontend'>Projeto 8 (Frontend)</div>",
      "<div class='project frontend'>Projeto 9 (Frontend)</div>",
      "<div class='project fullstack'>Projeto 10 (Full-stack)</div>",
      "<div class='project fullstack'>Projeto 11 (Full-stack)</div>",
      "<div class='project backend'>Projeto 12 (Backend)</div>",
      // Adicione mais projetos backend/frontend/fullstack aqui
    ];
    let currentIndex = 6; // Começa com 6 porque os 6 primeiros projetos já estão visíveis
    let currentCategory = "all";
  
    function addProjects() {
      const fragment = document.createDocumentFragment();
      const projectsToAddSlice = projectsToAdd.slice(currentIndex, currentIndex + 3);
      for (let i = 0; i < projectsToAddSlice.length; i++) {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");
        const category = getCategory(projectsToAddSlice[i]);
        if (currentCategory === "all" || currentCategory === category) {
          projectElement.innerHTML = projectsToAddSlice[i];
          fragment.appendChild(projectElement);
        }
      }
      projectsContainer.appendChild(fragment);
      currentIndex += projectsToAddSlice.length;
  
      // Exibe os projetos adicionados
      const addedProjects = document.querySelectorAll(".project");
      addedProjects.forEach(project => {
        project.style.display = "block";
      });
  
      // Oculta o botão de "Carregar Mais" se não houver mais projetos a serem carregados
      if (currentIndex >= projectsToAdd.length) {
        loadMoreBtn.style.display = "none";
      }
    }
  
    function getCategory(projectHtml) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = projectHtml;
      const projectCategory = tempDiv.querySelector(".project").classList[1];
      return projectCategory;
    }
  
    function filterProjects(category) {
      // Esconde todos os projetos
      projects.forEach(project => {
        project.style.display = "none";
      });
  
      // Exibe apenas os projetos da categoria selecionada
      if (category === "all") {
        projects.forEach(project => {
          project.style.display = "block";
        });
      } else {
        const filteredProjects = document.querySelectorAll(`.project.${category}`);
        filteredProjects.forEach(project => {
          project.style.display = "block";
        });
      }
  
      // Atualiza a categoria atual
      currentCategory = category;
    }
  
    // Adiciona eventos de clique aos botões de filtro
    filterButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const category = this.getAttribute("data-category");
        filterProjects(category);
      });
    });
  
    // Adiciona evento de clique ao botão "Carregar Mais"
    loadMoreBtn.addEventListener("click", addProjects);
  });
  