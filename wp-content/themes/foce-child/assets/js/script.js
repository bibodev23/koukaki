/*****************   ANIMATION TITRE SECTION AVEC L'API INTERSECTION OBSERVER ********************/
// Configurer les options pour l'Intersection Observer
const options = {
  // L'obersation sera déclenchée lorsque 20% de l'élément est visible
  threshold: 0.2
};
// Créer une instance de l'Intersection Observer avec une fonction de callback
const observer = new IntersectionObserver(function (entries) {
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


/*****************   SWIPER JS AVEC EFFET COVERFLOW   ********************/
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
  flower.classList.add('speed');
  flower.classList.add('rotate-after');
});

const flowerAfterBefore = document.querySelectorAll("#studio h2, #nomination");
flowerAfterBefore.forEach((flower) => {
  flower.classList.add('speed');
  flower.classList.add('rotate-after-before');  
});


/*****************   PARALLAX + ROTATE DURATION POUR LES FLEURS   ********************/
const allFlowers = document.querySelectorAll(".speed");
const logo =  document.querySelector('.logo');
const bigCloud = document.querySelector('.big-cloud');
const littleCloud = document.querySelector('.little-cloud');


window.addEventListener('scroll', function () {
  let scrolled = window.scrollY;
  //parallax
  logo.style.transform = `translateY(${scrolled * 0.25}px)`;
  bigCloud.style.transform = `translateX(${scrolled * 0.2}px)`;
  littleCloud.style.transform = `translateX(${scrolled * 0.2}px)`;
  //rotate
  scrolled = 12 - (scrolled * 0.005);
  scrolled = scrolled  > 12 ? 12 : scrolled;
  scrolled = scrolled  < 3 ? 3 : scrolled;
  console.log(scrolled);
  allFlowers.forEach((flower) => {
    flower.style.setProperty('--rotate-duration', `${scrolled}s`);
  })
})



/*****************  MENU  ********************/
const burger = document.querySelector('.burger');
const iconBurger = "&#9776";
const iconCross = "&#10005";
const menu = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

function closeMenu () {
  menu.classList.remove("activeMenu");
  burger.innerHTML = iconBurger;
}

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
})

burger.addEventListener("click", () => {
  menu.classList.toggle("activeMenu");
  burger.innerHTML = menu.classList.contains("activeMenu") ? iconCross : iconBurger;
  let delay = 0.5;
  const delayAdd = 0.3;
  links.forEach((link) => {
    link.classList.toggle("fadeInUp")
    link.style.animationDelay = delay + "s";
    delay += delayAdd;
  })
})
