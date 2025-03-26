// Navigation
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
  menuToggle.querySelector("i").classList.toggle("fa-bars");
  menuToggle.querySelector("i").classList.toggle("fa-times");
});

// Smooth Scroll
document.querySelectorAll(".nav-link, .btn").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    if (navList.classList.contains("active")) {
      navList.classList.remove("active");
      menuToggle.querySelector("i").classList.toggle("fa-bars");
      menuToggle.querySelector("i").classList.toggle("fa-times");
    }
  });
});

// Header Shrink on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("shrink", window.scrollY > 50);
});

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const featureObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      featureObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".feature-card").forEach((card) => {
  featureObserver.observe(card);
});

// Parallax Effect for Hero
const hero = document.querySelector(".hero");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Dynamic Color Change on Feature Hover
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const feature = card.dataset.feature;
    document.documentElement.style.setProperty(
      "--accent-color",
      getFeatureColor(feature)
    );
  });
  card.addEventListener("mouseleave", () => {
    document.documentElement.style.setProperty("--accent-color", "#e94560");
  });
});

function getFeatureColor(feature) {
  const colors = {
    design: "#6b48ff",
    speed: "#00ddeb",
    responsive: "#00e676",
    support: "#ff9100",
  };
  return colors[feature] || "#e94560";
}

// Gallery Item Click Effect
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("expanded");
    document.querySelectorAll(".gallery-item").forEach((other) => {
      if (other !== item) other.classList.remove("expanded");
    });
  });
});
