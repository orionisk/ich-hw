--* 1. вывести список всех сотрудников. 
SELECT *
FROM employees;

--* 2. Найти поле с зарплатой сотрудника. 
SELECT salary
FROM employees;

--* 3. Используя операторы case/when/end, изменить запрос так, чтобы результатом был только один столбец, 
--* назовите его SALARY_GROUP и оно будет принимать значение 1 если зп сотрудника больше 10000 и значение 0, если меньше.
SELECT
CASE
    WHEN salary > 10000 THEN 1
    ELSE 0
END AS SALARY_GROUP
FROM employees;

--* 4. Ответить одним предложением: почему выводится только один столбец?
--* Потому что в операторе SELECT указан только один вычисляемый столбец с именем "SALARY_GROUP".

--* 5. Изменить запрос, так, чтобы вывелось два столбца: имя сотрудника и новое поле SALARY_GROUP.
SELECT
    first_name,
    CASE
        WHEN salary > 10000 THEN 1
        ELSE 0
    END AS SALARY_GROUP
FROM employees;

--* 6. Вывести среднюю зарплату для департаментов с номерами 60, 90 и 100 используя составное условие.
SELECT AVG(salary)
FROM employees
WHERE department_id IN (60, 90, 100);

--* 7. Разделить уровни (level) сотрудников на junior < 10000,10000<mid<15000, senior>15000 в зависимости от их зарплаты.
--* Вывести список сотрудников (first_name, last_name, level).
SELECT
    first_name,
    last_name,
    CASE
        WHEN salary < 10000 THEN 'junior'
        WHEN salary >= 10000 AND salary < 15000 THEN 'mid'
        ELSE 'senior'
    END AS level
FROM employees;

--* 8. Посмотреть содержимое таблицы jobs.
--* Написать запрос c использованием оператора case/when/end, который возвращает 2 столбца: job_id, payer_rank, 
--* где столбец payer_rank формируется по правилу: если максимальная зарплата больше 10000, то “high_payer”, если меньше, то “low payer”. 
SELECT
    job_id,
    CASE
        WHEN max_salary > 10000 THEN 'high_payer'
        ELSE 'low_payer'
    END AS payer_rank
FROM jobs;

--* 9. Переписать этот запрос с использованием оператора IF.
SELECT
    job_id,
    IF(max_salary > 10000, 'high_payer', 'low_payer') AS payer_rank
FROM jobs;

--* 10. Поменять предыдущий запрос так, чтобы выводилось 3 столбца,
--* к двум существующим добавьте max_salary и отсортировать результат по убыванию. 
SELECT
    job_id,
    IF(max_salary > 10000, 'high_payer', 'low_payer') AS payer_rank,
    max_salary
FROM jobs
ORDER BY max_salary DESC;
