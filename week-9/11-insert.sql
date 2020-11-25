CREATE TABLE IF NOT EXISTS MHQStudentE (
    ID 			INT 			AUTO_INCREMENT KEY,
    LastName 	VARCHAR(10) 	NOT NULL,
    FirstName	VARCHAR(255)
);

-- Single row insertion 
INSERT INTO `mhq`.`MHQStudentE`
(`LastName`,
`FirstName`
)
VALUES
('Benjamin', 'Sebin');

-- Inserting multiple rows
INSERT INTO `mhq`.`MHQStudentE`
(`LastName`,
`FirstName`
)
VALUES
('Benjamin', 'Sebin'),
('Benjamin', 'Sebin'),
('Benjamin', 'Sebin'),
('Benjamin', 'Sebin')
;

SELECT * FROM MHQStudentE;