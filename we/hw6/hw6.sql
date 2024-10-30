--* 1. Подключитесь к базе данных world (которая находится на удаленном сервере). 
--* 2. Выведите список стран с языками, на которых в них говорят. 
SELECT country.Name, countrylanguage.Language
FROM country
JOIN countrylanguage ON country.Code = countrylanguage.CountryCode;

--* 3. Выведите список городов с их населением и названием стран
SELECT city.Name AS city_name, city.Population AS city_population, country.Name AS country_name
FROM city
JOIN country ON city.CountryCode = country.Code;

--* 4. Выведите список городов в South Africa
SELECT city.Name
FROM city
JOIN country ON city.CountryCode = country.Code
WHERE country.Name = 'South Africa';

--* 5. Выведите список стран с названиями столиц.
SELECT country.Name AS country_name, city.Name AS capital_name
FROM country
JOIN city ON country.Capital = city.ID;

--* 6. Измените запрос 4 таким образом, чтобы выводилось население в столице. 
SELECT city.Name AS capital_name, city.Population AS capital_population
FROM city
JOIN country ON city.ID = country.Capital
WHERE country.Name = 'South Africa';

--* 7. Напишите запрос, который возвращает название столицы United States
SELECT city.Name AS capital_name
FROM city
JOIN country ON city.ID = country.Capital
WHERE country.Name = 'United States';

--* 8. Используя базу hr_data.sql, вывести имя, фамилию и город сотрудника.
SELECT e.first_name, e.last_name, l.city
FROM employees e
JOIN departments d ON e.department_id = d.department_id
JOIN locations l ON d.location_id = l.location_id;

--* 9. Используя базу hr_data.sql, вывести города и соответствующие городам страны.
SELECT l.city, c.country_name
FROM locations l
JOIN countries c ON l.country_id = c.country_id;
