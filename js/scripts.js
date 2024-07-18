function toggleShareMenu() {
    const shareMenu = document.getElementById('share-menu');
    shareMenu.style.display = shareMenu.style.display === 'block' ? 'none' : 'block';
}

function copyLink() {
    const link = 'https://cmaresistencia.edu.ar/novedades';
    navigator.clipboard.writeText(link).then(() => {
        alert('Enlace copiado al portapapeles');
    }, (err) => {
        console.error('Error al copiar el enlace: ', err);
    });
}

document.addEventListener('click', function(event) {
    const shareMenu = document.getElementById('share-menu');
    const shareButton = document.querySelector('.share-button');
    if (!shareMenu.contains(event.target) && !shareButton.contains(event.target)) {
        shareMenu.style.display = 'none';
    }
});
