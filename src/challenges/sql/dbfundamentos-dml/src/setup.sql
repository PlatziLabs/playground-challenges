CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    edad INTEGER,
    correo_electronico VARCHAR(100),
    telefono VARCHAR(20)
);
INSERT INTO students (nombre, apellido, edad, correo_electronico, telefono)
VALUES
('Juan', 'Pérez', 20, 'juanperez@gmail.com', '555-1234'),
('Ana', 'López', 18, 'anita_lopez@yahoo.com', '555-4321'),
('Pedro', 'González', 22, 'pedro.gonzalez@hotmail.com', '555-5678'),
('María', 'Martínez', 19, 'maria_martinez@outlook.com', '555-8765'),
('Luis', 'Sánchez', 21, 'luis.sanchez@gmail.com', '555-2468');
