const accordion = document.querySelectorAll('.accordion');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', accordionToggle)
}

function accordionToggle() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}