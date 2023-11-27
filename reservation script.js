document.addEventListener('DOMContentLoaded', function () {
    const reservationForm = document.getElementById('reservationForm');
    const reservationStatus = document.getElementById('reservationStatus');

    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const food = document.getElementById('food').value;

        displayReservationDetails(name, email, date, food);
    });
    function displayReservationDetails(name, email, date, food) {
        const reservationDetails = document.createElement('div');

        const detailsHTML = '
            < h2 > Reservation details:</h2>
            <p>name: ${name}</p>
<p>email: ${email}</p>
<p>date: ${date}</p>
<p>food: ${food}</p>
<p>status: confirmed</p>
        ';

        reservationDetails.innerHTML = detailsHTML
        reservationStatus.innerHTML = '';
        reservationStatus.appendChild(reservationDetails);

    }
});