const hmbgr = document.querySelector('.hamburger');
const lines = document.querySelectorAll('.line');

hmbgr.addEventListener('click', function(){
    toggleClass('.voile', 'appear');
    toggleClass('.nav-links', 'appear');
    toggleClass('.logo-text', 'text-white');
    toggleClass('.logo-icon', 'logo-icon-opened');

    [...lines].forEach(el => {
        el.classList.toggle('white');
        el.classList.toggle('cross');
    });
})

const toggleClass = (elementToToggle, classToToggle) => {
    document.querySelector(elementToToggle).classList.toggle(classToToggle);
}