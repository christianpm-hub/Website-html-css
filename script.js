// ====== MODO OSCURO ======
document.addEventListener("DOMContentLoaded", () => {
    const moonIcon = document.querySelector("nav .nav-list img"); // tu icono de la luna
    const body = document.body;
  
    moonIcon.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
    });
  
    // ====== ANIMACIONES AL HACER SCROLL ======
    const elements = document.querySelectorAll(
      "section, .products, .subscribe, .footer"
    );
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2, // porcentaje visible para activar
      }
    );
  
    elements.forEach((el) => observer.observe(el));
  });
  