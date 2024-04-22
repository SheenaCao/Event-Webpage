document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
    const eventDate = new Date('2024-06-01T00:00:00');

    function updateCountdown() {
        const currentTime = new Date();
        const diff = eventDate - currentTime;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.innerText = `Time until event: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }

    setInterval(updateCountdown, 1000);
});
