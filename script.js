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

// document.addEventListener("DOMContentLoaded", () => {
//   // Function to smooth scroll to the target section
//   function smoothScroll(target) {
//     const targetElement = document.querySelector(target);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: "smooth" });
//     }
//   }

//   // Add click event listener to all nav links
//   const navLinks = document.querySelectorAll(".nav-link");
//   navLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       const target = e.target.getAttribute("data-target");
//       smoothScroll(target);
//     });
//   });
// });

// gsap.to(".hero-container .hero-img", {
//   right: "5%",
//   scrollTrigger: {
//     trigger: ".hero-container .hero-img",
//     scroller: "body",
//     // markers: true,
//     start: "0% 0%",
//     end: "100% 40%",
//     scrub: 1,
//   },
// });

const mm = gsap.matchMedia();
const tl1 = gsap.timeline({
  // scrollTrigger: {
  //   trigger: '.service-cards',
  //   start: 'center center',
  //   scrub: true,
  //   markers: true,
  //   // pin: true
  // },
})
// gsap.utils.toArray('.service-card').forEach((card, i) => {
//   if (i == 1) {
//     gsap.to(card, {yPercent: 110})
//   } else if (i == 2) {
//     gsap.to(card, {yPercent: 220})
//   }
// })

// tl1.to('.service-card-2', {
//   translateY: '2rem',
//   duration: 2,
// }).to('.service-card-3', {
//   translateY: '4rem',
//   duration: 2,
// })

mm.add("(min-width: 641px)", () => {
  gsap.to(".hero-img--horizontal", {
    right: "5%",
    scrollTrigger: {
      trigger: ".hero-container",
      start: "-10% 10%",
      end: "top top",
      scrub: .7,
    },
  });
});

// mm.add("(max-width: 640px)", () => {
//   gsap.to(".hero-container .hero-img", {
//     top: "-5%",
//     scrollTrigger: {
//       trigger: ".hero-container .hero-img",
//       scroller: "body",
//       // markers: true,
//       start: "-10% 10%",
//       end: "40% 28%",
//       scrub: 1,
//     },
//   });
// });
