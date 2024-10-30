-- Нужно создать базу данных онлайн-магазина из двух таблиц: заказчики (Customer) и заказы (Orders).
-- Таблица Customer содержит идентификатор заказчика, имя, фамилию, улицу, почтовый код, город, страна, email, дата регистрации
-- Таблица Orders содержит идентификатор заказчика, который создал этот заказ, дату создания заказа, наименование товара (номер айтема), описание товара, ссылка на фотографию, стоимость заказа.

-- Создать базу данных онлайн-магазина из двух таблиц: заказчики (Customer) и
-- заказы (Orders).
-- 2. Заполнить таблицу тестовыми данными: 3-5 заказчиков и с десяток ордеров так,
-- чтобы у всех заказчиков было разное количество заказов.
-- 3. Сохранить запросы создания таблиц и ввода тестовых данных, чтобы позже
-- добавить их на ревью в гитхаб.
-- 4. К таблице Customer добавить поле last_modified, которое содержит дату
-- последнего изменения данных заказчика. Установить его значение в now.
-- 5. Добавить к таблице Order поле discounter_price, которое содержит скидочную
-- стоимость заказа.
-- 6. Добавить в таблицы тестовые данные: как минимум 3 заказчика по 2-3 заказа у
-- каждого.

DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Customer;

CREATE TABLE Customer (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    street VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    city VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    registration_date DATE NOT NULL DEFAULT CURRENT_DATE,
    last_modified TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Orders (
    customer_id INT NOT NULL,
    order_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    item_number VARCHAR(50) NOT NULL,
    item_description TEXT,
    photo_url VARCHAR(255),
    order_price DECIMAL(10,2) NOT NULL,
    discounted_price DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

INSERT INTO Customer (first_name, last_name, street, postal_code, city, country, email) VALUES
('John', 'Smith', '123 Main St', '10001', 'New York', 'USA', 'john.smith@email.com'),
('Emma', 'Johnson', '45 Oxford Road', 'W1D 1LL', 'London', 'UK', 'emma.j@email.com'),
('Michael', 'Brown', '789 Bay Street', 'M5H 2N2', 'Toronto', 'Canada', 'mbrown@email.com'),
('Anna', 'Wilson', '567 Pine St', '10002', 'New York', 'USA', 'anna.wilson@gmail.com'),
('David', 'Lee', '890 Queen St', 'M4B 1B3', 'Toronto', 'Canada', 'david.lee@gmail.com'),
('Sarah', 'Miller', '234 King St', '90210', 'Los Angeles', 'USA', 'sarah.m@gmail.com');

INSERT INTO Orders (customer_id, item_number, item_description, photo_url, order_price, discounted_price) VALUES
(1, 'ITEM001', 'Wireless Headphones', 'https://example.com/headphones.jpg', 99.99, 89.99),
(1, 'ITEM002', 'Smart Watch', 'https://example.com/watch.jpg', 199.99, 179.99),
(1, 'ITEM003', 'Laptop Bag', 'https://example.com/bag.jpg', 49.99, 44.99),
(2, 'ITEM004', 'Gaming Mouse', 'https://example.com/mouse.jpg', 79.99, 71.99),
(2, 'ITEM005', 'Mechanical Keyboard', 'https://example.com/keyboard.jpg', 129.99, 116.99),
(3, 'ITEM006', 'USB-C Cable', 'https://example.com/cable.jpg', 19.99, 17.99),
(3, 'ITEM007', 'Power Bank', 'https://example.com/powerbank.jpg', 39.99, 35.99),
(4, 'ITEM001', 'Wireless Headphones', 'https://example.com/headphones.jpg', 99.99, 79.99),
(4, 'ITEM001', 'Wireless Headphones', 'https://example.com/headphones.jpg', 99.99, 89.99),
(5, 'ITEM001', 'Wireless Headphones', 'https://example.com/headphones.jpg', 99.99, 84.99),
(5, 'ITEM008', 'Gaming Monitor', 'https://example.com/monitor.jpg', 299.99, 239.99),
(5, 'ITEM002', 'Smart Watch', 'https://example.com/watch.jpg', 199.99, 159.99),
(6, 'ITEM005', 'Mechanical Keyboard', 'https://example.com/keyboard.jpg', 129.99, 97.49),
(6, 'ITEM004', 'Gaming Mouse', 'https://example.com/mouse.jpg', 79.99, 63.99);
