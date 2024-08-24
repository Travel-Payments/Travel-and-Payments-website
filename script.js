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
console.log(mm)

mm.add(
  {
  isTabletPortraitUp: "(min-width: 641px)",
  isTabletLandscapeDown: "(max-width: 1024px)",
}, (context) => {
  let {isTabletPortraitUp, isTabletLandscapeDown} = context.conditions
  
  gsap.to('.card-up', {
    yPercent: -100,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.service-section',
      start: isTabletLandscapeDown ? 'top 5%' : 'top 10%',
      end: '+1500px',
      scrub: .5,
      pin: true
    }
  })
  
  if (isTabletPortraitUp) {
    gsap.to(".hero-img--horizontal", {
      xPercent: -20,
      yoyo: true,
      repeat: -1,
      duration: 2.25,
      ease: "power1.inOut",
    });
  } else {
    gsap.to(".hero-img--vertical", {
      yPercent: 10,
      yoyo: true,
      repeat: -1,
      duration: 2.25,
      ease: "power1.inOut",
    });
  }
});