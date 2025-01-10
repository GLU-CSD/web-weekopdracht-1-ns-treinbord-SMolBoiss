function createMarkers() {
    const clock = document.getElementById('clock');

    // Create hour markers
    for (let i = 0; i < 12; i++) {
        const marker = document.createElement('div');
        marker.className = 'marker hour-marker';
        const angle = i * 30; // 360 degrees / 12 hours
        marker.style.transform = `rotate(${angle}deg) translate(60px)`;
        clock.appendChild(marker);
    }

    // Create minute markers
    for (let i = 0; i < 60; i++) {
        if (i % 5 !== 0) { // Skip the positions where hour markers are
            const marker = document.createElement('div');
            marker.className = 'marker minute-marker';
            const angle = i * 6; // 360 degrees / 60 minutes
            marker.style.transform = `rotate(${angle}deg) translate(70px)`;
            clock.appendChild(marker);
        }
    }
}

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    document.getElementById('second').style.transform = `rotate(${secondDegrees}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDegrees}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourDegrees}deg)`;
}

function toggleTime() {
    const tijdElement = document.getElementById('Tijd');
    const numberElement = tijdElement.querySelector('.number');
    const textElement = tijdElement.querySelector('.text');

    if (numberElement.textContent === '1' && textElement.textContent === 'minuut') {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        numberElement.textContent = `${hours}:${minutes}`;
        textElement.textContent = '';
    } else {
        numberElement.textContent = '1';
        textElement.textContent = 'minuut';
    }
}

// Create markers when the page loads
document.addEventListener('DOMContentLoaded', createMarkers);

// Update the clock every second
setInterval(updateClock, 1000);

// Toggle the time every 5 seconds
setInterval(toggleTime, 5000);

// Initial call to display the clock immediately
updateClock();