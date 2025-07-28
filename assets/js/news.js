document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality for news sections
    const newsTabs = document.querySelectorAll('.news__tab');
    const newsContents = document.querySelectorAll('.news__content');
    
    // Function to switch tabs
    function switchTab(tab) {
        // Remove active class from all tabs
        newsTabs.forEach(t => t.classList.remove('active-tab'));
        // Add active class to clicked tab
        tab.classList.add('active-tab');
        
        // Hide all content
        newsContents.forEach(content => {
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
    newsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab);
        });
    });
    
    // Set first tab as active by default
    if (newsTabs.length > 0) {
        switchTab(newsTabs[0]);
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.subscribe__form');
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
});

// Function to initialize interactive elements
function initInteractiveElements() {
    // Add any additional initialization code here
    console.log('News page interactive elements initialized');
}