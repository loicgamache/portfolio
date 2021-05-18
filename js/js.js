document.querySelector("header .hamburger").addEventListener('click', function() {
    this.classList.toggle("close");
    document.querySelector("header .menu").classList.toggle("open");
});

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

document.body.addEventListener('keydown', function(e) {
    const openedPopin = document.querySelector(".projetsContainer .projet .popinContainer.open");
    if (e.key == "Escape" && openedPopin) {
        openedPopin.classList.remove("open");
    }
});