// Nav Underliner

// Select all nav links
const navLink = document.querySelectorAll('.nav-links a');

// Add a click event listener to each link
navLink.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        navLink.forEach(link => link.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

// Update the navbar and url

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    let currentPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the section is in view
        if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the corresponding link
            navLinks[index].classList.add('active');

            // Update the URL hash without reloading the page
            const currentHash = window.location.hash;
            const sectionId = section.getAttribute('id');
            if (currentHash !== `#${sectionId}`) {
                history.pushState(null, null, `#${sectionId}`);
            }
        }
    });
});

// Logo Slider 

document.addEventListener("DOMContentLoaded", function() {
    let currentLogoIndex = 0;
    const logos = document.querySelectorAll('.logo-container img');
    const totalLogos = logos.length;

    function showNextLogo() {
        logos[currentLogoIndex].classList.remove('active');
        currentLogoIndex = (currentLogoIndex + 1) % totalLogos;
        logos[currentLogoIndex].classList.add('active');
    }

    setInterval(showNextLogo, 3000); // Change logo every 3 seconds
});

// Menu Bar

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fade in effect

document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const header = document.querySelector('header');
    const leftElement = document.querySelector('.left');
    const rightElement = document.querySelector('.right');

    // Function to add the fade-in class
    const fadeInOnScroll = (element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            element.classList.add('fade-in');
        }
    };

    // Fade in elements on page load
    fadeInOnScroll(header);
    fadeInOnScroll(leftElement);
    fadeInOnScroll(rightElement);

    // Add scroll event listener
    window.addEventListener('scroll', function () {
        fadeInOnScroll(header);
        fadeInOnScroll(leftElement);
        fadeInOnScroll(rightElement);
    });
});


// h1 and p slide ins

document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the slide-in classes
    const slideElements = document.querySelectorAll('.scroll-slide-in');

    // Function to check if the element is in view
    const slideInOnScroll = () => {
        slideElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 100) {
                element.classList.add('visible');
            }
        });
    };

    // Check visibility on page load
    slideInOnScroll();

    // Listen for scroll events
    window.addEventListener('scroll', slideInOnScroll);
});


//Previous Years Questions

document.querySelectorAll('.accordion-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
        const content = tab.nextElementSibling;
        
        // Close any other open content
        document.querySelectorAll('.accordion-content.active').forEach(function(openContent) {
            if (openContent !== content) {
                openContent.classList.remove('active');
            }
        });
        
        // Toggle the clicked content
        content.classList.toggle('active');
    });
});

// Tab switching function
function openTab(event, tabId) {
    var i, tabContent, tabButtons;

    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }

    // Remove active class from all buttons
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the current tab and add active class to the button
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Accordion functionality
var acc = document.getElementsByClassName("accordion-tab");
for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    }
}

// Add loading effect and form submission
document.getElementById('submitBtn').addEventListener('click', function(e) {
    var button = this;
    button.classList.add('loading');
    button.innerHTML = '<div class="loader"></div>'; // Show the loader

    // Simulate a loading delay of 2 seconds
    setTimeout(function() {
        button.classList.remove('loading');
        button.textContent = 'Submitted';
        button.disabled = true; // Disable the button after submission
    }, 3000);
});

// Form submission handling code
const scriptURL = 'https://script.google.com/macros/s/AKfycbxtLsmIOylZkx8IdupxEKwkovvbgoDFlO8lgIBXPzPzR7KR2xzekzGw0Kz9ARD-sU3y/exec';
const form = document.getElementById('complaint-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData(form);

    // Send form data to Google Apps Script
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                // Clear input values after 2 seconds
                setTimeout(() => {
                    form.reset();
                    checkInputs(); // Recheck inputs to disable button again
                }, 0);
            } else {
                console.error('Error:', data.error);
                alert('Error: ' + data.error);
            }
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('Error: ' + error.message);
        });
});

const inputs = document.querySelectorAll('#complaint-form input, #complaint-form textarea');
    const phoneInput = document.getElementById('phone');
    const submitBtn = document.getElementById('submitBtn');

    // Check if all fields are filled and phone number is 10 digits
    function checkInputs() {
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        const phoneValid = phoneInput.value.length === 10; // Check if phone number has exactly 10 digits
        submitBtn.disabled = !(allFilled && phoneValid); // Enable or disable submit button
    }

    // Listen for input on each field
    inputs.forEach(input => input.addEventListener('input', checkInputs));

// Select all event cards
const eventCards = document.querySelectorAll('.event-card');

// Select all gallery overlays
const galleries = document.querySelectorAll('.gallery-overlay');

// Function to open the corresponding gallery
eventCards.forEach(card => {
    card.addEventListener('click', () => {
        const galleryId = card.getAttribute('data-gallery');
        const gallery = document.getElementById(galleryId);

        if (gallery) {
            gallery.classList.add('active'); // Display the gallery by adding 'active' class
        }
    });
});

// Select all close buttons
const closeButtons = document.querySelectorAll('.close-btn');

// Function to close the gallery when the close button is clicked
closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        btn.closest('.gallery-overlay').classList.remove('active'); // Hide the gallery by removing 'active' class
    });
});

// Function to close the gallery when clicking outside the gallery content
galleries.forEach(gallery => {
    gallery.addEventListener('click', (e) => {
        if (e.target === gallery) {
            gallery.classList.remove('active');
        }
    });
});

