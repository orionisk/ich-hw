--* Работаем с базой данных sakila.

--* 1. Вывести названия фильмов с расшифровкой рейтинга для каждого. Рейтинги описаны здесь - https://en.wikipedia.org/wiki/Motion_Picture_Association_film_rating_system. В таблице film хранятся коды рейтингов. Нужно воспользоваться оператором case чтобы определить для каждого кода условие, по которому будет выводится его развернутое описание (1 предложение).
SELECT 
  title,
  rating,
  CASE rating
    WHEN 'G' THEN 'General Audience - Suitable for all ages'
    WHEN 'PG' THEN 'Parental Guidance Suggested - Some material may not be suitable for children'
    WHEN 'PG-13' THEN 'Parents Strongly Cautioned - Some material may be inappropriate for children under 13'
    WHEN 'R' THEN 'Restricted - Under 17 requires accompanying parent or adult guardian'
    WHEN 'NC-17' THEN 'Adults Only - No one 17 and under admitted'
    ELSE 'Not Rated'
  END AS rating_description
FROM film;

--* 2. Выведите количество фильмов в каждой категории рейтинга. Используем group by. 
SELECT 
  rating,
  COUNT(*) AS film_count
FROM film
GROUP BY rating;

--* 3. Используя оконные функции и partition by, выведите список названий фильмов, рейтинг и количество фильмов в каждом рейтинге. Объясните, чем отличаются результаты предыдущего запроса и запроса в этой задаче. 

SELECT 
    title,
    rating,
    COUNT(*) OVER (PARTITION BY rating) as films_in_rating
FROM film;

-- Отличие - этот запрос показывает все фильмы с их названиями и подсчитывает количество фильмов для каждого вида рейтинга, а предыдущий запрос показывает сгруппированные данные.

--* 4. Изучите таблицы payment и customer. Выведите список всех платежей с указанием имени и фамилии каждого заказчика, датой платежа и суммой.
SELECT 
    c.first_name,
    c.last_name,
    p.payment_date,
    p.amount
FROM payment p
JOIN customer c ON p.customer_id = c.customer_id;

--* 5. Поменяйте предыдущий запрос так, чтобы дата выводилась в формате “число, название месяца, год” (без времени).
SELECT 
    c.first_name,
    c.last_name,
    DATE_FORMAT(p.payment_date, '%d, %M, %Y') as payment_date,
    p.amount
FROM payment p
JOIN customer c ON p.customer_id = c.customer_id;

