const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];
const imageSource = ''; // Add the correct image source path here

// New code
let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeForm = document.querySelector('#coffee-form');
let coffeeSearch = document.querySelector('#searchBox');
let coffeeAdd = document.querySelector('#button-addon2');

// Include the functions and event listeners from the first JavaScript code here
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
}

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate in - Nav Items
        navAnimation('out', 'in');
    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate out - Nav Items
        navAnimation('in', 'out');
    }
}

function renderCoffee(coffee) {
    let html = '<div class="col-4 mt-5 coffee-item">';
    html += '<div class="coffee-item-content">';

    // Update the image source based on the coffee roast
    if (coffee.roast === 'light') {
        html += '<img class="coffee-image" src="Light_Roast.jpg" alt="light coffee">';
    } else if (coffee.roast === 'medium') {
        html += '<img class="coffee-image" src="Medium_Roast.jpg" alt="medium coffee">';
    } else if (coffee.roast === 'dark') {
        html += '<img class="coffee-image" src="Dark_Roast.jpg" alt="dark coffee">';
    }

    html += '<div class="coffee-text">';
    html += '<div class="d-flex">';
    html += '<h2 class="text-light coffee-text">' + coffee.name + '</h2>';
    html += '<p class="text-light coffee-text">' + coffee.roast + '</p>';
    html += '</div>'; // Close coffee-text container
    html += '</div>'; // Close coffee-item-content container
    html += '</div>'; // Close col-4 container

    return html;
}

function renderCoffees(coffees) {
    tbody.innerHTML = ''; // Clear the table body content
    tbody.innerHTML = renderCoffees(coffees);
}

function updateCoffees(event) {
    event.preventDefault();
    const searchedCoffee = coffeeSearch.value.toLowerCase();
    const selectedRoast = roastSelection.value.toLowerCase();
    const searchValue = coffeeSearch.value.toLowerCase();
    let filteredCoffees = coffees;
    if (selectedRoast !== 'all') {
        filteredCoffees = filteredCoffees.filter(function (coffee) {
            return coffee.roast.toLowerCase() === selectedRoast;
        });
    }
    if (coffeeSearch !== '') {
        filteredCoffees = filteredCoffees.filter(function (coffee) {
            return coffee.name.toLowerCase().includes(searchValue);
        });
    }

    if (filteredCoffees.length === 0) {
        tbody.innerHTML = `<h3>No coffees were found</h3>`;
    } else {
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}

function addCoffee(event) {
    event.preventDefault();
    let newCoffee = {};
    newCoffee.id = coffees.length + 1;
    newCoffee.name = document.getElementById('addCoffee').value;
    newCoffee.roast = document.getElementById('roast-selection-new').value;
    console.log(newCoffee);
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    { id: 1, name: 'Light City', roast: 'light' },
    { id: 2, name: 'Half City', roast: 'light' },
    { id: 3, name: 'Cinnamon', roast: 'light' },
    { id: 4, name: 'City', roast: 'medium' },
    { id: 5, name: 'American', roast: 'medium' },
    { id: 6, name: 'Breakfast', roast: 'medium' },
    { id: 7, name: 'High', roast: 'dark' },
    { id: 8, name: 'Continental', roast: 'dark' },
    { id: 9, name: 'New Orleans', roast: 'dark' },
    { id: 10, name: 'European', roast: 'dark' },
    { id: 11, name: 'Espresso', roast: 'dark' },
    { id: 12, name: 'Viennese', roast: 'dark' },
    { id: 13, name: 'Italian', roast: 'dark' },
    { id: 14, name: 'French', roast: 'dark' },
];

tbody.innerHTML = renderCoffees(coffees);

coffeeSearch.addEventListener('input', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
coffeeAdd.addEventListener('click', addCoffee);

let userEmail = prompt('Sign Up For Our Rewards and Get Brew Brother Bucks with Every Purchase!             Email :');

if (userEmail != null) {
    alert('Thanks For Signing Up Check Your Email For Confirmation');
} else {
    alert('Maybe next time :)');
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});
