console.log("Hello world!");

const myName = "Florent Sahiti";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile naviagtion
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});

/////////////////////////////////////
//Sticky navigation
const sectionHeroEl = document.querySelector('.section-hero')

const obs = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {

        document.body.classList.add('sticky')
    }

    if (ent.isIntersecting === true) {

        document.body.classList.remove('sticky')
    }
}, {
    ///In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",

});
obs.observe(sectionHeroEl);






///THIS IS THE PART OF THE CODE FOR THE LINK BECAUSE IT IS A BUG IN CHROME THAT DOESN'T WORK SO IF THE LINKS WORK NXT LINE /////
///AND THE MENU IN MOBILE VERSION DOESNT WORK COMMENT THIS CODE THEN THE MENU BAR WILL WORK/////////////
jQuery(document).ready(function() { var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor); if (window.location.hash && isChrome) { setTimeout(function() { var hash = window.location.hash;
            window.location.hash = “”;
            window.location.hash = hash; }, 300); } });









            