function updateTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let am  = "AM"
    if(hours > 12)
    {
        hours = hours-12;
        am = "PM"
    }
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const formattedTime = `${hours}:${minutes}:${seconds}`;
    
    
    document.getElementById('Time').textContent = formattedTime; 
    document.getElementById('ampm').textContent = am;

}
updateTime();
setInterval(updateTime, 1000);

function updateTime() {
    const now = new Date();
    let hours = now.getHours(); 
    let m = "AM"; 

    if (hours >= 12) {
        if (hours > 12) {
            hours -= 12; 
        }
        m = "PM";
    } else if (hours === 0) {
        hours = 12; 
    }

    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('Time').textContent = formattedTime; 
    document.getElementById('ampm').textContent = m;
}

updateTime();
setInterval(updateTime, 1000);