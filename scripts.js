function toggleBackgroundColor(element) {
    const label = element.nextElementSibling;
    label.classList.toggle('selected');
}

function createNotification() {
    const formatNumber = document.getElementById('formatNumber').value.padStart(2, '0');
    const selectedSatelits = Array.from(document.querySelectorAll('#satelitSelect input[type="checkbox"]:checked')).map(cb => cb.nextElementSibling.textContent).join('-');
    const selectedProjeks = Array.from(document.querySelectorAll('#projekSelect input[type="checkbox"]:checked')).map(cb => cb.nextElementSibling.textContent).join('-');
    const formatTanggal = new Date().toLocaleDateString('id-ID').split('/').map(num => num.padStart(2, '0')).join('/');
    const pihakEskalasi = document.getElementById('pihakEskalasi').value;
    const status = document.getElementById('status').value;
    const numberTicket = document.getElementById('numberTicket').value;
    const deskripsiInot = document.getElementById('deskripsiInot').value.trim();
    const startTimeHour = document.getElementById('startTimeHour').value.padStart(2, '0');
    const startTimeMinute = document.getElementById('startTimeMinute').value.padStart(2, '0');
    const startTime = startTimeHour && startTimeMinute ? `${startTimeHour}:${startTimeMinute} WIB` : new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';
    const impact = document.querySelector('input[name="impact"]:checked').value;
    const rootcause = document.getElementById('rootcause').value.trim();
    const progressTimeHour = document.getElementById('progressTimeHour').value.padStart(2, '0');
    const progressTimeMinute = document.getElementById('progressTimeMinute').value.padStart(2, '0');
    const progressTime = progressTimeHour && progressTimeMinute ? `${progressTimeHour}:${progressTimeMinute} WIB` : new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';
    const progressUpdate = document.getElementById('progressUpdate').value.trim();
    
    const notificationText = `Notification Number ${formatNumber}/${selectedSatelits}-${selectedProjeks}/${formatTanggal}\n` +
        `Incident Notification - ${pihakEskalasi} - ${status}\n` +
        `Ticket Number: ${numberTicket}\n` +
        `Description: ${deskripsiInot}\n` +
        '-------------------------------------------------\n' +
        `Start TT: ${formatTanggal} ${startTime}\n\n` +
        `Impact Service: ${impact}\n` +
        `Root Cause: ${rootcause}\n\n` +
        'Progress Update:\n' +
        `[${formatTanggal}]\n- ${progressTime} : ${progressUpdate}\n\n` +
        'Action:  -\nClosed: -\n\n' +
        'Monitor\nTerima kasih';
    
    document.getElementById('result').textContent = notificationText;
}

function clearText() {
    /* Isi script clearText() */
}

function copyText() {
    /* Isi script copyText() */
}

function exitProgram() {
    /* Isi script exitProgram() */
}
