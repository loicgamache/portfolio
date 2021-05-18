// Hamburger menu toggle
document.querySelector("header .hamburger").addEventListener('click', function() {
  this.classList.toggle("close");
  document.querySelector("header .menu").classList.toggle("open");
});

// Open and close projects popins
document.querySelectorAll('.projetsContainer .projet .projetLink').forEach(item => {
  item.addEventListener('click', () => {
    item.parentNode.querySelector(".popinContainer").classList.add("open");
  });
});

document.querySelectorAll(".projetsContainer .projet .popinContainer").forEach(item => {
  item.addEventListener('click', e => {
    if (e.target === item || e.target === item.querySelector(".close")) {
      item.classList.remove("open");
    }
  });
});

// Close popins on escape key
document.body.addEventListener('keydown', function(e) {
  const openedPopin = document.querySelector(".projetsContainer .projet .popinContainer.open");
  if (e.key == "Escape" && openedPopin) {
    openedPopin.classList.remove("open");
  }
});

// Smooth scroll on anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});