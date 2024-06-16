
document.getElementById('learn-more').addEventListener('click', function() {
    window.location.href = '#features';
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Enviado com sucesso!');
    this.reset();
});