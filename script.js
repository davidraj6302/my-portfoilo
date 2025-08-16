// Optional JavaScript for menu toggle
    
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');

        menuIcon.onclick = () => {
            navbar.classList.toggle('active');
        }
    