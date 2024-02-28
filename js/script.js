document.addEventListener('DOMContentLoaded', function () {
    loadContent("partials/about.html"); // Load default content

    // Add event listeners for navigation
    document.querySelectorAll("nav a").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetPartial = this.getAttribute("href").substring(1) + ".html";
            loadContent("partials/" + targetPartial);
        });
    });

    const mobileMenuButton = document.getElementById('mobile-menu');
    const menuList = document.getElementById('menu');
    const mainContent = document.getElementById('main-content');

    mobileMenuButton.addEventListener('click', function () {
        console.log('oi')
        menuList.classList.toggle('show');
        mainContent.classList.toggle('menu-open');
    });
});

function loadContent(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("main-content").innerHTML = data;
        })
        .catch(error => console.error("Error loading content:", error));
}