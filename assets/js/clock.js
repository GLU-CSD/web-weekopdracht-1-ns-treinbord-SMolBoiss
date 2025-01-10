function createMarkers() {
    const clock = document.getElementById('clock');

   
    for (let i = 0; i < 12; i++) {
        const marker = document.createElement('div');
        marker.className = 'marker hour-marker';
        const angle = i * 30; 
        marker.style.transform = `rotate(${angle}deg) translate(60px)`;
        clock.appendChild(marker);
    }

    for (let i = 0; i < 60; i++) {
        if (i % 5 !== 0) { 
            const marker = document.createElement('div');
            marker.className = 'marker minute-marker';
            const angle = i * 6;
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


document.addEventListener('DOMContentLoaded', createMarkers);


setInterval(updateClock, 1000);


updateClock();