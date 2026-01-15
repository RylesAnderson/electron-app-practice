function updateCalendar() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = now.toLocaleString('default', { month: 'long' });

    const month = monthNames[now.getMonth()];

    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
}

updateCalendar();