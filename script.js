function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Add an event listener to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Create the mailto link with the form values
    var mailtoLink = 'mailto:receiver@example.com?subject=Contact%20Form%20Message&body=' +
        'Name:%20' + encodeURIComponent(name) + '%0A' +
        'Email:%20' + encodeURIComponent(email) + '%0A' +
        'Message:%20' + encodeURIComponent(message);

    // Open the user's email client
    window.location.href = mailtoLink;
});
