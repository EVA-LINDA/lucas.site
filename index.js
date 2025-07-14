const heroTextTitle = document.querySelector('.hero-text');

const heroSectionTL = gsap.timeline();

heroSectionTL.from(heroTextTitle, {
  duration: 1.2,
  opacity: 0,
  ease: "power4.out",
  y: "100%",
  stagger: 0.1
});