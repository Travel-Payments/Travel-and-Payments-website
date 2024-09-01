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

const serviceCards = gsap.utils.toArray(".card-up")

serviceCards.forEach((serviceCard, i) => {
  gsap.from(serviceCard, {
    xPercent: i % 2 === 1 ? 60 : -60,
    opacity: 0,

    scrollTrigger: {
      trigger: serviceCard,
      start: "top 85%",
      end: "bottom 85%",
      once: true,
    },
  })
})

const mm = gsap.matchMedia()

mm.add(
  {
    isTabletPortraitUp: "(min-width: 641px)",
    isTabletPortraitDown: "(max-width: 640px)",
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
