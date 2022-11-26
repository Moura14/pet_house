export default function scrollSuave() {
  const link = document.querySelectorAll('[data-anima="scroll"]');
  if (link.length) {
    const visible = window.innerHeight * 0.6;

    function animaScroll() {
      link.forEach((links) => {
        const section = links.getBoundingClientRect().top;
        const visibleLink = section - visible < 0;
        if (visibleLink) {
          links.classList.add("ativo");
        } else if (links.classList.contains("ativo")) {
          links.classList.remove("ativo");
        }
      });
    }

    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
