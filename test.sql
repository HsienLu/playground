SELECT
    students.name,
    AVG(grades.score)
FROM
    students
JOIN
    grades ON students.id = grades.students_Id
GROUP BY
    students.id,students.name