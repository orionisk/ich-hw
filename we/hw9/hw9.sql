--* 1. Вывести текущую дату и время.
SELECT NOW() current_datetime;

--* 2. Вывести текущий год и месяц
SELECT YEAR(NOW()) current_year, MONTH(NOW()) current_month;

--* 3. Вывести текущее время
SELECT TIME(NOW()) current_time;

--* 4. Вывести название текущего дня недели
SELECT DAYNAME(NOW()) current_day_name;

--* 5. Вывести номер текущего месяца
SELECT MONTH(NOW()) current_month_number;

--* 6. Вывести номер дня в дате “2020-03-18” 
SELECT DAYOFMONTH('2020-03-18') day_number;

--* 7. Подключиться к базе данных shop (которая находится на удаленном сервере).
--* 8. Определить какие из покупок были совершены апреле (4-й месяц)
SELECT * FROM ORDERS WHERE MONTH(ODATE) = 4;

--* 9. Определить количество покупок в 2022-м году
SELECT COUNT(*) FROM ORDERS WHERE YEAR(ODATE) = 2022;

--* 10. Определить, сколько покупок было совершено в каждый день. Отсортировать строки в порядке возрастания количества покупок.
--* Вывести два поля - дату и количество покупок
SELECT ODATE, COUNT(*)
FROM ORDERS 
GROUP BY ODATE
ORDER BY COUNT(*);

--* 11. Определить среднюю стоимость покупок в апреле
SELECT AVG(AMT) FROM ORDERS WHERE MONTH(ODATE) = 4;
