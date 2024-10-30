--* 1. Подключиться к базе данных world (которая находится на удаленном сервере). 

--* 2. Посмотреть на таблицы city, country из базы world.
--* В каждой таблице есть поле название (Name) и население (Population). 
--* Поле Name в одной таблице означает название города, а в другой - название страны. 
--* Написать запрос с помощью UNION, который выводит список названий всех городов и стран с их населением. 
--* Итоговая выборка должна содержать два столбца: Name, Population. 
SELECT Name, Population FROM city
UNION
SELECT Name, Population FROM country;

--* 3. Посмотреть на таблицы в базе world и объяснить ограничения нескольких столбцов - ответить 1 предложением.
--* NOT NULL значение в поле не может быть null, PRIMARY KEY - это уникальный ключ, который не может быть null.

--* 4. Создать новую таблицу citizen, которая содержит следующие поля: уникальное автоинкрементное, номер соц страхования, имя, фамилию и емейл.
CREATE TABLE citizen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    social_security_number VARCHAR(11),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255)
);

--* 5. На вашем локальном сервере в любой базе создать таблицу без ограничений (любую, можно взять с урока).
DROP TABLE IF EXISTS citizen;
CREATE TABLE citizen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    social_security_number VARCHAR(11),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255)
);

--* 6. Добавить в таблицу 5 значений. Добавить 3 человека с одинаковыми именами и 2 человека без lastname
INSERT INTO citizen (social_security_number, first_name, last_name, email)
VALUES 
    ('123-45-6789', 'John', 'Doe', 'john.doe@example.com'),
    ('234-56-7890', 'John', NULL, 'john2@example.com'),
    ('345-67-8901', 'John', NULL, 'john3@example.com'),
    ('456-78-9012', 'Jane', 'Smith', 'jane.smith@example.com'),
    ('567-89-0123', 'Emily', 'Taylor', 'emily.taylor@example.com');

--* 7. Использовать оператор alter table … modify , чтобы добавить ограничение not null на поле firstname и lastname. 
ALTER TABLE citizen 
MODIFY first_name VARCHAR(255) NOT NULL,
MODIFY last_name VARCHAR(255) NOT NULL;
--* запрос выдаст ошибку, так как last_name имеет значение NULL на некоторых записях

--* 8. Добавить ограничение unique для пары firstname\lastname. 
ALTER TABLE citizen 
ADD CONSTRAINT unique_firstname_lastname UNIQUE (first_name, last_name);

--* 9. Удалить таблицу из базы и пересоздать ее, модифицировав запрос add table так, чтобы он учитывал ограничения (см примеры из класса).
DROP TABLE IF EXISTS citizen;
CREATE TABLE citizen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    social_security_number VARCHAR(11),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    UNIQUE (first_name, last_name)
);

--* 9. Добавить правильные и неправильные данные (нарушающие и не нарушающие ограничения).
--* правильные данные
INSERT INTO citizen (social_security_number, first_name, last_name, email)
VALUES 
    ('123-45-6789', 'John', 'Doe', 'john.doe@example.com'),
    ('234-56-7890', 'Jane', 'Smith', 'jane.smith@example.com'),
    ('345-67-8901', 'Emily', 'Taylor', 'emily.taylor@example.com'),
    ('456-78-9012', 'Michael', 'Brown', 'michael.brown@example.com'),
    ('567-89-0123', 'David', 'Wilson', 'david.wilson@example.com');

--* неправильные данные
INSERT INTO citizen (social_security_number, first_name, last_name, email)
VALUES 
    ('123-45-6789', 'John', 'Doe', 'john.doe@example.com'),
    ('234-56-7890', 'John', 'Smith', 'john2@example.com'),
    ('345-67-8901', 'John', NULL, 'john3@example.com'),
    ('456-78-9012', 'Jane', 'Smith', 'jane.smith@example.com'),
    ('567-89-0123', 'Emily', 'Taylor', 'emily.taylor@example.com');
