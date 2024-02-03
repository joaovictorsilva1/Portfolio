let currentContent = 1;

showContent(currentContent);

function showContent(n) {
  const contents = document.getElementsByClassName("slider-content");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  contents[n - 1].style.display = "block";
  dots[n - 1].classList.add("active");
  currentContent = n;
}
