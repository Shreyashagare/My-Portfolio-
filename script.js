// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    if (mobileLinks) {
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to navbar
    const navbar = document.querySelector('nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add navbar transition
    navbar.style.transition = 'transform 0.3s ease-in-out';

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Project card hover effects
    const projectCards = document.querySelectorAll('.bg-cream.rounded-xl');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 0 23.8px 0px rgba(0,0,0,0.25)';
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Typing effect for hero section
    const heroText = document.querySelector('h1');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }

    // Parallax effect for hero image
    const heroImage = document.querySelector('.relative .w-full');
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroImage.style.transform = `translateY(${rate}px)`;
        });
    }

    // Toolbar icons animation
    const toolbarIcons = document.querySelectorAll('.grid.grid-cols-2 .w-16');
    toolbarIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.1}s`;
        icon.classList.add('animate-pulse');
    });

    // Email copy functionality
    const emailElement = document.querySelector('.text-3xl.md\\:text-4xl.text-white');
    if (emailElement) {
        emailElement.addEventListener('click', function() {
            const email = this.textContent.trim();
            navigator.clipboard.writeText(email).then(function() {
                // Show success message
                const originalText = emailElement.textContent;
                emailElement.textContent = 'Email copied!';
                emailElement.style.color = '#ef8354';
                
                setTimeout(() => {
                    emailElement.textContent = originalText;
                    emailElement.style.color = '';
                }, 2000);
            });
        });
        
        emailElement.style.cursor = 'pointer';
        emailElement.title = 'Click to copy email';
    }

    // Resume button functionality
    const resumeBtn = document.querySelector('button:contains("Resume")');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function() {
            // Add your resume download logic here
            alert('Resume download functionality - Add your resume file here');
        });
    }

    // View Project buttons functionality
    const viewProjectBtns = document.querySelectorAll('button:contains("View Project")');
    viewProjectBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            // Add your project link logic here
            alert(`Project ${index + 1} - Add your project link here`);
        });
    });

    // Show more button functionality
    const showMoreBtn = document.querySelector('button:contains("show more")');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            // Add your show more projects logic here
            alert('Show more projects functionality - Add your additional projects here');
        });
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease-in';
    });

    // Initialize page
    document.body.style.opacity = '0';
});

// Utility function to check if element contains text
Element.prototype.contains = function(text) {
    return this.textContent.includes(text);
};

// Add CSS for additional animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fadeInUp {
        animation: fadeInUp 0.6s ease-out;
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    .animate-float {
        animation: float 3s ease-in-out infinite;
    }

    .hero-image {
        transition: transform 0.3s ease-out;
    }

    .hero-image:hover {
        transform: scale(1.02);
    }

    .project-card {
        transition: all 0.3s ease-out;
    }

    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .toolbar-icon {
        transition: transform 0.2s ease-out;
    }

    .toolbar-icon:hover {
        transform: scale(1.1);
    }

    .email-container {
        transition: all 0.3s ease-out;
    }

    .email-container:hover {
        transform: scale(1.05);
        border-color: #ef8354;
    }
`;
document.head.appendChild(style); 