const images = document.querySelectorAll('.image');
    let currentIndex = 0;
    let intervalId;

    function showImage(index) {
        images[currentIndex].classList.remove('active');
        currentIndex = index;
        if (currentIndex < 0) currentIndex = images.length - 1;
        if (currentIndex >= images.length) currentIndex = 0;
        images[currentIndex].classList.add('active');
    }

    function showNextImage() {
        showImage(currentIndex + 1);
    }

    function showPrevImage() {
        showImage(currentIndex - 1);
    }

    document.getElementById('nextBtn').addEventListener('click', showNextImage);
    document.getElementById('prevBtn').addEventListener('click', showPrevImage);
