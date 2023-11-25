document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    var menuIcon = document.getElementById('menu-icon');
    var searchIcon = document.querySelector('.header-icon .material-icons:nth-child(1)');
    var menuItems = document.querySelector('.menu-items');
    var searchBox = document.querySelector('.search-box');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
        menuItems.style.display = navbar.classList.contains('active') ? 'flex' : 'none';
        searchBox.style.display = 'none';
    });

    searchIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
        searchBox.style.display = navbar.classList.contains('active') ? 'block' : 'none';
        menuItems.style.display = 'none';
    });
});