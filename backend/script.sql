use das_global;

CREATE TABLE empresa (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    pais VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE sucursal (
    id INT NOT NULL AUTO_INCREMENT,
    empresa_id INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (empresa_id) REFERENCES empresa(id) ON DELETE CASCADE
);

CREATE TABLE colaborador (
    id INT NOT NULL AUTO_INCREMENT,
    sucursal_id INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    cui VARCHAR(20) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (sucursal_id) REFERENCES sucursal(id) ON DELETE CASCADE
);

select * from colaborador;