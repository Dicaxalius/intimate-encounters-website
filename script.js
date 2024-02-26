document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.form-control');

    inputs.forEach(input => {
        input.addEventListener('input', function () {
            const formGroup = this.parentElement;
            if (this.checkValidity()) {
                formGroup.classList.remove('invalid');
                formGroup.classList.add('valid');
            } else {
                formGroup.classList.add('invalid');
                formGroup.classList.remove('valid');
            }
        });
    });
});
// Add this code to your existing script.js file
document.querySelectorAll('.profile-card').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = this.getAttribute('onclick').replace("location.href='", "").slice(0, -2);
    });
});

