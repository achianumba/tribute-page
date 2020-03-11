document.querySelectorAll('.site-nav-link')[1].addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#tribute-link').click();
});