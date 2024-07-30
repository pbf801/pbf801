document.addEventListener('DOMContentLoaded', () => {
    const prevButtons = document.querySelectorAll('.carousel-button.prev');
    const nextButtons = document.querySelectorAll('.carousel-button.next');

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            const carouselInner = button.parentElement.querySelector('.carousel-inner');
            const items = carouselInner.querySelectorAll('.carousel-item');
            const itemWidth = items[0].getBoundingClientRect().width;
            const currentTransform = getComputedStyle(carouselInner).transform;
            let currentOffset = 0;

            if (currentTransform !== 'none') {
                currentOffset = parseInt(currentTransform.split(',')[4]);
            }

            const newOffset = Math.min(currentOffset + itemWidth, 0);
            carouselInner.style.transform = `translateX(${newOffset}px)`;
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const carouselInner = button.parentElement.querySelector('.carousel-inner');
            const items = carouselInner.querySelectorAll('.carousel-item');
            const itemWidth = items[0].getBoundingClientRect().width;
            const currentTransform = getComputedStyle(carouselInner).transform;
            let currentOffset = 0;

            if (currentTransform !== 'none') {
                currentOffset = parseInt(currentTransform.split(',')[4]);
            }

            const maxOffset = -((items.length - 1) * itemWidth);
            const newOffset = Math.max(currentOffset - itemWidth, maxOffset);
            carouselInner.style.transform = `translateX(${newOffset}px)`;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    
    languageSelector.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        document.querySelectorAll('[data-en]').forEach(element => {
            const text = element.getAttribute(`data-${selectedLang}`);
            if (text) {
                element.textContent = text;
            }
        });
    });
});
