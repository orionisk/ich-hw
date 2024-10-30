--* 1. Подключитесь к базе данных Students (которая находится на удаленном сервере). 

--* 2. Найдите самого старшего студента
SELECT * FROM Students ORDER BY age DESC LIMIT 1;
--* 3. Найдите самого старшего преподавателя
SELECT * FROM Teachers ORDER BY age DESC LIMIT 1;
--* 4. Выведите список преподавателей с количеством компетенций у каждого
SELECT 
    t.name,
    COUNT(tc.competencies_id) as competencies_count
FROM Teachers t
LEFT JOIN Teachers2Competencies tc ON t.id = tc.teacher_id
GROUP BY t.id, t.name

--* 5. Выведите список курсов с количеством студентов в каждом
SELECT 
    c.title,
    COUNT(sc.student_id) AS students_count
FROM Courses c
LEFT JOIN Students2Courses sc ON c.id = sc.course_id
GROUP BY c.id, c.title;

--* 6. Выведите список студентов, с количеством курсов, посещаемых каждым студентом.
SELECT 
    s.name,
    COUNT(sc.course_id) AS courses_count
FROM Students s
LEFT JOIN Students2Courses sc ON s.id = sc.student_id
GROUP BY s.id, s.name
