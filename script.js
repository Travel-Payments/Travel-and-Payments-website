const navMenu = document.querySelector(".nav-menu")
const navClose = document.querySelector(".nav-close")
const navLinks = document.querySelector(".navlinks")
const overlay = document.querySelector(".overlay")
const contactForm = document.querySelector("#contactForm")
const tnpSnackbar = document.querySelector(".tnp-snackbar")
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

// Function to dynamically add and display a snackbar
const showSnackbar = (
  message,
  duration = 5000,
  type = "info",
  description = "",
  removeAfterDuration = true
) => {
  // Remove existing snackbar if present
  const existingSnackbar = document.querySelector(".tnp-snackbar")
  if (existingSnackbar) {
    existingSnackbar.remove()
  }

  // Create the snackbar container
  const snackbar = document.createElement("div")
  snackbar.className = `tnp-snackbar tnp-snackbar--${type} tnp-snackbar--visible`

  // Add message content
  const messageElement = document.createElement("p")
  messageElement.className = "tnp-snackbar__message"
  messageElement.textContent = message
  snackbar.appendChild(messageElement)

  // Add description if provided
  if (description) {
    const descriptionElement = document.createElement("p")
    descriptionElement.className = "tnp-snackbar__detail"
    descriptionElement.textContent = description
    snackbar.appendChild(descriptionElement)
  }

  // Add progress bar if removeAfterDuration is true
  if (removeAfterDuration) {
    const progressBar = document.createElement("div")
    progressBar.className = "tnp-snackbar__progress-bar"
    snackbar.appendChild(progressBar)

    // Set progress bar animation duration and scale
    progressBar.style.animationDuration = `${duration}ms`
    // progressBar.classList.add("progressed")
  }

  // Append snackbar to the body
  document.body.appendChild(snackbar)

  if (removeAfterDuration) {
    // Remove the snackbar after the specified duration
    setTimeout(() => {
      snackbar.classList.remove("tnp-snackbar--visible")
      snackbar.addEventListener("transitionend", () => snackbar.remove())
    }, duration)
  }
}

// Handle form submission
contactForm?.addEventListener("submit", async function (event) {
  event.preventDefault()

  const formData = new FormData(this)

  // Show "Form is getting submitted..." snackbar without progress bar (since it's not removed after duration)
  showSnackbar("Form is getting submitted...", 5000, "info", "", false) // No progress bar, stays visible

  try {
    // Submit the form data via fetch
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    // Handle response
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    // Reset the form after successful submission
    contactForm.reset()

    // Show success message after successful submission
    showSnackbar(
      "Form submitted successfully!",
      5000,
      "success",
      "You will hear from us soon."
    )
  } catch (error) {
    console.error("Error:", error)

    // Show error message in case of failure
    showSnackbar("Something went wrong", 5000, "error", error.message)
  }
})

// Add click event listener to elements with the 'coming-soon' class
document.querySelectorAll(".coming-soon").forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault()
    showSnackbar("Coming Soon!", 5000, "info", "You will hear from us soon.")
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
