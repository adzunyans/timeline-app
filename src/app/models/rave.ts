export class Rave {
  id: number;
  userId: number;
  content: string;
  tag?: [string];

  constructor(id: number, userId: number, content: string, tag?: [string]) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.tag = tag;
  }
}