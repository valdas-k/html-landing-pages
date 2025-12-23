function ShowAlert() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const since = document.getElementById('since').value;
    const until = document.getElementById('until').value;
    alert(`You search for: \nTravel from ${from} to ${to}; \nTravel date ${since} - ${until}`);
}