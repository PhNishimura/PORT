document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
});



document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    const checkVisibility = () => {
        portfolioItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const itemBottom = item.getBoundingClientRect().bottom;

            if (itemTop < window.innerHeight && itemBottom > 0) {
                item.classList.add('visible');
            }
        });
    };


    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});