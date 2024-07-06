document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('.main-nav ul');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('header'); // Header'ı seçiyoruz

    // Toggle menu
    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    // Smooth scroll for menu links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for header height
                behavior: 'smooth'
            });

            nav.classList.remove('show'); // Close menu on link click
        });
    });

    // Highlight active menu link on scroll
    window.addEventListener('scroll', function() {
        let fromTop = window.scrollY + 70; // Adjust for header height

        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Scroll to top button visibility
        const scrollTopButton = document.getElementById('scroll-top');
        if (window.scrollY > 100) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }

        // Header'a scroll sınıfı ekleme/kaldırma
        if (window.scrollY > 0) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });

    // Scroll to top button functionality
    document.getElementById('scroll-top').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Learn More button functionality
    document.getElementById('learn-more').addEventListener('click', function() {
        const targetSection = document.getElementById('about');
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for header height
            behavior: 'smooth'
        });
    });
});
