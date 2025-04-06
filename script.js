document.addEventListener('DOMContentLoaded', function () {
    const dropBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown on button click
    dropBtn.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents closing when clicking the button
        dropdownContent.classList.toggle('show');
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', function () {
        dropdownContent.classList.remove('show');
    });
});