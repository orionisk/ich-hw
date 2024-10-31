--* Написать запросы по созданию таблиц со связями и ключами на основе получившейся ER-диаграммы службы такси.

DROP DATABASE IF EXISTS taxi;
CREATE DATABASE IF NOT EXISTS taxi;

USE taxi;

CREATE TABLE Car (
    id INT PRIMARY KEY AUTO_INCREMENT,
    model VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    license_plate VARCHAR(20) NOT NULL UNIQUE,
    status VARCHAR(50) NOT NULL
);

CREATE TABLE Driver (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL UNIQUE,
    license_number VARCHAR(50) NOT NULL UNIQUE,
    car_id INT UNIQUE,
    FOREIGN KEY (car_id) REFERENCES Car(id)
);

CREATE TABLE Client (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(100) UNIQUE
);

CREATE TABLE Dispatcher (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE Tariff (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    base_price DECIMAL(10,2) NOT NULL,
    price_per_km DECIMAL(10,2) NOT NULL
);

CREATE TABLE Price_Coefficient (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    coefficient DECIMAL(10,2) NOT NULL,
    `condition` TEXT
);

CREATE TABLE `Order` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    driver_id INT NOT NULL,
    client_id INT NOT NULL,
    dispatcher_id INT NOT NULL,
    tariff_id INT NOT NULL,
    price_coefficient_id INT NOT NULL,
    pickup_location VARCHAR(255) NOT NULL,
    dropoff_location VARCHAR(255) NOT NULL,
    order_time DATETIME NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (driver_id) REFERENCES Driver(id),
    FOREIGN KEY (client_id) REFERENCES Client(id),
    FOREIGN KEY (dispatcher_id) REFERENCES Dispatcher(id),
    FOREIGN KEY (tariff_id) REFERENCES Tariff(id),
    FOREIGN KEY (price_coefficient_id) REFERENCES Price_Coefficient(id)
);

CREATE TABLE Review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL UNIQUE,
    rating INT NOT NULL,
    comment TEXT,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (order_id) REFERENCES `Order`(id)
);

CREATE TABLE Repair (
    id INT PRIMARY KEY AUTO_INCREMENT,
    car_id INT NOT NULL,
    repair_date DATETIME NOT NULL,
    description TEXT,
    cost DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (car_id) REFERENCES Car(id)
);

CREATE TABLE Service_Station (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    address VARCHAR(255) NOT NULL UNIQUE,
    repair_id INT UNIQUE,
    FOREIGN KEY (repair_id) REFERENCES Repair(id)
);
