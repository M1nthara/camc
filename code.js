// ===========================
// CAMC - Main JavaScript File
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    console.log('CAMC Site Initialized');
    
    // Initialize services
    initializeServices();
    
    // Initialize form
    initializeForm();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize picker hover animation and click handlers
    initializePickerHover();
    
    // Initialize menu toggle
    initializeMenu();
});

// ===========================
// Services Initialization
// ===========================

function initializeServices() {
    const servicesList = document.getElementById('servicesList');
    
    if (!servicesList) return; // Exit if element doesn't exist
    
    const services = [
        {
            title: 'Area Monitoring',
            description: 'Real-time monitoring and reporting of central area activities'
        },
        {
            title: 'Resource Management',
            description: 'Efficient allocation and tracking of resources'
        },
        {
            title: 'Operations Coordination',
            description: 'Centralized coordination of all operational activities'
        },
        {
            title: 'Analytics & Reporting',
            description: 'Comprehensive data analysis and detailed reporting'
        },
        {
            title: '24/7 Support',
            description: 'Round-the-clock support for all operations'
        },
        {
            title: 'System Integration',
            description: 'Seamless integration with existing systems'
        }
    ];
    
    services.forEach(service => {
        const card = createServiceCard(service);
        servicesList.appendChild(card);
    });
}

function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;
    return card;
}

// ===========================
// Form Handling
// ===========================

function initializeForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit();
        });
    }
}

function handleFormSubmit() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    form.reset();
}

// ===========================
// Navigation
// ===========================

function initializeNavigation() {
    // Existing nav-links for a different layout (kept as-is)
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log('Navigating to:', this.getAttribute('href'));
        });
    });

    // Mobile/overlay navigation (icons: n1..n5)
    const n1 = document.getElementById('n1');
    if (!n1) return;

    const sections = {
        inicio: document.querySelector('.inicio'),
        sobre: document.querySelector('.sobre'),
        agenda: document.querySelector('.agenda'),
        kids: document.querySelector('.kids'),
        expo: document.querySelector('.expo'),
        nav: document.querySelector('.nav'),
        mariza: document.querySelector('.mariza'),
    };

    // Helper to show/hide sections
    function setSections({
        showInicio,
        showSobre,
        showAgenda,
        showKids,
        showExpo,
        showNav,
        showMariza,
    }) {
        if (sections.inicio) sections.inicio.style.display = showInicio ? 'block' : 'none';
        if (sections.sobre) sections.sobre.style.display = showSobre ? 'block' : 'none';
        if (sections.agenda) sections.agenda.style.display = showAgenda ? 'block' : 'none';
        if (sections.kids) sections.kids.style.display = showKids ? 'block' : 'none';
        if (sections.expo) sections.expo.style.display = showExpo ? 'block' : 'none';
        if (sections.nav) sections.nav.style.display = showNav ? 'block' : 'none';
        if (sections.mariza) sections.mariza.style.display = showMariza ? 'block' : 'none';
    }


    const menuButton = document.querySelector('.menu');
    const navMenu = document.querySelector('.nav');
    n1.addEventListener('click', function () {
        if (navMenu.classList.contains('active')) {
                // Close the menu with animation
                navMenu.classList.remove('active');
                navMenu.classList.add('closing');
                
                // Remove closing class and hide after animation completes
                setTimeout(() => {
                    navMenu.classList.remove('closing');
                    navMenu.style.display = 'none';
                    setSections({
                    showInicio: true,
                    showSobre: true,
                    showAgenda: false,
                    showKids: false,
                    showExpo: false,
                    showNav: false,
                    showMariza: false,
                    });
                    document.body.style.overflow = '';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 800);
            }
    });

    const n2 = document.getElementById('n2');
    if (n2) {
        n2.addEventListener('click', function () {
            if (navMenu.classList.contains('active')) {
                // Close the menu with animation
                navMenu.classList.remove('active');
                navMenu.classList.add('closing');
                
                // Remove closing class and hide after animation completes
                setTimeout(() => {
                    navMenu.classList.remove('closing');
                    navMenu.style.display = 'none';
                    setSections({
                showInicio: true,
                showSobre: true,
                showAgenda: false,
                showKids: false,
                showExpo: false,
                showNav: false,
                showMariza: false,
            });
            document.body.style.overflow = '';
            if (sections.sobre) {
                sections.sobre.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
                }, 800);
            }
          
        });
    }

    const n3 = document.getElementById('n3');
    if (n3) {
        n3.addEventListener('click', function () {
            if (navMenu.classList.contains('active')) {
                // Close the menu with animation
                navMenu.classList.remove('active');
                navMenu.classList.add('closing');
                
                // Remove closing class and hide after animation completes
                setTimeout(() => {
                    navMenu.classList.remove('closing');
                    navMenu.style.display = 'none';
                    setSections({
                    showInicio: false,
                    showSobre: false,
                    showAgenda: true,
                    showKids: false,
                    showExpo: false,
                    showNav: false,
                    showMariza: false,
                    });
                    document.body.style.overflow = '';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 800);
            }
        });
    }
}


// ===========================
// Picker Hover Animation & Click Handler
// ===========================

function initializePickerHover() {
    const pickerItems = document.querySelectorAll('.picker li');

    // Comprar overlay toggle
    const arrow = document.getElementById('arrow');
    const comprar = document.querySelector('.comprar');

    if (arrow && comprar) {
        arrow.addEventListener('click', function () {
            comprar.style.display = 'none';
        });
    }

    const clickBils = document.querySelectorAll('.clickbil');
    if (clickBils.length && comprar) {
        clickBils.forEach(clickBil => {
            clickBil.addEventListener('click', function () {
                comprar.style.display = 'block';
            });
        });
    }

    // Carousel: activate one <li> every 5s (1..5), switching images accordingly
    const dayItems = Array.from(pickerItems).filter(li => !li.querySelector('img'));
    const contentImages = document.querySelectorAll('.inicio .content img');

    function showImageForLi(li) {
        if (!li || !li.id) return;

        // Hide all images in .content
        contentImages.forEach(img => {
            img.style.display = 'none';
        });

        const targetImage = document.getElementById('i' + li.id);
        if (targetImage) {
            targetImage.style.display = 'block';
        }
    }

    let carouselIndex = 0;
    if (dayItems.length > 0) {
        // Ensure the first one is visible on load
        showImageForLi(dayItems[carouselIndex]);
        dayItems.forEach((li, idx) => li.classList.toggle('active', idx === carouselIndex));


        setInterval(() => {
            carouselIndex = (carouselIndex + 1) % dayItems.length;
            showImageForLi(dayItems[carouselIndex]);

        // Mark active <li>
            dayItems.forEach((li, idx) => {
                li.classList.toggle('active', idx === carouselIndex);
            });

        }, 5000);
    }

    pickerItems.forEach(item => {
        let animationId = null;
        let currentWeight = 300;

        // Hover animation (keep active item at 700)
        item.addEventListener('mouseenter', function() {
            if (item.classList.contains('active')) {
                item.style.fontWeight = 700;
                return;
            }


            // Cancel any ongoing animation
            if (animationId) cancelAnimationFrame(animationId);

            const animate = () => {
                if (currentWeight < 500) {
                    currentWeight += 5;
                    item.style.fontWeight = currentWeight;
                    animationId = requestAnimationFrame(animate);
                } else {
                    item.style.fontWeight = 500;
                }
            };
            animate();
        });

        item.addEventListener('mouseleave', function() {
            if (item.classList.contains('active')) {
                item.style.fontWeight = 700;
                return;
            }


            // Cancel any ongoing animation
            if (animationId) cancelAnimationFrame(animationId);

            currentWeight = 300;
            item.style.fontWeight = 300;
        });


        // Click handler for image switching
        item.addEventListener('click', function() {
            // Get the id of the clicked li
            const imageId = item.id;

            // Skip if it's the last li (the image one)
            if (item.querySelector('img')) {
                return;
            }

            const clickedIndex = dayItems.findIndex(li => li.id === imageId);
            if (clickedIndex >= 0) carouselIndex = clickedIndex;

            showImageForLi(item);
        });
    });

    // Agenda clicks: if clicking #a1 or the visible agenda image for day 1, show .mariza
    const a1 = document.getElementById('a1');
    const i1 = document.getElementById('i1');

    if (a1) {
        a1.addEventListener('click', function () {
            const mariza = document.querySelector('.mariza');
            if (mariza) mariza.style.display = 'block';
        });
    }

    if (i1) {
        i1.addEventListener('click', function () {
            const mariza = document.querySelector('.mariza');
            if (mariza) mariza.style.display = 'block';
        });
    }
}


// ===========================
// Menu Toggle
// ===========================

function initializeMenu() {
    const menuButton = document.querySelector('.menu');
    const navMenu = document.querySelector('.nav');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                // Close the menu with animation
                navMenu.classList.remove('active');
                navMenu.classList.add('closing');
                
                // Re-enable scrolling
                document.body.style.overflow = '';
                
                // Remove closing class and hide after animation completes
                setTimeout(() => {
                    navMenu.classList.remove('closing');
                    navMenu.style.display = 'none';
                }, 800);
            } else {
                // Open the menu with animation
                navMenu.style.display = 'flex';
                navMenu.classList.add('active');
                
                // Disable scrolling
                document.body.style.overflow = 'hidden';
            }
        });
    }
}