// ================================
// MENU MOBILE
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Fermer le menu après avoir cliqué sur un lien

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================================
// FORMULAIRE
// ================================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Merci pour votre message !");

    form.reset();

});
// ================================
// MODE SOMBRE
// ================================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️";
    } else {
        darkModeBtn.textContent = "🌙";
    }

});