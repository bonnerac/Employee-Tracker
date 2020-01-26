INSERT INTO department (id, name)
VALUES (1, "Sales"), (2, "IT"), (3, "Marketing");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Associate", 40000, 1), (2, "Sales Manager", 75000, 1), (3, "Sales Director", 120000, 1), (4, "IT Administrator", 50000, 2), (5, "IT Project Manager", 90000, 2), (6, "IT Director", 150000, 2), (7, "Marketing Executive", 50000, 3), (8, "Marketing Manager", 80000, 3), (9, "VP of Marketing", 120000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Bobby", "Reed", 1, 2), (2, "Louis", "Patterson", 2, 3), (3, "Gary", "Jenkins", 3, null), (4, "Juan", "Hernandez", 4, 5), (5, "Jennifer", "Henderson", 5, 6), (6, "Jean", "White", 6, null), (7, "Janet", "Baker", 7, 8), (8, "Brian", "Davis", 8, 9), (9, "Nicholas", "Garcia", 9, null);


