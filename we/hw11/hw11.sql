--* 1. Подключиться к базе данных hr
--* 2. Вывести список region_id, total_countries, где total_countries - количество стран в таблице.
--* Подсказка: работаем с таблицей countries, использовать оконную функцию over() и суммировать count(country_id).
SELECT DISTINCT region_id,
       COUNT(country_id) OVER() as total_countries
FROM countries;
--* 3. Изменить запрос 2 таким образом, чтобы для каждого region_id выводилось количество стран в этом регионе. 
--* Подсказка: добавить partition by region_id в over().
SELECT DISTINCT region_id,
       COUNT(country_id) OVER(PARTITION BY region_id) as total_countries
FROM countries;
--* 4. Работа с таблицей departments.
--* Написать запрос, который выводит
--* location_id, department_name, dept_total, где dept_total - количество департаментов в location_id.
SELECT location_id,
       department_name,
       COUNT(department_id) OVER(PARTITION BY location_id) as dept_total
FROM departments;
--* 5. Изменить запрос 3 таким образом, чтобы выводились названия городов соответствующих location_id.
SELECT
    location_id,
    locations.city,
    department_name,
    COUNT(department_id) OVER(PARTITION BY location_id) AS dept_total
FROM departments
JOIN locations USING (location_id);

--* 6. Работа с таблицей employees.
--* Вывести manager_id, last_name, total_manager_salary,
--* где total_manager_salary - общая зарплата подчиненных каждого менеджера (manager_id). 
SELECT 
  manager_id, 
  last_name,
  SUM(salary) OVER(PARTITION BY manager_id) AS total_manager_salary
FROM employees;

  