// ============================================
// Personal CV - Homer Batawang
// JavaScript for small UI behaviors
// ============================================

// ----- Mobile navigation toggle -----
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

// Open/close the mobile menu when the hamburger button is clicked
navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

// Close the mobile menu after clicking a link
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
});

// ----- Active nav link highlighting on scroll -----
// Adds a visual highlight to the link of the section currently in view
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(function (section) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPosition >= top && scrollPosition < bottom) {
            navAnchors.forEach(function (anchor) {
                anchor.style.color =
                    anchor.getAttribute("href") === "#" + id ? "#6366f1" : "";
            });
        }
    });
});

// ----- Scroll reveal animation -----
// Elements with the "reveal" class fade/slide in when they enter the screen
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // animate only once
            }
        });
    },
    { threshold: 0.15 }
);

revealElements.forEach(function (el) {
    observer.observe(el);
});
