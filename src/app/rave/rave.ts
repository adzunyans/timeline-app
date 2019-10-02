export class Rave {
  id: number;
  userId: string;
  content: string;
  tag?: [string];

  constructor(id: number, userId: string, content: string, tag?: [string]) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.tag = tag;
  }
}