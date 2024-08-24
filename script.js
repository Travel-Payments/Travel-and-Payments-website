const navMenu = document.querySelector(".nav-menu")
const navClose = document.querySelector(".nav-close")
const navLinks = document.querySelector(".navlinks")
const overlay = document.querySelector(".overlay")

navMenu.addEventListener("click", () => {
  navLinks.classList.add("nav-open")
  overlay.classList.add("show")
})

navClose.addEventListener("click", () => {
  navLinks.classList.remove("nav-open")
  overlay.classList.remove("show")
})

overlay.addEventListener("click", () => {
  navLinks.classList.remove("nav-open")
  overlay.classList.remove("show")
})

gsap.to(".card-up", {
  yPercent: -100,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".service-content",
    start: () => `top ${document.querySelector("nav").offsetHeight + 16}`,
    end: "+1500px",
    scrub: 0.5,
    pin: ".service-section",
    // markers: true,
  },
})

const mm = gsap.matchMedia()

mm.add(
  {
    isTabletPortraitUp: "(min-width: 641px)",
  },
  (context) => {
    let { isTabletPortraitUp } = context.conditions

    if (isTabletPortraitUp) {
      gsap.to(".hero-img--horizontal", {
        xPercent: -20,
        yoyo: true,
        repeat: -1,
        duration: 2.25,
        ease: "power1.inOut",
      })
    } else {
      gsap.to(".hero-img--vertical", {
        yPercent: 10,
        yoyo: true,
        repeat: -1,
        duration: 2.25,
        ease: "power1.inOut",
      })
    }
  }
)
