document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.heroimg');
    let currentIndex = 0; 
    let slideInterval;

    function showImage(index) {
        images.forEach((image, i) => {
           image.classList.remove('active', 'previous');
           if (i === index) {
            image.classList.add('active');
           } else {
            image.classList.add('previous');
           }
        });

        images[index].classList.add('active');
        currentIndex = index;
    }

    function resetTimer() {
        clearInterval(slideInterval);
        slideInterval = setInterval(function() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex)
        }, 5000);
    }

    showImage(currentIndex);

    document.getElementById('next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    resetTimer();
    });

    document.getElementById('prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    resetTimer();
    });

    resetTimer();

});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.dropMenuIcon');
    const menu = document.querySelector('.dropMenu');
    const menuLinks = document.querySelectorAll('.dropMenu a');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuIcon.classList.toggle('rotated');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            menuIcon.classList.remove('rotated');
        });
    });
});