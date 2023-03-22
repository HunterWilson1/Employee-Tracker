INSERT INTO department(department_name)
VALUES
('Management'),
('Engineering'),
('Finance'),
('Human Resources');

INSERT INTO role(title, salary, department_id)
VALUES 
('Manager', 100000, 1),
('Software Engineer', 70000, 2),
('Accountant', 50000, 3),
('HR Representative', 40000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Malone', 'Brown', 1, 1),
('Haywood', 'Jablomi', 2, NULL),
('Sally', 'Leron', 3, NULL),
('Stan', 'LEE', 4, NULL);
