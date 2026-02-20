function LoadDates() {
  const today = new Date();
  document.getElementById('since-input').value = FormatDate(today);
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);
  document.getElementById('until-input').value = FormatDate(nextWeek);
}

function FormatDate(date) {
  return date.toISOString().split('T')[0];
}

function DisplaySearch() {
  const from = document.getElementById('from-input').value;
  const to = document.getElementById('to-input').value;
  const since = document.getElementById('since-input').value;
  const until = document.getElementById('until-input').value;
  if (confirm(`You search for: \nTravel from ${from} to ${to}; \nTravel date ${since} - ${until}`)) {
    document.getElementById('from-input').value = "";
    document.getElementById('to-input').value = "";
    LoadDates();
  }
}

LoadDates();