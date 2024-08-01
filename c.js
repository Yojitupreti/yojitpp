document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.getElementsByClassName('close')[0];

    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = photo.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
