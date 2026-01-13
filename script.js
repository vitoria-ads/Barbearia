const btnMobile = document.querySelector(".menu-mobile-btn");
const menu = document.querySelector(".menu");

// Quando clicar no botão hamburguer...
btnMobile.addEventListener("click", () => {
  // Adiciona ou remove a classe "ativo"
  menu.classList.toggle("ativo");
});
