--* Подключитесь к базе данных hr (которая находится на удаленном сервере). 

--* 1. Выведите количество сотрудников в базе
SELECT COUNT(*) FROM employees;

--* 2. Выведите количество департаментов (отделов) в базе
SELECT COUNT(*) FROM departments;

--* 3. Подключитесь к базе данных World (которая находится на удаленном сервере). 
--* 4. Выведите среднее население в городах Индии (таблица City, код Индии - IND)
SELECT AVG(Population) FROM city WHERE CountryCode = 'IND';

--* 5. Выведите минимальное население в индийском городе и максимальное.
SELECT MIN(Population), MAX(Population) FROM city WHERE CountryCode = 'IND';

--* 6. Выведите самую большую площадь территории. 
SELECT MAX(SurfaceArea) FROM country;

--* 7. Выведите среднюю продолжительность жизни по странам. 
SELECT AVG(LifeExpectancy) FROM country;

--* 8. Найдите самый населенный город (подсказка: использовать подзапросы)
SELECT Name FROM city WHERE Population = (SELECT MAX(Population) FROM city);
--* или
SELECT Name FROM city ORDER BY Population DESC LIMIT 1;
