// Content for different audiences
const audienceContent = {
    recruiter: {
        text: "I'm Shreyash, a designer studying Humanizing Technology at NMIMS. I create thoughtful, <span class='highlight'>user-centered</span> experiences that <span class='highlight'>blend tech</span>, <span class='highlight'>storytelling</span>, and <span class='highlight'>systems thinking</span> to spark meaningful change."
    },
    "product-managers": {
        text: "I'm Shreyash, a designer who understands the <span class='highlight'>business impact</span> of design decisions. I create <span class='highlight'>scalable solutions</span> that balance <span class='highlight'>user needs</span> with <span class='highlight'>product goals</span>, ensuring every design choice drives measurable value."
    },
    developers: {
        text: "I'm Shreyash, a designer who speaks your language. I create <span class='highlight'>feasible designs</span> that work with your <span class='highlight'>technical constraints</span>, write clean <span class='highlight'>design specs</span>, and collaborate seamlessly to build <span class='highlight'>exceptional products</span> together."
    }
};

// DOM elements
const tabButtons = document.querySelectorAll('.tab-btn');
const dynamicText = document.getElementById('dynamic-text');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    addSmoothTransitions();
});

// Tab switching functionality
function initializeTabs() {
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update content
            const audience = this.getAttribute('data-audience');
            updateContent(audience);
        });
    });
}

function updateContent(audience) {
    const content = audienceContent[audience];
    if (content) {
        // Fade out effect
        dynamicText.style.opacity = '0';
        dynamicText.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            dynamicText.innerHTML = content.text;
            // Fade in effect
            dynamicText.style.opacity = '1';
            dynamicText.style.transform = 'translateY(0)';
        }, 200);
    }
}

// Add smooth transitions to elements
function addSmoothTransitions() {
    // Set initial state for dynamic text
    dynamicText.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    // Add fade-in animations for page load
    const elements = document.querySelectorAll('.greeting, .name-section, .subtitle, .collaboration-tabs, #dynamic-text');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.backgroundColor = 'rgba(248, 246, 243, 0.95)';
    } else {
        navbar.style.backdropFilter = 'none';
        navbar.style.backgroundColor = '#f8f6f3';
    }
});

// Resume button functionality
document.querySelector('.resume-btn').addEventListener('click', function() {
    // Add your resume download logic here
    console.log('Resume download clicked');
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        // Handle tab navigation
        const focusableElements = document.querySelectorAll('button, a, input, textarea, select');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// Touch support for mobile devices
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        // Handle swipe gestures if needed
        console.log('Swipe detected:', diff > 0 ? 'up' : 'down');
    }
}

// Add hover effects for better interactivity
document.querySelectorAll('.nav-link, .resume-btn, .tab-btn').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});