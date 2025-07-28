document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality for features sections
    const featureTabs = document.querySelectorAll('.features__tab');
    const featureContents = document.querySelectorAll('.features__content');
    
    // Function to switch tabs
    function switchTab(tab) {
        // Remove active class from all tabs
        featureTabs.forEach(t => t.classList.remove('active-tab'));
        // Add active class to clicked tab
        tab.classList.add('active-tab');
        
        // Hide all content
        featureContents.forEach(content => {
            content.classList.remove('active-content');
            content.style.display = 'none';
        });
        
        // Show corresponding content
        const targetId = tab.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        
        if (targetContent) {
            targetContent.classList.add('active-content');
            // Use setTimeout to ensure the display change triggers the animation
            setTimeout(() => {
                targetContent.style.display = 'block';
            }, 10);
        }
    }
    
    // Add click event to all tabs
    featureTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab);
        });
    });
    
    // Set first tab as active by default
    if (featureTabs.length > 0) {
        switchTab(featureTabs[0]);
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                // In a real application, you would send this to your server
                alert(`Thank you for subscribing with ${email}!`);
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Initialize any other interactive elements
    initInteractiveElements();
    
    // Initialize Swiper if needed
    if (typeof Swiper !== 'undefined') {
        const featureSwiper = new Swiper(".features__container", {
            spaceBetween: 30,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    }
});

// Function to initialize interactive elements
function initInteractiveElements() {
    console.log('Features page interactive elements initialized');
    
    // Add any additional initialization code here
}