// Select the Button
const donateButton = document.querySelector('.btn-primary');

// Add a Click Event (What happens when clicked)
donateButton.addEventListener('click', function() {
    alert('Thank you for your interest in donating food! 😊');
});
// Change Background Color on Click
donateButton.addEventListener('click', function() {
    document.body.style.backgroundColor = "#f5e6ca"; // Light Beige
});
