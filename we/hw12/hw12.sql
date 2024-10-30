--* Работаем с базой world:
--* 1. Вывести количество городов для каждой страны.
--* Результат должен содержать CountryCode, CityCount (количество городов в стране).
SELECT CountryCode, COUNT(*) AS CityCount
FROM city
GROUP BY CountryCode

--* Поменяйте запрос с использованием джойнов так, чтобы выводилось название страны вместо CountryCode. 
SELECT country.Name, COUNT(*) AS CityCount
FROM city
JOIN country ON city.CountryCode = country.Code
GROUP BY country.Name;

--* 2. Используя оконные функции, вывести список стран с продолжительностью жизнью 
--* и средней продолжительностью жизни. 
SELECT Name, LifeExpectancy, AVG(LifeExpectancy) OVER() AS AvgLifeExpectancy
FROM country;

--* 3. Используя ранжирующие функции, вывести страны по убыванию продолжительности жизни.
SELECT Name, LifeExpectancy
FROM country
ORDER BY LifeExpectancy DESC;
-- или
SELECT Name, LifeExpectancy, 
       DENSE_RANK() OVER (ORDER BY LifeExpectancy DESC) AS LifeExpectancyRank
FROM country;

--* 4. Используя ранжирующие функции, вывести третью страну с самой высокой продолжительностью жизни.
SELECT Name, LifeExpectancy
FROM (
    SELECT Name, LifeExpectancy,
           DENSE_RANK() OVER (ORDER BY LifeExpectancy DESC) AS LifeExpectancyRank
    FROM country
) AS ranked_countries
WHERE LifeExpectancyRank = 3;
--* или в MySQL 8+
WITH ranked_countries AS (
    SELECT Name, LifeExpectancy,
           DENSE_RANK() OVER (ORDER BY LifeExpectancy DESC) AS LifeExpectancyRank
    FROM country
)
SELECT Name, LifeExpectancy
FROM ranked_countries
WHERE LifeExpectancyRank = 3;
