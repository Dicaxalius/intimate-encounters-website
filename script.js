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

