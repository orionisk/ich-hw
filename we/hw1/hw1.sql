--* 1. Написать запрос, возвращающий всех сотрудников, c job_id = IT_PROG.
SELECT *
FROM employees
WHERE job_id = 'IT_PROG';

--* 2. Изменить запрос так, чтобы вывести всех сотрудников с job_id равной AD_VP
SELECT *
FROM employees
WHERE job_id = 'AD_VP';

--* 3. Выполнить эти два запроса:

--* 4. Воспроизвести самостоятельно следующие запросы:
--* 4.1 Найдите сотрудников, с зп от 10 000 до 20 000 (включая концы)
SELECT *
FROM employees
WHERE salary BETWEEN 10000 AND 20000;

--* 4.2 Найдите сотрудников не из 60, 30 и 100 департамента
SELECT *
FROM employees
WHERE department_id NOT IN (60, 30, 100);

--* 4.3 Найдите сотрудников у которых есть две буквы ll подряд в середине имени
SELECT *
FROM employees
WHERE first_name LIKE '%_ll_%';

--* 4.4 Найдите сотрудников, у которых фамилия кончается на a
SELECT *
FROM employees
WHERE last_name LIKE '%a';

--* 5. Найти всех сотрудников с зарплатой выше 10000
SELECT *
FROM employees
WHERE salary > 10000;

--* 6. Найти всех сотрудников, с зарплатой выше 10000 и чья фамилия начинается на букву L
SELECT *
FROM employees
WHERE salary > 10000 AND last_name LIKE 'L%';

--* 7. Не выполняя запрос к базе данных, предсказать его результат:
SELECT *
FROM employees
WHERE salary > 10000 OR salary <= 10000;
--* Результат: все сотрудники, так как условие salary > 10000 OR salary <= 10000 истинно для всех значений salary.

--* 8. Ответить в 1 предложении: чем он будет отличаться от результата этого запроса?
SELECT *
FROM employees
WHERE salary > 10000 OR salary < 10000;
--* Ответ: этот не включает сотрудников с salary = 10000

--* 9. Не выполняя запрос к базе, предсказать результат. 
SELECT *
FROM employees
WHERE salary > 10000 AND salary < 5000;
--* Результат: не будет ни одного сотрудника, так как не существует значений salary, которые больше 10000 и меньше 5000 одновременно.
