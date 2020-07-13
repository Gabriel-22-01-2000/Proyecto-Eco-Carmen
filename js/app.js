const newSlide = () => {
    const burger = document.querySelector('.burger');
    const nav  = document.querySelector('ul');
    const navlink = document.querySelectorAll('ul li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    burger.classList.toggle('toggle');
    });


};

newSlide();