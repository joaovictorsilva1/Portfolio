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
      // Altera o estilo dos projetos 7 ao 12 para display: inline-block
      const projectsToAdd = document.querySelectorAll("#projects-container .project:nth-child(n+7)");
      projectsToAdd.forEach(project => {
        project.style.display = "inline-block";
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
        project.style.display = "inline-block";
      } else if (project.classList.contains(category)) {
        project.style.display = "inline-block";
      } else {
        project.style.display = "none";
      }
    });
  }
});



var menuAberto = false; // Variável para rastrear se o menu está aberto ou fechado

document.querySelector('.opcoes_img').addEventListener('click', function () {
  toggleMenu();
});

function toggleMenu() {
  var menu = document.querySelector('.dropdown-content');
  var backdrop = document.querySelector('.backdrop');

  if (!menuAberto) { // Se o menu estiver fechado, abra-o
    menu.style.display = 'block';
    menuAberto = true;

    // Criar e adicionar a camada semi-transparente
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'backdrop';
      document.body.appendChild(backdrop);
    }

    // Mostra a camada semi-transparente
    backdrop.style.display = 'block';

    // Adiciona um event listener para fechar o menu quando clicar fora dele
    document.addEventListener('click', closeMenuOutside);
  } else { // Se o menu estiver aberto, feche-o
    menu.style.display = 'none';
    menuAberto = false;

    // Esconde a camada semi-transparente
    if (backdrop) {
      backdrop.style.display = 'none';
    }

    // Remove o event listener para fechar o menu fora dele
    document.removeEventListener('click', closeMenuOutside);
  }
}

document.querySelectorAll('.dropdown-content a').forEach(item => {
  item.addEventListener('click', () => {
    // Feche o menu quando um item for clicado
    document.querySelector('.dropdown-content').style.display = 'none';
    menuAberto = false;

    var backdrop = document.querySelector('.backdrop');
    if (backdrop) {
      backdrop.style.display = 'none';
    }

    // Remove o event listener para fechar o menu fora dele
    document.removeEventListener('click', closeMenuOutside);
  });
});

document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    // Remove a classe 'active' de todos os itens do menu
    document.querySelectorAll('.menu-item').forEach(item => {
      item.classList.remove('active');
    });
    // Adiciona a classe 'active' apenas ao item clicado
    item.classList.add('active');
    // Aplica a animação de mudança de cor
    setTimeout(() => {
      item.classList.remove('active');
    }, 3000); // 3 segundos
  });
});

function closeMenuOutside(event) {
  var menu = document.querySelector('.dropdown-content');
  var button = document.querySelector('.opcoes_img');

  // Verifica se o clique foi fora do menu e não no botão
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    // Se o menu estiver aberto, feche-o
    if (menuAberto) {
      menu.style.display = 'none';
      menuAberto = false;

      var backdrop = document.querySelector('.backdrop');
      if (backdrop) {
        backdrop.style.display = 'none';
      }

      // Remove o event listener para fechar o menu fora dele
      document.removeEventListener('click', closeMenuOutside);
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const pai = document.querySelector('.pai');
  const texto = document.querySelector('.texto');

  function ajustarTamanhoTexto() {
    const proporcao = pai.offsetHeight / texto.scrollHeight;
    texto.style.fontSize = `${proporcao * 100}%`;
  }

  ajustarTamanhoTexto();

  window.addEventListener('resize', ajustarTamanhoTexto);
});





