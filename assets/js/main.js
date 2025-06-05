// desktop sidebar js
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebar-right');
    const sideMenuClose = document.querySelector('.sideMenuCls');
    const sidemenu = document.querySelector('.sidemenu-wrapper');

    if (sidebarToggle && sidemenu) {
        sidebarToggle.addEventListener('click', function() {
            sidemenu.classList.toggle('show');
        });
    }

    if (sideMenuClose && sidemenu) {
        sideMenuClose.addEventListener('click', function() {
            sidemenu.classList.remove('show');
        });
    }
});

// menu sidebar
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('menu-slider');
    const sideMenuClose = document.querySelector('.menu-toggle-close');
    const sidemenu = document.querySelector('.th-menu-wrapper');

    if (sidebarToggle && sidemenu) {
        sidebarToggle.addEventListener('click', function() {
            sidemenu.classList.toggle('th-body-visible');
        });
    }

    if (sideMenuClose && sidemenu) {
        sideMenuClose.addEventListener('click', function() {
            sidemenu.classList.remove('th-body-visible');
        });
    }
});


// sub menu sidebar
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sub-menu');
    const sideMenuClose = document.querySelector('th-mean-expand');
    const sidemenu = document.querySelector('.th-item-has-children');

    if (sidebarToggle && sidemenu) {
        sidebarToggle.addEventListener('click', function() {
            sidemenu.classList.toggle('th-active');
        });
    }

    if (sideMenuClose && sidemenu) {
        sideMenuClose.addEventListener('click', function() {
            sidemenu.classList.remove('th-active');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sub-menu');
    const sideMenuClose = document.querySelector('.th-mean-expand');
    const sidemenu = document.querySelector('.th-submenu');

    if (sidebarToggle && sidemenu) {
        sidebarToggle.addEventListener('click', function(e) {
            e.preventDefault(); // prevent default anchor behavior
            sidemenu.classList.toggle('d-none'); // toggle visibility
        });
    }

    if (sideMenuClose && sidemenu) {
        sideMenuClose.addEventListener('click', function(e) {
            e.preventDefault();
            sidemenu.classList.add('d-none'); // ensure it's hidden
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sub-menu1');
    const sideMenuClose = document.querySelector('.th-mean-expand1');
    const sidemenu = document.querySelector('.th-submenu1');

    if (sidebarToggle && sidemenu) {
        sidebarToggle.addEventListener('click', function(e) {
            e.preventDefault(); // prevent default anchor behavior
            sidemenu.classList.toggle('d-none'); // toggle visibility
        });
    }

    if (sideMenuClose && sidemenu) {
        sideMenuClose.addEventListener('click', function(e) {
            e.preventDefault();
            sidemenu.classList.add('d-none'); // ensure it's hidden
        });
    }

});

document.addEventListener('DOMContentLoaded', function() {
    if (typeof $ !== 'undefined' && typeof $.fn.slick !== 'undefined') {
        $('.slider').slick({
            slidesToShow: 1, // Show one slide at a time
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000, // 3 seconds
            // infinite: true,
            // pauseOnHover: false
        });
    } else {
        console.error('jQuery or Slick not loaded.');
    }
});

function triggerImageAnimations() {
    const topImg = document.querySelector('.top-left-image');
    const bottomImg = document.querySelector('.bottom-left-image');

    // Remove classes to reset animation
    topImg.classList.remove('animated-top-left');
    bottomImg.classList.remove('animated-bottom-left');

    // Re-add classes to re-trigger animation
    void topImg.offsetWidth; // Trigger reflow
    void bottomImg.offsetWidth;

    topImg.classList.add('animated-top-left');
    bottomImg.classList.add('animated-bottom-left');
}

// Trigger first immediately
triggerImageAnimations();

// Repeat every 7 seconds
setInterval(triggerImageAnimations, 7000);


// let number = prompt("Enter a number to generate its multiplication table:");


// let table = "";
// let i = 1;

// while (i <= 10) {
//     table += `${number} × ${i} = ${number * i}\n`;
//     i++;

// }
// console.log(table);