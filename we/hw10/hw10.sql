--* 1. Подключиться к базе данных world
--* 2. Вывести население в каждой стране. Результат содержит два поля: CountryCode, sum(Population).
SELECT 
  CountryCode, 
  SUM(Population) AS total_population 
FROM city 
GROUP BY CountryCode;
--* 3. Изменить запрос выше так, чтобы выводились только страны с населением более 3 млн человек. 
SELECT 
  CountryCode, 
  SUM(Population) AS total_population 
FROM city 
WHERE Population > 3000000 
GROUP BY CountryCode;
--* 4. Сколько всего записей в результате?
SELECT COUNT(*) 
FROM (
    SELECT CountryCode, SUM(Population) 
    FROM city 
    WHERE Population > 3000000 
    GROUP BY CountryCode
) AS subquery;
--* 5. Поменять запрос выше так, чтобы в результате вместо кода страны выводилось ее название.
--* Подсказка: нужен join таблиц city и country по полю CountryCode.
SELECT 
  country.Name AS country_name,
  SUM(c.Population) AS total_population 
FROM city c
JOIN country ON c.CountryCode = country.Code
WHERE c.Population > 3000000 
GROUP BY country.Name;
--* 6. Вывести количество городов в каждой стране (CountryCode, amount of cities).
--* Подсказка: запрос по таблице city и группировка по CountryCode.
SELECT CountryCode, COUNT(*) AS amount_of_cities
FROM city
GROUP BY CountryCode;
--* 7. Поменять запрос так, чтобы вместо кодов стран, было названия стран.
SELECT 
  country.Name AS country_name,
  COUNT(*) AS amount_of_cities
FROM city
JOIN country ON city.CountryCode = country.Code
GROUP BY country.Name;

--* 8. Поменять запрос так, чтобы выводилось среднее количество городов в стране.
SELECT AVG(cities_per_country.amount_of_cities) AS average_cities_per_country
FROM (
    SELECT CountryCode, COUNT(*) AS amount_of_cities
    FROM city
    GROUP BY CountryCode
) AS cities_per_country;
