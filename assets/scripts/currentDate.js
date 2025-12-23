const today = new Date();
document.getElementById('since').value = FormatDate(today);

const nextWeek = new Date();
nextWeek.setDate(today.getDate() + 7);
document.getElementById('until').value = FormatDate(nextWeek);

function FormatDate(date) {
    return date.toISOString().split('T')[0];
}