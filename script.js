const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("selected");
  });
});

const typingText = document.getElementById("typing-text");

const text = "CS Student · Climber · Creative Builder";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingText.textContent += text[index];
    index++;
    setTimeout(typeEffect, 60);
  }
}

typingText.textContent = "";
typeEffect();