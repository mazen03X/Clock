function updateClock(): void {
    const clockElement: HTMLElement | null = document.getElementById("clock");
    if (!clockElement) return;
  
    const now: Date = new Date();
    const hours: string = String(now.getHours()).padStart(2, "0");
    const minutes: string = String(now.getMinutes()).padStart(2, "0");
    const seconds: string = String(now.getSeconds()).padStart(2, "0");
  
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to set the time immediately
  updateClock();