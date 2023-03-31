CREATE TABLE comentarios (
  id int(11) NOT NULL,
  cuerpo_comentario text NOT NULL,
  usuario_id int(11) NOT NULL,
  post_id int(11) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT comentarios_post FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT comentarios_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

INSERT INTO comentarios (id, cuerpo_comentario, usuario_id, post_id)
VALUES (1000, "Me gustó mucho este post", 1, 43),
(1001, "Por favor hagan más", 1, 43),
(1002, "Nah, no habrá autos así en mucho tiempo", 2, 63);

SELECT * FROM comentarios;

SELECT
  posts.titulo AS post,
  usuarios.login AS usuario,
  comentarios.cuerpo_comentario AS comentario
FROM comentarios
INNER JOIN usuarios ON comentarios.usuario_id = usuarios.id
INNER JOIN posts ON comentarios.post_id = posts.id
WHERE comentarios.usuario_id = 1;
