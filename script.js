// Form validation
function validateForm() {
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var phone = document.getElementById('phone').value;
    var errorMessage = document.getElementById('error-message');

    if (email === '' || username === '' || phone === '') {
        errorMessage.innerHTML = 'All fields are required';
        return false;
    }

    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.innerHTML = 'Invalid email address';
        return false;
    }

    // Simple phone number validation
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        errorMessage.innerHTML = 'Invalid phone number';
        return false;
    }

    return true;
}