USE emp_tracker;


INSERT INTO DEPARTMENT(NAME)VALUES("sales"),("r&d"), ("hr"), ("service");
INSERT INTO ROLES(TITLE, SALARY, department_id) VALUES
("manager", 80000, 1),
("manager", 80000, 2),
("manager", 80000,3),
("manager", 80000, 4),
("sales rep", 55000, 1), ("architect", 85000, 2), ("payroll", 70000, 3), ("technician", 65000, 4);


INSERT INTO EMPLOYEE(FIRST_NAME,LAST_NAME,ROLE_ID,MANAGER_ID)VALUES
("TOM", "BROOKS", 1,NULL),
("LANCE", "ARMSTRONG", 2, NULL),
("MIKE", "JONES", 3, NULL), 
("ASHLEY", "WINNING", 4, NULL),
("HANNA", "JONES", 5,1), 
("TIGER", "WOODS", 6,2),
("CELINE", "DION", 7,3),
("LAURYN", "HILL", 8,4);