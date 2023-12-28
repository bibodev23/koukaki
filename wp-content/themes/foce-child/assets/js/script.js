/*****************   ANIMATION TITRE SECTION ********************/

// Configurer les options pour l'Intersection Observer
const options = {
  threshold: 0.2, // Le seuil d'intersection à partir duquel l'observation est déclenchée
};

// Créer une instance de l'Intersection Observer avec une fonction de callback
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    // Vérifier si la section est en vue
    if (entry.isIntersecting) {
      // Ajouter la classe fadeInUp si la section est en vue
      entry.target.classList.add("animationSectionTitle");
    } else {
      // Supprimer la classe si la section n'est pas en vue
      entry.target.classList.remove("animationSectionTitle");
    }
  });
}, options);

const elementFadeIn = document.querySelectorAll(".titleFadeInUp");
elementFadeIn.forEach((element) => {
  observer.observe(element);
});


/*****************   SWIPER   ********************/
// J'initialise Swiper lors du chargement du "DOMContentLoaded' avant le chargement total de la page "LOAD"
document.addEventListener('DOMContentLoaded', function () {

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    Autoplay: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    autoplay: {
      delay: 5000,
    },
  });
});

/*****************   ROTATE FLOWER   ********************/

const flowerAfter = document.querySelectorAll(".story h2, .site-footer ul");
flowerAfter.forEach((flower) => {
  flower.classList.add('rotate-after');
  flower.classList.add('speed');
})

const flowerAfterBefore = document.querySelectorAll("#studio h2, #nomination");
flowerAfterBefore.forEach((flower) => {
  flower.classList.add('rotate-after-before');
})

/*****************   PARALLAX + ROTATE DURATION POUR LES FLEURS   ********************/

const allFlowers = document.querySelectorAll(".speed")
window.addEventListener('scroll', function () {
  let scrolled = window.scrollY;
  document.querySelector('.logo').style.transform = `translateY(${scrolled * 0.2}px)`;
  document.querySelector('.big-cloud').style.transform = `translateX(${scrolled * 0.2}px)`;
  document.querySelector('.little-cloud').style.transform = `translateX(${scrolled * 0.2}px)`;
  scrolled *= 0.03;
  scrolled = scrolled > 13 ? 13 : scrolled;
  allFlowers.forEach((flower) => {
    flower.style.setProperty('--rotate-duration', `${scrolled}s`);
  })
});



/*****************  MENU  ********************/
const burger = document.querySelector('.burger');
const iconBurger = "&#9776";
const iconCross = "&#10005";
const menu = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

function closeMenu () {
  menu.classList.remove("active");
  burger.innerHTML = iconBurger;
}

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
})

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.innerHTML = menu.classList.contains("active") ? iconCross : iconBurger;
})
