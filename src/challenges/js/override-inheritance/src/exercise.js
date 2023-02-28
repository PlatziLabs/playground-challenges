import { Comment } from "./Comment";
import { Student } from "./Student";

export class TeacherStudent extends Student {

  constructor(parentProps, skills) {
    super(parentProps);
    this.skills = skills;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: `profesor de ${this.skills}`,
    });
    return comment.publicar()
  }
}
