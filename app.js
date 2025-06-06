function updateClock() {
    const clockElement = document.getElementById("clock");
    if (!clockElement)
        return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    
}
// Update clock every second
setInterval(updateClock, 1000);
// Initial call to set the time immediately
updateClock();
