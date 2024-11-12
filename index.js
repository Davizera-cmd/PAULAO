document.addEventListener('DOMContentLoaded', function() {
    const contatoLink = document.querySelector('.contato-link');
    const popup = document.getElementById('popup');

    contatoLink.addEventListener('mouseover', function() {
        popup.style.display = 'block';
    });

    contatoLink.addEventListener('mouseout', function() {
        popup.style.display = 'none';
    });

    popup.addEventListener('mouseover', function() {
        popup.style.display = 'block';
    });

    popup.addEventListener('mouseout', function() {
        popup.style.display = 'none';
    });
});