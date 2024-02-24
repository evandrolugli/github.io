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

    mobileMenuButton.addEventListener('click', function () {
        menuList.classList.toggle('show');
    });
});

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data;
        })
        .catch(error => console.error("Error loading content:", error));
}