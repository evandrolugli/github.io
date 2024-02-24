document.addEventListener('DOMContentLoaded', function () {

    const mobileMenuButton = document.getElementById('mobile-menu');
    const menuList = document.getElementById('menu');

    mobileMenuButton.addEventListener('click', function () {
        menuList.classList.toggle('show');
    });
});

function loadPage(page) {
    fetch(`partials/${page}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}