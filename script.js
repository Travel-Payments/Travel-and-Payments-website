const navMenu = document.querySelector(".nav-menu")
const navClose = document.querySelector(".nav-close")
const navLinks = document.querySelector(".navlinks")
const overlay = document.querySelector(".overlay")
const contactForm = document.querySelector("#contactForm")
const contactConfirmation = document.querySelector(".contact-confirmation")
const heroImgHorizontal = document.querySelector(".hero-img--horizontal")
const heroImgVertical = document.querySelector(".hero-img--vertical")

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

contactForm?.addEventListener("submit", function (event) {
  event.preventDefault()
  const formData = new FormData(this)
  contactConfirmation.style.display = "flex"
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((result) => {
      setTimeout(function () {
        contactConfirmation.style.display = "none"
        contactForm.reset()
      }, 5000)
    })
    .catch((error) => {
      console.error("Error:", error)
    })
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

if (heroImgHorizontal || heroImgVertical) {
  mm.add(
    {
      isTabletPortraitUp: "(min-width: 641px)",
      isTabletPortraitDown: "(max-width: 640px)",
    },
    (context) => {
      let { isTabletPortraitUp } = context.conditions

      if (isTabletPortraitUp) {
        gsap.to(heroImgHorizontal, {
          xPercent: -20,
          yoyo: true,
          repeat: -1,
          duration: 2.25,
          ease: "power1.inOut",
        })
      } else {
        gsap.to(heroImgVertical, {
          yPercent: 10,
          yoyo: true,
          repeat: -1,
          duration: 2.25,
          ease: "power1.inOut",
        })
      }
    }
  )
}
