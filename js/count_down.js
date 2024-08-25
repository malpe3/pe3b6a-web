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

    function startSlideshow() {
        intervalId = setInterval(showNextImage, 3000); // смена изображения каждые 5 секунд
    }

    function stopSlideshow() {
        clearInterval(intervalId);
    }

    document.addEventListener('click', stopSlideshow);
    document.addEventListener('click', startSlideshow);
    document.addEventListener('touchstart', stopSlideshow);
    document.addEventListener('touchend', startSlideshow);

    // Обратный отсчет
    const countdownDate = new Date("2024-09-01T08:00:00").getTime(); // Укажите дату события
    const countdownElement = document.getElementById('countdown');

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        countdownElement.innerHTML = `<span class="tooltip" data-title="осталось до..">` + days + "д " + hours + "ч</span>";

        if (distance < 0) {
            clearInterval(countdownFunction);
            countdownElement.innerHTML = "началось... ";
        }
    }, 1000);

    document.getElementById('nextBtn').addEventListener('click', showNextImage);
    document.getElementById('prevBtn').addEventListener('click', showPrevImage);

    startSlideshow();