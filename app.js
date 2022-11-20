const hamburger = document.querySelector('.hamburger');
const navlists = document.querySelector('.navlists');
const bar = document.querySelector('.bar');

hamburger.addEventListener('click', () => {
    navlists.classList.toggle('active');
    hamburger.classList.toggle('active');
})