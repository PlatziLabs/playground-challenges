Dadas las siguientes clases:
```js
class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    return comment.publicar();
  }
}

class Comment {
  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    const comentario = {
      studentName: this.studentName + " (" + this.studentRole + ")",
      likes: this.likes + " likes",
      content: this.content
    }
    return comentario
  }
}
```

Tu reto consisten en:
- Hacer que la clase `TeacherStudent` herede de `Student`
- Agrega un propiedad de tipo Array llamada `skills` a la clase `TeacherStudent`.
- Sobrescribir el metodo `publicarComentario` dentro de `TeacherStundent` para agregar el array de skills en su la propiedad `studentRole` de la clase `Comment` como un string de la siguiente manera "profesor de skill1, skill2".

Input

```js
  const skills = ["js", "python", "mongodb"]
  const props = {
    name: "Erik Ochoa",
    username: "elyager"
  }

  const profesor = new TeacherStudent(props, skills)
  profesor.publicarComentario('Mi primer comentario')
```

Output

```js
{
  "studentName":"Erik Ochoa (profesor de js,python,mongodb)",
  "likes":"0 likes",
  "content":"Mi primer comentario"
}
```