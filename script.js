function toggleSkillsSection(section) {
    document.getElementById('skills-section-new').classList.add('skills-hidden');
    document.getElementById('tools-section-new').classList.add('skills-hidden');
    document.getElementById('skills-btn-new').classList.remove('active');
    document.getElementById('tools-btn-new').classList.remove('active');
    document.getElementById(section).classList.remove('skills-hidden');
    document.getElementById(section + '-btn-new').classList.add('active');
}
// Custom Navbar JavaScript

// Function to scroll the navbar by a specified distance
function customNavbarScroll(distance) {
    const navbar = document.getElementById('customNavbar');
    navbar.scrollBy({
        top: 0,
        left: distance,
        behavior: 'smooth'
    });
}

// Variables for scroll indicators
const customNavbar = document.getElementById('customNavbar');
const customLeftIndicator = document.querySelector('.custom-navbar-container .custom-navbar-scroll-indicator.left');
const customRightIndicator = document.querySelector('.custom-navbar-container .custom-navbar-scroll-indicator.right');

// Function to update the visibility of scroll indicators based on scroll position
function updateCustomNavbarIndicators() {
    // Show or hide left indicator
    if (customNavbar.scrollLeft > 0) {
        customLeftIndicator.style.display = 'flex';
    } else {
        customLeftIndicator.style.display = 'none';
    }

    // Show or hide right indicator
    if (customNavbar.scrollWidth - customNavbar.clientWidth - customNavbar.scrollLeft > 5) {
        customRightIndicator.style.display = 'flex';
    } else {
        customRightIndicator.style.display = 'none';
    }
}

// Initial check to set the visibility of scroll indicators
updateCustomNavbarIndicators();

// Update indicators on scroll
customNavbar.addEventListener('scroll', updateCustomNavbarIndicators);

// Update indicators on window resize
window.addEventListener('resize', updateCustomNavbarIndicators);



