const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());


// ====================================================
// IN-MEMORY DATA
// ====================================================

let data = [];
let nextId = 1;


// ====================================================
// INVALID JSON ERROR HANDLER
// ====================================================

app.use((err, req, res, next) => {

    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {

        return res.status(400).json({
            success: false,
            message: "Invalid JSON format. Please enter valid JSON."
        });

    }

    next(err);
});


// ====================================================
// GET API
// Get all stations and bookings
// ====================================================

app.get("/api/data", (req, res) => {

    res.status(200).json({
        success: true,
        data: data
    });

});


// ====================================================
// POST API
// Create station or booking
// ====================================================

app.post("/api/data", (req, res) => {

    const { type } = req.body;


    // Check type

    if (!type) {

        return res.status(400).json({
            success: false,
            message: "Please enter type."
        });

    }


    if (type !== "station" && type !== "booking") {

        return res.status(400).json({
            success: false,
            message: "Type must be station or booking."
        });

    }


    // =================================================
    // CREATE STATION
    // =================================================

    if (type === "station") {

        const {
            name,
            location,
            chargerType,
            availableSlots,
            status
        } = req.body;


        if (
            !name ||
            !location ||
            !chargerType ||
            availableSlots === undefined ||
            !status
        ) {

            return res.status(400).json({
                success: false,
                message: "Please enter all station details."
            });

        }


        const station = {

            id: nextId++,

            type: "station",

            name: name,

            location: location,

            chargerType: chargerType,

            availableSlots: availableSlots,

            status: status

        };


        data.push(station);


        return res.status(201).json({

            success: true,

            message: "Station created successfully.",

            data: station

        });

    }


    // =================================================
    // CREATE BOOKING
    // =================================================

    if (type === "booking") {

        const {
            stationId,
            vehicleNumber,
            bookingDate,
            bookingTime
        } = req.body;


        if (
            stationId === undefined ||
            !vehicleNumber ||
            !bookingDate ||
            !bookingTime
        ) {

            return res.status(400).json({

                success: false,

                message: "Please enter all booking details."

            });

        }


        // Check station exists

        const station = data.find(
            item =>
                item.id === Number(stationId) &&
                item.type === "station"
        );


        if (!station) {

            return res.status(404).json({

                success: false,

                message: "Station not found."

            });

        }


        const booking = {

            id: nextId++,

            type: "booking",

            stationId: Number(stationId),

            vehicleNumber: vehicleNumber,

            bookingDate: bookingDate,

            bookingTime: bookingTime

        };


        data.push(booking);


        return res.status(201).json({

            success: true,

            message: "Booking created successfully.",

            data: booking

        });

    }

});


// ====================================================
// PUT API
// Update station or booking
// ====================================================

app.put("/api/data/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const { type } = req.body;


    if (!type) {

        return res.status(400).json({

            success: false,

            message: "Please enter type."

        });

    }


    if (type !== "station" && type !== "booking") {

        return res.status(400).json({

            success: false,

            message: "Type must be station or booking."

        });

    }


    const item = data.find(
        item => item.id === id
    );


    if (!item) {

        return res.status(404).json({

            success: false,

            message: "Data not found."

        });

    }


    // =================================================
    // UPDATE BOOKING
    // =================================================

    if (type === "booking") {

        if (item.type !== "booking") {

            return res.status(400).json({

                success: false,

                message: "The given ID is not a booking."

            });

        }


        const {
            vehicleNumber,
            bookingDate,
            bookingTime
        } = req.body;


        if (
            !vehicleNumber ||
            !bookingDate ||
            !bookingTime
        ) {

            return res.status(400).json({

                success: false,

                message: "Please enter all booking details."

            });

        }


        item.vehicleNumber = vehicleNumber;

        item.bookingDate = bookingDate;

        item.bookingTime = bookingTime;


        return res.json({

            success: true,

            message: "Booking updated successfully.",

            data: item

        });

    }


    // =================================================
    // UPDATE STATION
    // =================================================

    if (type === "station") {

        if (item.type !== "station") {

            return res.status(400).json({

                success: false,

                message: "The given ID is not a station."

            });

        }


        const {
            name,
            location,
            chargerType,
            availableSlots,
            status
        } = req.body;


        if (
            !name ||
            !location ||
            !chargerType ||
            availableSlots === undefined ||
            !status
        ) {

            return res.status(400).json({

                success: false,

                message: "Please enter all station details."

            });

        }


        item.name = name;

        item.location = location;

        item.chargerType = chargerType;

        item.availableSlots = availableSlots;

        item.status = status;


        return res.json({

            success: true,

            message: "Station updated successfully.",

            data: item

        });

    }

});


// ====================================================
// DELETE API
// Delete station or booking
// ====================================================

app.delete("/api/data/:id", (req, res) => {

    const id = parseInt(req.params.id);


    const index = data.findIndex(
        item => item.id === id
    );


    if (index === -1) {

        return res.status(404).json({

            success: false,

            message: "Data not found."

        });

    }


    const deletedData =
        data.splice(index, 1);


    res.json({

        success: true,

        message: "Data deleted successfully.",

        data: deletedData[0]

    });

});


// ====================================================
// START SERVER
// ====================================================

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});