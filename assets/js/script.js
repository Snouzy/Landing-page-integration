const hmbgr = document.querySelector('.hamburger');
hmbgr.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('blue');
    document.querySelector('.nav-links').classList.toggle('appear');
    const lines = document.querySelectorAll('.line');
    [...lines].forEach(el => el.classList.toggle('white'));
    document.querySelector('.logo-text').classList.toggle('text-white');
})