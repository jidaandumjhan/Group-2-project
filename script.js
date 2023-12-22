document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    const attendeeCount = document.getElementById('count');
    const rsvpForm = document.getElementById('rsvp-form');

    // Counter for confirmed attendees
    let confirmedAttendeesCount = 0;

    function activateSection() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const offset = window.innerHeight * 0.6;

            if (rect.top < offset && rect.bottom >= offset) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    function updateConfirmedCount() {
        // Update the count of confirmed attendees
        attendeeCount.textContent = confirmedAttendeesCount;
    }

    // Initial activation check
    activateSection();

    // Scroll event listener
    window.addEventListener('scroll', activateSection);

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // RSVP Form submission
    window.submitRSVP = function () {

        alert('RSVP Successful! Thank you for confirming your attendance.');

        // Increment the count of confirmed attendees
        confirmedAttendeesCount++;

        // Update the confirmed attendance count
        updateConfirmedCount();

        // Clear form fields
        rsvpForm.reset();
    };
});
