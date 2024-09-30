// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to scroll to the featured section
function scrollToFeatured() {
    const featuredSection = document.querySelector('.featured-products');
    if (featuredSection) {
        featuredSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Function to open Instagram link
function openInstagram() {
    window.open('https://www.instagram.com/yourprofile', '_blank');
}

// Event listeners
document.querySelector('.home-button').addEventListener('click', scrollToTop);
document.querySelector('.store-button').addEventListener('click', scrollToFeatured);
document.querySelector('.connect-us-button').addEventListener('click', openInstagram);


// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Event listeners for "See More" buttons
document.querySelector('.see-more-phone-cases').addEventListener('click', () => scrollToSection('phone-cases'));
document.querySelector('.see-more-t-shirts').addEventListener('click', () => scrollToSection('t-shirts'));
document.querySelector('.see-more-handbags').addEventListener('click', () => scrollToSection('handbags'));
document.querySelector('.see-more-key-chains').addEventListener('click', () => scrollToSection('key-chains'));
document.querySelector('.see-more-glass-paintings').addEventListener('click', () => scrollToSection('glass-paintings'));
