/* =====================================================
   EV CHARGEHUB - FRONTEND ONLY
   NO BACKEND CONNECTION
===================================================== */


/* =====================================================
   DEFAULT CHARGING STATIONS
===================================================== */

const stations = [

    /* ================= MANGALORE ================= */

    {
        id: 1,
        name: "Mangalore Central EV Hub",
        city: "Mangalore",
        address: "Hampankatta, Mangalore",
        type: "Fast DC",
        availability: "Available",
        hours: "24 Hours",
        contact: "9876543210",
        chargers: 8
    },

    {
        id: 2,
        name: "Kottara EV Charging Point",
        city: "Mangalore",
        address: "Kottara Chowki, Mangalore",
        type: "CCS",
        availability: "Available",
        hours: "6 AM - 11 PM",
        contact: "9876543211",
        chargers: 6
    },

    {
        id: 3,
        name: "Bejai EV Station",
        city: "Mangalore",
        address: "Bejai, Mangalore",
        type: "AC",
        availability: "Busy",
        hours: "7 AM - 10 PM",
        contact: "9876543212",
        chargers: 5
    },

    {
        id: 4,
        name: "Surathkal EV Fast Charge",
        city: "Mangalore",
        address: "Surathkal, Mangalore",
        type: "CHAdeMO",
        availability: "Available",
        hours: "24 Hours",
        contact: "9876543213",
        chargers: 7
    },


    /* ================= UDUPI ================= */

    {
        id: 5,
        name: "Udupi City EV Hub",
        city: "Udupi",
        address: "MG Road, Udupi",
        type: "DC",
        availability: "Available",
        hours: "24 Hours",
        contact: "9876543220",
        chargers: 8
    },

    {
        id: 6,
        name: "Manipal EV Charging Station",
        city: "Udupi",
        address: "Manipal Main Road, Udupi",
        type: "CCS",
        availability: "Available",
        hours: "6 AM - 12 AM",
        contact: "9876543221",
        chargers: 10
    },

    {
        id: 7,
        name: "Brahmagiri EV Point",
        city: "Udupi",
        address: "Brahmagiri, Udupi",
        type: "AC",
        availability: "Busy",
        hours: "7 AM - 10 PM",
        contact: "9876543222",
        chargers: 4
    },

    {
        id: 8,
        name: "Kundapur Highway EV Station",
        city: "Udupi",
        address: "NH66, Udupi District",
        type: "Fast DC",
        availability: "Available",
        hours: "24 Hours",
        contact: "9876543223",
        chargers: 9
    },


    /* ================= MYSORE ================= */

    {
        id: 9,
        name: "Mysore Palace EV Hub",
        city: "Mysore",
        address: "Palace Road, Mysore",
        type: "CCS",
        availability: "Available",
        hours: "24 Hours",
        contact: "9876543230",
        chargers: 8
    },

    {
        id: 10,
        name: "Vijayanagar EV Station",
        city: "Mysore",
        address: "Vijayanagar, Mysore",
        type: "DC",
        availability: "Busy",
        hours: "6 AM - 11 PM",
        contact: "9876543231",
        chargers: 6
    },

    {
        id: 11,
        name: "Hebbal EV Point",
        city: "Mysore",
        address: "Hebbal, Mysore",
        type: "AC",
        availability: "Available",
        hours: "7 AM - 10 PM",
        contact: "9876543232",
        chargers: 5
    },

    {
        id: 12,
        name: "Ring Road Fast Charge",
        city: "Mysore",
        address: "Mysore Ring Road",
        type: "Fast DC",
        availability: "Available",
        hours: "24 Hours",
        contact: "9876543233",
        chargers: 10
    },


    /* ================= BANGALORE ================= */

    {
        id: 13,
        name: "Bangalore Electronic City EV Hub",
        city: "Bangalore",
        address: "Electronic City, Bangalore",
        type: "Fast DC",
        availability: "Available",
        hours: "24 Hours",
        contact: "9876543240",
        chargers: 12
    },

    {
        id: 14,
        name: "Whitefield EV Station",
        city: "Bangalore",
        address: "Whitefield, Bangalore",
        type: "CCS",
        availability: "Busy",
        hours: "6 AM - 12 AM",
        contact: "9876543241",
        chargers: 10
    },

    {
        id: 15,
        name: "Indiranagar EV Point",
        city: "Bangalore",
        address: "Indiranagar, Bangalore",
        type: "AC",
        availability: "Available",
        hours: "7 AM - 11 PM",
        contact: "9876543242",
        chargers: 7
    },

    {
        id: 16,
        name: "Yeshwanthpur EV Fast Charge",
        city: "Bangalore",
        address: "Yeshwanthpur, Bangalore",
        type: "CHAdeMO",
        availability: "Available",
        hours: "24 Hours",
        contact: "9876543243",
        chargers: 9
    },


    /* ================= PUTTUR ================= */

    {
        id: 17,
        name: "Puttur Main EV Hub",
        city: "Puttur",
        address: "Main Road, Puttur",
        type: "DC",
        availability: "Available",
        hours: "24 Hours",
        contact: "9876543250",
        chargers: 6
    },

    {
        id: 18,
        name: "Puttur Highway EV Station",
        city: "Puttur",
        address: "NH75, Puttur",
        type: "Fast DC",
        availability: "Available",
        hours: "24 Hours",
        contact: "9876543251",
        chargers: 8
    },

    {
        id: 19,
        name: "Darbe EV Charging Point",
        city: "Puttur",
        address: "Darbe, Puttur",
        type: "AC",
        availability: "Busy",
        hours: "7 AM - 10 PM",
        contact: "9876543252",
        chargers: 4
    },

    {
        id: 20,
        name: "Nehru Nagar EV Station",
        city: "Puttur",
        address: "Nehru Nagar, Puttur",
        type: "CCS",
        availability: "Available",
        hours: "6 AM - 11 PM",
        contact: "9876543253",
        chargers: 6
    },


    /* ================= TUMKUR ================= */

    {
        id: 21,
        name: "Tumkur Central EV Hub",
        city: "Tumkur",
        address: "Central Bus Stand Road, Tumkur",
        type: "CCS",
        availability: "Available",
        hours: "24 Hours",
        contact: "9876543260",
        chargers: 8
    },

    {
        id: 22,
        name: "Tumkur Highway EV Station",
        city: "Tumkur",
        address: "NH48, Tumkur",
        type: "Fast DC",
        availability: "Available",
        hours: "24 Hours",
        contact: "9876543261",
        chargers: 10
    },

    {
        id: 23,
        name: "Sira Road EV Point",
        city: "Tumkur",
        address: "Sira Road, Tumkur",
        type: "AC",
        availability: "Busy",
        hours: "7 AM - 10 PM",
        contact: "9876543262",
        chargers: 5
    },

    {
        id: 24,
        name: "Gubbi EV Charging Station",
        city: "Tumkur",
        address: "Gubbi Road, Tumkur",
        type: "CHAdeMO",
        availability: "Available",
        hours: "24 Hours",
        contact: "9876543263",
        chargers: 7
    }

];


/* =====================================================
   GET HTML ELEMENTS
===================================================== */

const stationContainer =
    document.getElementById("stationContainer");

const stationCount =
    document.getElementById("stationCount");

const stationSelect =
    document.getElementById("stationSelect");

const chargingType =
    document.getElementById("chargingType");

const bookingForm =
    document.getElementById("bookingForm");

const bookingContainer =
    document.getElementById("bookingContainer");

const bookingCount =
    document.getElementById("bookingCount");


/* =====================================================
   DISPLAY ALL STATIONS
===================================================== */

function displayStations(list) {

    stationContainer.innerHTML = "";

    stationCount.textContent =
        `${list.length} station(s) found`;


    if (list.length === 0) {

        stationContainer.innerHTML = `
            <div class="error-message">
                ❌ No charging station found.
                Try another city, station name or charging type.
            </div>
        `;

        return;
    }


    list.forEach(station => {

        let statusClass =
            station.availability.toLowerCase();


        stationContainer.innerHTML += `

            <div class="station-card">

                <div class="station-icon">
                    ⚡
                </div>

                <h3>
                    ${station.name}
                </h3>

                <p>
                    📍 ${station.city}
                </p>

                <p>
                    🏠 ${station.address}
                </p>

                <span class="type">
                    🔌 ${station.type}
                </span>

                <br>

                <span class="status ${statusClass}">
                    ${station.availability}
                </span>

                <p>
                    🕐 ${station.hours}
                </p>

                <div class="card-buttons">

                    <button
                        class="details-btn"
                        onclick="showDetails(${station.id})">
                        View Details
                    </button>

                    <button
                        class="book-station-btn"
                        onclick="selectStation(${station.id})">
                        Book Now
                    </button>

                </div>

            </div>

        `;

    });

}


/* =====================================================
   SEARCH FUNCTION
===================================================== */

function searchStations() {

    const searchText =
        document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();


    const city =
        document
        .getElementById("cityFilter")
        .value
        .toLowerCase();


    const type =
        document
        .getElementById("typeFilter")
        .value
        .toLowerCase();


    const availability =
        document
        .getElementById("availabilityFilter")
        .value
        .toLowerCase();


    const filtered =
        stations.filter(station => {


            /*
               SEARCH CHECKS:

               1. Station name
               2. City
               3. Address
               4. Charging type
            */

            const matchesSearch =

                station.name.toLowerCase()
                    .includes(searchText)

                ||

                station.city.toLowerCase()
                    .includes(searchText)

                ||

                station.address.toLowerCase()
                    .includes(searchText)

                ||

                station.type.toLowerCase()
                    .includes(searchText);


            const matchesCity =
                city === "all" ||
                station.city.toLowerCase() === city;


            const matchesType =
                type === "all" ||
                station.type.toLowerCase() === type;


            const matchesAvailability =
                availability === "all" ||
                station.availability.toLowerCase()
                    === availability;


            return (

                matchesSearch &&
                matchesCity &&
                matchesType &&
                matchesAvailability

            );

        });


    displayStations(filtered);

}


/* =====================================================
   APPLY FILTERS
===================================================== */

function applyFilters() {

    searchStations();

}


/* =====================================================
   CLEAR FILTERS
===================================================== */

function clearFilters() {

    document.getElementById("searchInput").value = "";

    document.getElementById("cityFilter").value = "all";

    document.getElementById("typeFilter").value = "all";

    document.getElementById("availabilityFilter").value = "all";

    displayStations(stations);

}


/* =====================================================
   SHOW STATION DETAILS
===================================================== */

function showDetails(id) {

    const station =
        stations.find(s => s.id === id);


    document.getElementById("stationDetails").innerHTML = `

        <h2>⚡ ${station.name}</h2>

        <br>

        <p><strong>Location:</strong>
            ${station.city}
        </p>

        <p><strong>Address:</strong>
            ${station.address}
        </p>

        <p><strong>Charging Type:</strong>
            ${station.type}
        </p>

        <p><strong>Availability:</strong>
            ${station.availability}
        </p>

        <p><strong>Operating Hours:</strong>
            ${station.hours}
        </p>

        <p><strong>Contact:</strong>
            ${station.contact}
        </p>

        <p><strong>Number of Chargers:</strong>
            ${station.chargers}
        </p>

    `;


    document.getElementById("detailsModal")
        .style.display = "flex";

}


/* =====================================================
   CLOSE DETAILS
===================================================== */

function closeDetails() {

    document.getElementById("detailsModal")
        .style.display = "none";

}


/* =====================================================
   SELECT STATION FOR BOOKING
===================================================== */

function selectStation(id) {

    stationSelect.value = id;

    updateChargingType();

    document.getElementById("booking")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   LOAD STATIONS INTO BOOKING SELECT
===================================================== */

function loadStationOptions() {

    stations.forEach(station => {

        stationSelect.innerHTML += `

            <option value="${station.id}">
                ${station.name} - ${station.city}
            </option>

        `;

    });

}


/* =====================================================
   AUTOMATIC CHARGING TYPE
===================================================== */

function updateChargingType() {

    const stationId =
        Number(stationSelect.value);


    const station =
        stations.find(
            s => s.id === stationId
        );


    if (!station) {

        chargingType.value = "";

        return;

    }


    /*
       Automatically select the
       charging type available
       at this station.
    */

    chargingType.value =
        station.type;

}


/* =====================================================
   VALIDATION FUNCTIONS
===================================================== */

function showError(id, message) {

    document.getElementById(id)
        .textContent = message;

}


function clearErrors() {

    document.querySelectorAll("small")
        .forEach(element => {

            element.textContent = "";

        });

}


/* =====================================================
   BOOKING VALIDATION
===================================================== */

bookingForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        clearErrors();


        const name =
            document.getElementById("userName")
            .value.trim();


        const mobile =
            document.getElementById("mobile")
            .value.trim();


        const email =
            document.getElementById("email")
            .value.trim();


        const vehicle =
            document.getElementById("vehicleNumber")
            .value.trim()
            .toUpperCase();


        const stationId =
            Number(stationSelect.value);


        const selectedType =
            chargingType.value;


        const date =
            document.getElementById("bookingDate")
            .value;


        const time =
            document.getElementById("bookingTime")
            .value;


        let valid = true;


        /* NAME */

        if (name === "") {

            showError(
                "nameError",
                "Please enter your name."
            );

            valid = false;

        }

        else if (!/^[A-Za-z ]{3,}$/.test(name)) {

            showError(
                "nameError",
                "Name must contain at least 3 letters."
            );

            valid = false;

        }


        /* MOBILE */

        if (mobile === "") {

            showError(
                "mobileError",
                "Please enter mobile number."
            );

            valid = false;

        }

        else if (!/^[6-9][0-9]{9}$/.test(mobile)) {

            showError(
                "mobileError",
                "Enter a valid 10 digit mobile number."
            );

            valid = false;

        }


        /* EMAIL */

        if (email === "") {

            showError(
                "emailError",
                "Please enter email."
            );

            valid = false;

        }

        else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(email)
        ) {

            showError(
                "emailError",
                "Enter a valid email address."
            );

            valid = false;

        }


        /* VEHICLE */

        if (vehicle === "") {

            showError(
                "vehicleError",
                "Please enter vehicle number."
            );

            valid = false;

        }

        else if (
            !/^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/
            .test(vehicle)
        ) {

            showError(
                "vehicleError",
                "Example: KA20AB1234"
            );

            valid = false;

        }


        /* STATION */

        if (!stationId) {

            showError(
                "stationError",
                "Please select a charging station."
            );

            valid = false;

        }


        /* CHARGING TYPE */

        if (selectedType === "") {

            showError(
                "typeError",
                "Please select charging type."
            );

            valid = false;

        }


        /*
           VERY IMPORTANT VALIDATION

           Check whether the selected
           charging type actually exists
           at selected station.
        */

        if (stationId && selectedType) {

            const station =
                stations.find(
                    s => s.id === stationId
                );


            if (
                !station ||
                station.type !== selectedType
            ) {

                showError(
                    "typeError",
                    `This station does not provide ${selectedType}. Available type: ${station.type}`
                );

                valid = false;

            }

        }


        /* DATE */

        if (date === "") {

            showError(
                "dateError",
                "Please select booking date."
            );

            valid = false;

        }

        else {

            const today =
                new Date();

            today.setHours(0,0,0,0);


            const selectedDate =
                new Date(date);


            if (selectedDate < today) {

                showError(
                    "dateError",
                    "Booking date cannot be in the past."
                );

                valid = false;

            }

        }


        /* TIME */

        if (time === "") {

            showError(
                "timeError",
                "Please select booking time."
            );

            valid = false;

        }


        /* STOP IF INVALID */

        if (!valid) {

            document.getElementById(
                "bookingMessage"
            ).innerHTML = `

                <div class="error-message">

                    ❌ Please correct all
                    validation errors.

                </div>

            `;

            return;

        }


        /* =================================================
           CHECK STATION AVAILABILITY
        ================================================= */

        const station =
            stations.find(
                s => s.id === stationId
            );


        if (station.availability === "Maintenance") {

            document.getElementById(
                "bookingMessage"
            ).innerHTML = `

                <div class="error-message">

                    ❌ This station is currently
                    under maintenance.

                </div>

            `;

            return;

        }


        /* =================================================
           CREATE BOOKING
        ================================================= */

        const booking = {

            id: Date.now(),

            name: name,

            mobile: mobile,

            email: email,

            vehicle: vehicle,

            stationId: station.id,

            stationName: station.name,

            city: station.city,

            type: station.type,

            date: date,

            time: time,

            status: "Confirmed"

        };


        let bookings =
            JSON.parse(
                localStorage.getItem("evBookings")
            ) || [];


        bookings.push(booking);


        localStorage.setItem(
            "evBookings",
            JSON.stringify(bookings)
        );


        /* =================================================
           SUCCESS MESSAGE
        ================================================= */

        document.getElementById(
            "bookingMessage"
        ).innerHTML = `

            <div class="success-message">

                ✅ Booking Confirmed Successfully! <br><br>

                <strong>Booking ID:</strong>
                ${booking.id}

                <br>

                <strong>Station:</strong>
                ${station.name}

                <br>

                <strong>Date:</strong>
                ${date}

                <br>

                <strong>Time:</strong>
                ${time}

            </div>

        `;


        bookingForm.reset();

        chargingType.value = "";


        displayBookings();

    }
);


/* =====================================================
   DISPLAY BOOKINGS
===================================================== */

function displayBookings() {

    let bookings =
        JSON.parse(
            localStorage.getItem("evBookings")
        ) || [];


    bookingContainer.innerHTML = "";


    bookingCount.textContent =
        `${bookings.length} booking(s)`;


    if (bookings.length === 0) {

        bookingContainer.innerHTML = `

            <div class="error-message">

                No bookings available.

            </div>

        `;

        return;

    }


    bookings.forEach(booking => {

        bookingContainer.innerHTML += `

            <div class="booking-item">

                <h3>
                    ⚡ ${booking.stationName}
                </h3>

                <p>
                    <strong>Booking ID:</strong>
                    ${booking.id}
                </p>

                <p>
                    <strong>Name:</strong>
                    ${booking.name}
                </p>

                <p>
                    <strong>Vehicle:</strong>
                    ${booking.vehicle}
                </p>

                <p>
                    <strong>Location:</strong>
                    ${booking.city}
                </p>

                <p>
                    <strong>Charging Type:</strong>
                    ${booking.type}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${booking.date}
                </p>

                <p>
                    <strong>Time:</strong>
                    ${booking.time}
                </p>

                <p>
                    <strong>Status:</strong>
                    ${booking.status}
                </p>


                ${
                    booking.status === "Confirmed"

                    ?

                    `<button
                        class="cancel-btn"
                        onclick="cancelBooking(${booking.id})">

                        Cancel Booking

                    </button>`

                    :

                    `<p style="color:red;">
                        ❌ Booking Cancelled
                    </p>`

                }

            </div>

        `;

    });

}


/* =====================================================
   CANCEL BOOKING
===================================================== */

function cancelBooking(id) {

    let bookings =
        JSON.parse(
            localStorage.getItem("evBookings")
        ) || [];


    const booking =
        bookings.find(
            b => b.id === id
        );


    if (!booking) {

        alert(
            "Booking not found."
        );

        return;

    }


    const confirmation =
        confirm(
            `Are you sure you want to cancel booking ${id}?`
        );


    if (!confirmation) {

        return;

    }


    booking.status =
        "Cancelled";


    localStorage.setItem(
        "evBookings",
        JSON.stringify(bookings)
    );


    displayBookings();


    alert(
        "✅ Booking cancelled successfully!"
    );

}


/* =====================================================
   SCROLL TO STATIONS
===================================================== */

function scrollToStations() {

    document
        .getElementById("stations")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   INITIALIZATION
===================================================== */

displayStations(stations);

loadStationOptions();

displayBookings();


/* =====================================================
   SET MINIMUM BOOKING DATE = TODAY
===================================================== */

const today =
    new Date()
    .toISOString()
    .split("T")[0];


document.getElementById(
    "bookingDate"
).setAttribute(
    "min",
    today
);