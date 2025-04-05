const carouselSlider = document.getElementById('carouselSlider');
const carouselContainer = document.querySelector('.carousel__images');

carouselSlider.addEventListener('input', (event) => {
    const value = parseInt(event.target.value);
    carouselContainer.style.transform = `translateX(-${value * 100}%)`;
});

const box = document.getElementById('box');

        const moveBox = (event) => {
            box.style.left = `${event.clientX}px`;
            box.style.top = `${event.clientY}px`;
        };

        const debouncedMoveBox = _.debounce(moveBox, 100); 

        document.addEventListener('mousemove', debouncedMoveBox);