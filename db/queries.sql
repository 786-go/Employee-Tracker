USE emp_tracker;

select * from department;

select * from roles;

select * from employee;

updateemployee set role_id = ? where id = ?,
[role_id,employeeid]