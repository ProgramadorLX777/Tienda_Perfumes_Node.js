-- Crear base de datos:
create database if not exists perfumes;

-- Usar base de datos perfumes:
use perfumes;

-- Creación de tabla Productos:
create table productos(
    id_producto int primary key auto_increment,
    nombre_producto varchar(30) not null,
    cantidad_ml int not null,
    precio_producto decimal(10,3)
);

-- Creación de tabla Proveedores:
create table proveedores(
    id_proveedor int primary key auto_increment,
    rut_proveedor varchar(15) not null,
    id_producto_asociado int not null,
    nombre_proveedor varchar(30) not null,
    region_proveedor varchar(60) NOT NULL,
    comuna_proveedor varchar(40) not null,
    numero_local int NOT NULL,
    fono_proveedor varchar(15) not null,
    foreign key (id_producto_asociado) references productos(id_producto)
);

-- Creación de tabla Clientes:
create table clientes(
    id_cliente int PRIMARY KEY auto_increment,
    rut_cliente varchar(15),
    nombre_cliente varchar(20) not null,
    apellido_cliente varchar(40) not null,
    region_cliente varchar(60),
    comuna_cliente varchar(40),
    villa_pasaje varchar(40),
    numero_casa_depto int,
    fono_cliente int
);

-- Creación de tabla Pedidos:
create table pedidos(
    id_pedido int primary key auto_increment,
    id_producto_comprar int not null,
    cantidad_comprar int not null,
    tipo_de_pago varchar(30),
    fecha_pedido date,
    foreign key (id_producto_comprar) references productos(id_producto)
);

-- Datos para ingresar a la base de datos:
INSERT INTO productos VALUES(null, "Farenheight", 100, 17000);
INSERT INTO productos VALUES(null, "Acqua di Gio, 50, 11000");

INSERT INTO pedidos VALUES(null, 1, 5, "debito", "2024-01-31");
INSERT INTO pedidos VALUES(null, 2, 3, "efectivo", "2024-03-25");

INSERT INTO clientes VALUES(null, "21774978-1", "Enrique", "Carrasco", "Metropolitana", "Santiago", "Los alamos", 3678, 94642950);
INSERT INTO clientes VALUES(null, "14865127-4", "Gerardo", "Diaz", "Atacama", "Atacama", "Los tres trigales", 7985, 958129412);

INSERT INTO proveedores VALUES(null, "14987451-4", 1, "PerfumeXS", "Coquimbo", "Coquimbo", 4843, 915948732);
INSERT INTO proveedores VALUES(null, "10848641-2", 2, "Fraganticas", "Libertador Bernando", "Coinco", 7844, 964826279);

-- Obtener datos de las tablas:
SELECT * FROM productos;
SELECT * FROM proveedores;
SELECT * FROM clientes;
SELECT * FROM pedidos;



