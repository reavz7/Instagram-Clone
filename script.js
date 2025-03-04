
function updatePhoneClock() { 
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    document.getElementById('hourPhone').textContent = `${hour}:${minutes}`
}

updatePhoneClock();
setInterval(updateClock, 1000);
