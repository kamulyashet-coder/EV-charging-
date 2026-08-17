const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory data
let data = [];
let nextId = 1;

/*
====================================================
GET API
Get all stations and bookings
====================================================
*/
app.get("/api/data", (req, res) => {
    res.json({
        success: true,
        data: data
    });
});


/*
====================================================
POST API
Create a station or booking
====================================================
*/
app.post("/api/data", (req, res) => {
    const { type } = req.body;

    if (!type || (type !== "station" && type !== "booking")) {
        return res.status(400).json({
            success: false,
            message: "Type must be station or booking"
        });
    }

    // Create Station
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
                message: "All station details are required"
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
            message: "Station created successfully",
            data: station
        });
    }

    // Create Booking
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
                message: "All booking details are required"
            });
        }

        const booking = {
            id: nextId++,
            type: "booking",
            stationId: stationId,
            vehicleNumber: vehicleNumber,
            bookingDate: bookingDate,
            bookingTime: bookingTime
        };

        data.push(booking);

        return res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: booking
        });
    }
});


/*
====================================================
PUT API
Update an existing station or booking
====================================================
*/
app.put("/api/data/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { type } = req.body;

    if (!type || (type !== "station" && type !== "booking")) {
        return res.status(400).json({
            success: false,
            message: "Type must be station or booking"
        });
    }

    const item = data.find(item => item.id === id);

    if (!item) {
        return res.status(404).json({
            success: false,
            message: "Data not found"
        });
    }

    // Update Booking
    if (type === "booking") {

        const { vehicleNumber } = req.body;

        if (!vehicleNumber) {
            return res.status(400).json({
                success: false,
                message: "Vehicle number is required"
            });
        }

        if (item.type !== "booking") {
            return res.status(400).json({
                success: false,
                message: "The given ID is not a booking"
            });
        }

        item.vehicleNumber = vehicleNumber;

        return res.json({
            success: true,
            message: "Booking updated successfully",
            data: item
        });
    }


    // Update Station
    if (type === "station") {

        if (item.type !== "station") {
            return res.status(400).json({
                success: false,
                message: "The given ID is not a station"
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
                message: "All station details are required"
            });
        }

        item.name = name;
        item.location = location;
        item.chargerType = chargerType;
        item.availableSlots = availableSlots;
        item.status = status;

        return res.json({
            success: true,
            message: "Station updated successfully",
            data: item
        });
    }
});


/*
====================================================
DELETE API
Delete a station or booking
====================================================
*/
app.delete("/api/data/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = data.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Data not found"
        });
    }

    const deletedData = data.splice(index, 1);

    res.json({
        success: true,
        message: "Data deleted successfully",
        data: deletedData[0]
    });
});


/*
====================================================
START SERVER
====================================================
*/
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});