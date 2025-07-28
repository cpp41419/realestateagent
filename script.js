// Consolidate all initialization into a single window load event
window.addEventListener('load', function() {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Set default ease for better performance
    gsap.defaults({
        ease: "power2.out",
        duration: 0.6
    });
    
    // Initialize smooth scrolling with better performance
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    // Table of Contents functionality
    const tocToggle = document.getElementById('toc-toggle');
    const tocContainer = document.getElementById('toc-container');
    const tocList = document.getElementById('toc-list');
    
    if (tocToggle && tocContainer) {
        tocToggle.addEventListener('click', function() {
            tocContainer.classList.toggle('collapsed');
        });
    }
    
    // Active section tracking for TOC
    const sections = document.querySelectorAll('section[id]');
    const tocLinks = document.querySelectorAll('.toc-list a');
    
    function updateActiveTocItem() {
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                tocLinks.forEach(link => link.classList.remove('active'));
                const correspondingTocLink = document.querySelector(`a[href="#${section.id}"]`);
                if (correspondingTocLink) {
                    correspondingTocLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveTocItem);
    
    // Reading progress functionality
    const progressBar = document.getElementById('progress-bar');
    
    function updateReadingProgress() {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (window.scrollY / scrollTotal) * 100;
        
        if (progressBar) {
            progressBar.style.width = Math.min(scrollProgress, 100) + '%';
        }
    }
    
    window.addEventListener('scroll', updateReadingProgress);
    
    // Social sharing functionality
    const shareTwitter = document.getElementById('share-twitter');
    const shareLinkedin = document.getElementById('share-linkedin');
    const sharePrint = document.getElementById('share-print');
    
    if (shareTwitter) {
        shareTwitter.addEventListener('click', function() {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(document.title);
            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=550,height=420');
        });
    }
    
    if (shareLinkedin) {
        shareLinkedin.addEventListener('click', function() {
            const url = encodeURIComponent(window.location.href);
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=550,height=420');
        });
    }
    
    if (sharePrint) {
        sharePrint.addEventListener('click', function() {
            window.print();
        });
    }

    // Animated Counters
    function animateCounter(element, target, suffix = '', duration = 2000) {
        if (!element) return;
        
        gsap.fromTo(element, 
            { textContent: 0 },
            {
                textContent: target,
                duration: duration / 1000,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate: function() {
                    element.textContent = Math.floor(this.targets()[0].textContent).toLocaleString() + suffix;
                }
            }
        );
    }

    // Initialize counters when they come into view with error checking
    ScrollTrigger.create({
        trigger: '.data-section',
        start: 'top 80%',
        onEnter: () => {
            const commissionCounter = document.getElementById('commission-counter');
            const medianPrice = document.getElementById('median-price');
            const agentCount = document.getElementById('agent-count');
            
            if (commissionCounter) animateCounter(commissionCounter, 2.5, '%');
            if (medianPrice) {
                animateCounter(medianPrice, 1000000, '');
                // Format median price properly after animation
                setTimeout(() => {
                    if (medianPrice) medianPrice.textContent = '$1,000,000';
                }, 2100);
            }
            if (agentCount) animateCounter(agentCount, 45000, '');
        }
    });

    // Commission Calculator
    const housePriceInput = document.getElementById('house-price');
    const commissionAmount = document.getElementById('commission-amount');
    const hourlyRate = document.getElementById('hourly-rate');
    
    function updateCalculator() {
        if (!housePriceInput || !commissionAmount || !hourlyRate) return;
        
        const housePrice = parseInt(housePriceInput.value) || 0;
        const commission = housePrice * 0.025;
        const hourly = commission / 40;
        
        commissionAmount.textContent = '$' + commission.toLocaleString();
        hourlyRate.textContent = '$' + Math.round(hourly).toLocaleString() + '/hour';
    }
    
    if (housePriceInput) {
        housePriceInput.addEventListener('input', updateCalculator);
        updateCalculator(); // Initialize
    }

    // Optimized parallax effects
    const parallaxElements = document.querySelectorAll('[data-scroll-speed]');
    
    parallaxElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-scroll-speed')) || 1;
        
        gsap.fromTo(element, 
            { y: 0 },
            {
                y: () => -50 * speed,
                ease: 'none',
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                    invalidateOnRefresh: true
                }
            }
        );
    });

    // Optimized fade in animations with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (window.gsap) {
                    gsap.fromTo(entry.target, 
                        {
                            opacity: 0,
                            y: 30
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power2.out"
                        }
                    );
                } else {
                    // Fallback animation
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should fade in
    document.querySelectorAll('.data-card, .article-card, .timeline-item, .section-content').forEach(el => {
        observer.observe(el);
    });
    
    // Lazy loading for images
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });
    
    // Observe all images for lazy loading
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Optimized highlight animation
    const highlights = document.querySelectorAll('.highlight');
    
    highlights.forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            start: 'top 80%',
            onEnter: () => {
                gsap.fromTo(element,
                    { backgroundSize: '0% 0.3em' },
                    {
                        backgroundSize: '100% 0.3em',
                        duration: 1,
                        ease: 'power2.out'
                    }
                );
            }
        });
    });

    // Optimized persona reveal animation
    ScrollTrigger.create({
        trigger: '.persona-section',
        start: 'top 70%',
        onEnter: () => {
            const personaBefore = document.querySelector('.persona-before');
            const personaAfter = document.querySelector('.persona-after');
            
            if (personaBefore) {
                gsap.fromTo(personaBefore, 
                    { x: -50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
                );
            }
            
            if (personaAfter) {
                gsap.fromTo(personaAfter, 
                    { x: 50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power2.out' }
                );
            }
        }
    });

    // Optimized CTA pulse animation
    const ctaPrimary = document.querySelector('.cta-primary');
    if (ctaPrimary) {
        gsap.to(ctaPrimary, {
            scale: 1.02,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut'
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target && lenis) {
                lenis.scrollTo(target);
            }
        });
    });

    // Hero entrance animation
    const heroHeadline = document.querySelector('.hero-headline');
    const heroSubheadline = document.querySelector('.hero-subheadline');
    
    if (heroHeadline) {
        gsap.fromTo(heroHeadline, 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
        );
    }
    
    if (heroSubheadline) {
        gsap.fromTo(heroSubheadline, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
        );
    }

    // Click tracking for analytics
    document.querySelectorAll('.cta-primary, .cta-secondary, .article-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Track clicks - replace with your analytics
            console.log('CTA clicked:', this.textContent, this.href);
        });
    });
    
    // Scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollToTopBtn.setAttribute('title', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);
    
    function toggleScrollToTop() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', toggleScrollToTop);
    
    scrollToTopBtn.addEventListener('click', function() {
        if (lenis) {
            lenis.scrollTo(0);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    // Initialize on load
    updateActiveTocItem();
    updateReadingProgress();
    toggleScrollToTop();
});

// Debounced resize handler
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            try {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            } catch (error) {
                console.warn('Performance monitoring failed:', error);
            }
        }, 0);
    });
}

// Error handling for script failures
window.addEventListener('error', function(event) {
    console.error('Script error:', event.error);
    // Graceful degradation - ensure basic functionality still works
    if (!window.gsap) {
        console.warn('GSAP not loaded, falling back to basic animations');
        // Add basic CSS animations as fallback
        document.body.classList.add('no-gsap');
    }
    if (!window.Lenis) {
        console.warn('Lenis not loaded, using native smooth scroll');
        document.documentElement.style.scrollBehavior = 'smooth';
    }
});

// Fallback for browsers without modern JS support
if (!window.Promise || !window.fetch || !Array.prototype.forEach) {
    console.warn('Browser lacks modern JS support, providing fallbacks');
    // Add polyfills or basic functionality
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(callback, thisArg) {
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
}