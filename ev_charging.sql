-- =========================================
-- EV CHARGING STATION FINDER & BOOKING
-- =========================================

-- 1. CREATE TABLES
-- =========================================

DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS charging_stations;

CREATE TABLE charging_stations (
    station_id INTEGER PRIMARY KEY AUTOINCREMENT,
    station_name TEXT NOT NULL,
    city TEXT NOT NULL,
    address TEXT NOT NULL,
    charger_type TEXT NOT NULL,
    total_slots INTEGER NOT NULL,
    available_slots INTEGER NOT NULL,
    price_per_unit REAL NOT NULL
);

CREATE TABLE bookings (
    booking_id INTEGER PRIMARY KEY AUTOINCREMENT,
    station_id INTEGER NOT NULL,
    customer_name TEXT NOT NULL,
    vehicle_number TEXT NOT NULL,
    booking_date TEXT NOT NULL,
    booking_time TEXT NOT NULL,
    status TEXT NOT NULL,
    FOREIGN KEY (station_id) REFERENCES charging_stations(station_id)
);


-- 2. INSERT DATA
-- =========================================

INSERT INTO charging_stations
(station_name, city, address, charger_type, total_slots, available_slots, price_per_unit)
VALUES
('Green Charge Hub', 'Mangalore', 'MG Road', 'Fast DC', 10, 6, 15.00);

INSERT INTO charging_stations
(station_name, city, address, charger_type, total_slots, available_slots, price_per_unit)
VALUES
('EV Power Station', 'Bangalore', 'Whitefield', 'Fast DC', 12, 8, 14.00);

INSERT INTO charging_stations
(station_name, city, address, charger_type, total_slots, available_slots, price_per_unit)
VALUES
('Eco Charge Point', 'Mysore', 'VV Mohalla', 'AC', 8, 5, 10.00);

INSERT INTO charging_stations
(station_name, city, address, charger_type, total_slots, available_slots, price_per_unit)
VALUES
('Rapid EV Charging', 'Udupi', 'Manipal Road', 'Fast DC', 6, 3, 16.00);

INSERT INTO charging_stations
(station_name, city, address, charger_type, total_slots, available_slots, price_per_unit)
VALUES
('Green Energy Station', 'Mangalore', 'Kottara', 'AC', 8, 7, 11.00);


INSERT INTO bookings
(station_id, customer_name, vehicle_number, booking_date, booking_time, status)
VALUES
(1, 'Amulya', 'KA01AB1234', '2026-08-18', '10:00', 'Confirmed');

INSERT INTO bookings
(station_id, customer_name, vehicle_number, booking_date, booking_time, status)
VALUES
(2, 'Rahul', 'KA02CD5678', '2026-08-18', '11:30', 'Confirmed');

INSERT INTO bookings
(station_id, customer_name, vehicle_number, booking_date, booking_time, status)
VALUES
(3, 'Sneha', 'KA05EF9012', '2026-08-19', '09:00', 'Pending');


-- 3. VIEW DATA
-- =========================================

SELECT * FROM charging_stations;

SELECT * FROM bookings;


-- 4. UPDATE
-- =========================================

UPDATE charging_stations
SET available_slots = 4
WHERE station_id = 1;

UPDATE bookings
SET status = 'Confirmed'
WHERE booking_id = 3;


-- 5. VIEW UPDATED DATA
-- =========================================

SELECT * FROM charging_stations
WHERE station_id = 1;

SELECT * FROM bookings
WHERE booking_id = 3;


-- 6. DELETE
-- =========================================

DELETE FROM bookings
WHERE booking_id = 3;

DELETE FROM charging_stations
WHERE station_id = 5;


-- 7. VIEW FINAL DATA
-- =========================================

SELECT * FROM charging_stations;

SELECT * FROM bookings;