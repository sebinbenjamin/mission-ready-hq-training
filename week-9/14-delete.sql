-- Deletes each row in the table.
-- Returns the no of rows deleted
DELETE FROM rainbow;

-- Use WHERE clause to specify the rows which are deleted
SELECT * FROM mhqstudentf;
DELETE FROM mhqstudentf
WHERE 
	ID = 16;
    
DELETE FROM mhqstudentf
WHERE 
	ID <= 20;

SELECT * FROM mhqstudentf;
-- Better performance/faster than a DELETE without WHERE clause
-- Does NOT return the No of rows affected.
TRUNCATE TABLE mhqstudentf;

