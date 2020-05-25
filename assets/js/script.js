const hmbgr = document.querySelector('.hamburger');
const lines = document.querySelectorAll('.line');

hmbgr.addEventListener('click', function(){
    toggleClass('.voile', 'appear');
    toggleClass('.nav-links', 'appear');
    toggleClass('.nav-links-container', 'appear');
    toggleClass('.logo-text', 'text-white');
    toggleClass('.logo-icon', 'logo-icon-opened');

    [...lines].forEach(el => {
        el.classList.toggle('white');
        el.classList.toggle('cross');
    });
})


/**
 * Séléctionne un élément afin de lui toggle une classe
 * @param {HTMLElement} elementToToggle l'élément HTML à sélectionner
 * @param {string} classToToggle La classe à toggle à l'élment
 */
const toggleClass = (elementToToggle, classToToggle) => {
    document.querySelector(elementToToggle).classList.toggle(classToToggle);
}