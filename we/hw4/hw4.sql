--* 1. Вывести все заказы, отсортированные по убыванию по стоимости
SELECT * FROM Orders ORDER BY order_price DESC;

--* 2. Вывести всех заказчиков, у которых почта зарегистриварована на gmail.com
SELECT * FROM Customer WHERE email LIKE '%gmail.com';

--* 3. Вывести заказы, добавив дополнительный вычисляемый столбец status, 
--* который вычисляется по стоимости заказа и имеет три значения: low, middle, high.
SELECT *,
    CASE 
        WHEN order_price < 50 THEN 'low'
        WHEN order_price < 100 THEN 'middle'
        ELSE 'high'
    END as status
FROM Orders;

--* 4. Вывести заказчиков по убыванию рейтинга. (рейтинг - сумма всех заказов клиента?)
SELECT 
    c.*, 
    SUM(o.order_price) as total_spent
FROM Customer c
JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id
ORDER BY total_spent DESC;

--* 5. Вывести всех заказчиков из города на ваш выбор. 
SELECT * FROM Customer WHERE city = 'New York';

--* 6. Написать запрос, который вернет самый часто продаваемый товар. 
SELECT item_number, item_description, COUNT(*) as times_sold
FROM Orders
GROUP BY item_number, item_description
ORDER BY times_sold DESC
LIMIT 1;

--* 7. Вывести список заказов с максимальной скидкой. 
SELECT *
FROM Orders
WHERE (order_price - discounted_price) = (
    SELECT MAX(order_price - discounted_price)
    FROM Orders
);

--* 8. Ответьте в 1 предложении: как вы определите скидку?
--* Скидка - это разница между нормальной и скидочной ценой.

--* 9. Ответьте в 1 предложении: может ли это быть разница между нормальной ценой и скидочной ценой? 
--* Да, может.

--* 10. Написать запрос, который выведет все заказы с дополнительным столбцом процент_скидки, 
--* который содержит разницу в процентах между нормальной и скидочной ценой?
SELECT *,
    ROUND(((order_price - discounted_price) / order_price * 100), 2) as discount_percentage
FROM Orders;
