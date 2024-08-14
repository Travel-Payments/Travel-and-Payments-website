const navMenu = document.querySelector(".nav-menu");
const navClose = document.querySelector(".nav-close");
const navLinks = document.querySelector(".navlinks");
const overlay = document.querySelector(".overlay");

navMenu.addEventListener("click", () => {
  navLinks.classList.add("nav-open");
  overlay.classList.add("show");
});

navClose.addEventListener("click", () => {
  navLinks.classList.remove("nav-open");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("nav-open");
  overlay.classList.remove("show");
});


const mm = gsap.matchMedia();

mm.add(
  {
  isTabletPortraitUp: "(min-width: 641px)",
  isTabletLandscapeUp: "(min-width: 1024px)",
}, (context) => {
  let {isTabletPortraitUp, isTabletLandscapeUp, isTabletLandscapeDown} = context.conditions

  gsap.to('.card-up', {
    yPercent: -100,
    stagger: 0.25,
    scrollTrigger: {
      trigger: '.service-section',
      start: () => isTabletLandscapeUp ? 'top 10%' : 'top 5%',
      end: '+1500px',
      // markers: true,
      scrub: .5,
      pin: true
    }
  })

  if (isTabletPortraitUp) {
    gsap.to(".hero-img--horizontal", {
      right: "5%",
      scrollTrigger: {
        trigger: ".hero-container",
        start: "-10% 10%",
        end: "top top",
        scrub: .7,
      },
    });
  }
});