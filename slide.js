
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1; // Ha next, 1, ha prev, -1
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]"); // Melyik karuszel
    const activeSlide = slides.querySelector(".active"); // Az épp aktív doboz

    let newIndex = [...slides.children].indexOf(activeSlide) + offset; // Új index számítása

    if (newIndex < 0) newIndex = slides.children.length - 1; // Ha az első elem előtt vagyunk, az utolsóhoz ugrik
    if (newIndex >= slides.children.length) newIndex = 0; // Ha az utolsó elem után vagyunk, az elsőhöz ugrik

    slides.children[newIndex].classList.add("active"); // Új elem aktiválása
    activeSlide.classList.remove("active"); // Régi elem eltávolítása
  });
});
