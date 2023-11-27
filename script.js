document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const bookingStatus = document.getElementById('bookingStatus');
    const roomInput = document.getElementById('roomInput');

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const category = document.getElementById('category').value;

        if (!validateEmail(email)) {
            displayMessage('Please enter a valid email address.', 'error');
            return;
        }

        displaybookingDetails(name, email, date, category);
    });
    function validateEmail(email) {
        const re = /\S+@\S+\.\S=/;
        return re.test(email);
    }
    function displayMessage(message, type) {
        bookingStatus.innerHTML = '<p class="${type}">${message}</p>';
    }
    function displaybookingDetails(name, email, date, category) {
        const bookingDetails = '
            < h2 > Booking Details:</h2>
            <p>Name: ${name}</p>
<p>Email: ${email}</p>
<p>Date: ${date}</p>
<p>Category: ${category}</p>
<p>Status: Confirmed</p>
        ';
        bookingStatus.innerHTML = bookingDetails;

    }
    category.addEventListener('change', function () {
        const selectedCategory = category.value;

        if (selectedCategory === "Lounging") {
            roomInput.innerHTML = '<label for="rooms">Number of rooms:</label>
                < input type = "number" id = "rooms" min = "1" required > <br><br>';
        } else if(selectedCategory ==="Conference"){
                        roomInput.innerHTML = '<p>Only1 room needed.</p>';
        } else if(selecteCategory ==="Showground"){
                        roomInput.innerHTML = '<p>No rooms needed.</p>';
        }
    });
});