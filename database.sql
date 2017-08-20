CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(80) NOT NULL,
    last_name VARCHAR(80) NOT NULL,
	job_title VARCHAR (80) NOT NULL,
	salary INT NOT NULL 
);

INSERT INTO employees (first_name, last_name, job_title, salary)
VALUES ('Tom', 'Ritland', 'Developer', 95000);