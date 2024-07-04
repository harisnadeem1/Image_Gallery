document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const totalImages = 3; 
    const imagePath = gallery.getAttribute('data-path');
    const imageBase = gallery.getAttribute('data-base');

    for (let i = 1; i <= totalImages; i++) {
        const imageFile = `${imageBase}${i}.jpg`;

        const anchor = document.createElement('a');
        anchor.href = `${imagePath}/${imageFile}`;
        anchor.classList.add('gallery-item');
        anchor.target = '_blank';

        const img = document.createElement('img');
        img.src = `${imagePath}/${imageFile}`;
        img.alt = imageFile;
        img.classList.add('gallery-image');

        anchor.appendChild(img);
        gallery.appendChild(anchor);

        img.addEventListener('click', (event) => {
            event.preventDefault();
            openModal(`${imagePath}/${imageFile}`);
        });
    }

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];

    function openModal(src) {
        modal.style.display = "block";
        modalImg.src = src;
    }

    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
