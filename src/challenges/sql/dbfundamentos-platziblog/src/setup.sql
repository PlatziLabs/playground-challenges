-- Usuarios
CREATE TABLE usuarios (
  id int(11) NOT NULL,
  login varchar(30) NOT NULL,
  nickname varchar(40) NOT NULL,
  email varchar(40) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE(email)
);
INSERT INTO usuarios (id,login,nickname,email) 
VALUES
(1,'israel','Israel','israel@platziblog.com'),
(2,'monica','Moni','monica@platziblog.com'),
(3,'laura','Lau','laura@platziblog.com'),
(4,'edgar','Ed','edgar@platziblog.com'),
(5,'perezoso','Oso Perez','perezoso@platziblog.com');

-- Categorías
CREATE TABLE categorias (
  id int(11) NOT NULL,
  nombre_categoria varchar(30) NOT NULL,
  PRIMARY KEY (id)
); 
  INSERT INTO categorias (id,nombre_categoria)
  VALUES (1,'Ciencia');
  INSERT INTO categorias (id,nombre_categoria)
  VALUES (2,'Tecnología');
  INSERT INTO categorias (id,nombre_categoria)
  VALUES (3,'Deportes');
  INSERT INTO categorias (id,nombre_categoria)
  VALUES (4,'Espectáculos');
  INSERT INTO categorias (id,nombre_categoria)
  VALUES (5,'Economía');

-- Etiquetas
CREATE TABLE etiquetas (
  id int(11) NOT NULL,
  nombre_etiqueta varchar(30) NOT NULL,
  PRIMARY KEY (id)
); 
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (1,'Robótica');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (2,'Computación');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (3,'Teléfonos Móviles');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (4,'Automovilismo');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (5,'Campeonatos');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (6,'Equipos');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (7,'Bolsa de valores');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (8,'Inversiones');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (9,'Brokers');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (10,'Celebridades');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (11,'Eventos');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (12,'Moda');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (13,'Avances');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (14,'Nobel');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (15,'Matemáticas');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (16,'Química');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (17,'Física');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (18,'Largo plazo');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (19,'Bienes Raíces');
  INSERT INTO etiquetas (id,nombre_etiqueta)
  VALUES (20,'Estilo');

-- Posts
CREATE TABLE posts (
  id int(11) NOT NULL,
  titulo varchar(130) NOT NULL,
  fecha_publicacion timestamp NULL DEFAULT NULL,
  contenido text NOT NULL,
  estatus char(8) DEFAULT 'activo',
  usuario_id int(11) DEFAULT NULL,
  categoria_id int(11) DEFAULT NULL,
  PRIMARY KEY (id),
  -- KEY posts_usuarios_idx (usuario_id),
  -- KEY posts_categorias_idx (categoria_id),
  CONSTRAINT posts_categorias FOREIGN KEY (categoria_id) REFERENCES categorias (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT posts_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios (id) ON DELETE NO ACTION ON UPDATE CASCADE
);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (43,'Se presenta el nuevo teléfono móvil en evento','2030-04-05 00:00:00','Publicación 43','activo',1,2);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (44,'Tenemos un nuevo auto inteligente','2025-05-04 00:00:00','Publicación 44','activo',2,2);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (45,'Ganador del premio Nobel por trabajo en genética','2023-12-22 00:00:00','Publicación 45','activo',3,1);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (46,'Los mejores vestidos en la alfombra roja','2021-12-22 00:00:00','Publicación 46','activo',4,4);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (47,'Los paparatzi captan escándalo en cámara','2025-01-09 00:00:00','Publicación 47','inactivo',4,4);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (48,'Se mejora la conducción autónoma de vehículos','2022-05-23 00:00:00','Publicación 48','activo',1,2);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (49,'Se descubre nueva partícula del modelo estandar','2023-01-10 00:00:00','Publicación 49','activo',2,1);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (50,'Químicos descubren nanomaterial','2026-06-04 00:00:00','Publicación 50','activo',2,1);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (51,'La bolsa cae estrepitosamente','2024-04-03 00:00:00','Publicación 51','activo',2,5);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (52,'Bienes raices más baratos que nunca','2025-04-11 00:00:00','Publicación 52','inactivo',2,5);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (53,'Se fortalece el peso frente al dolar','2021-10-09 00:00:00','Publicación 53','activo',1,5);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (54,'Tenemos ganador de la formula e','2022-11-11 00:00:00','Publicación 54','activo',1,3);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (55,'Ganan partido frente a visitantes','2023-12-10 00:00:00','Publicación 55','activo',2,3);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (56,'Equipo veterano da un gran espectaculo','2023-12-01 00:00:00','Publicación 56','inactivo',2,3);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (57,'Escándalo con el boxeador del momento','2025-03-05 00:00:00','Publicación 57','activo',4,4);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (58,'Fuccia OS sacude al mundo','2028-10-10 00:00:00','Publicación 58','activo',1,2);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (59,'U.S. Robotics presenta hallazgo','2029-01-10 00:00:00','Publicación 59','activo',1,2);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (60,'Cierra campeonato mundial de football de manera impresionante','2023-04-10 00:00:00','Publicación 60','activo',2,3);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (61,'Escándalo en el mundo de la moda','2022-04-11 00:00:00','Publicación 61','activo',4,4);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (62,'Tenemos campeona del mundial de volleiball','2024-09-09 00:00:00','Publicación 62','inactivo',2,3);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (63,'Se descubre la unión entre astrofísica y fisica cuántica','2022-05-03 00:00:00','Publicación 63','inactivo',3,1);
  INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id) VALUES (64,'El post que se quedó huérfano','2029-08-08 00:00:00','Publicación 64','activo',NULL,NULL);

-- Posts Etiquetas
CREATE TABLE posts_etiquetas (
  id int(11) NOT NULL,
  post_id int(11) NOT NULL,
  etiqueta_id int(11) NOT NULL,
  PRIMARY KEY (id),
  -- KEY postsetiquetas_post_idx (post_id),
  -- KEY postsetiquetas_etiquetas_idx (etiqueta_id),
  CONSTRAINT postsetiquetas_etiquetas FOREIGN KEY (etiqueta_id) REFERENCES etiquetas (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT postsetiquetas_post FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (1,43,3);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (2,43,11);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (3,44,2);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (4,44,4);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (5,45,14);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (6,45,13);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (7,46,10);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (8,46,11);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (9,46,12);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (10,46,20);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (11,47,10);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (12,48,1);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (13,48,2);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (14,48,4);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (15,48,13);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (16,49,13);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (17,49,14);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (18,49,17);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (19,50,13);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (20,50,14);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (21,50,16);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (22,51,7);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (23,51,8);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (24,51,9);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (25,51,18);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (26,52,8);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (27,52,18);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (28,53,7);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (29,53,8);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (30,54,4);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (31,54,5);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (32,55,5);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (33,55,6);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (34,56,5);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (35,56,6);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (36,56,10);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (37,58,2);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (38,58,3);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (39,58,13);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (40,59,1);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (41,59,13);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (42,57,10);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (43,60,5);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (44,60,6);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (45,61,10);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (46,61,12);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (47,61,20);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (48,62,5);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (49,62,10);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (50,63,13);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (51,63,14);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (52,63,17);
  INSERT INTO posts_etiquetas (id,post_id,etiqueta_id) VALUES (53,52,19);

  
-- Otras cosas
