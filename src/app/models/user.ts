export class User {
  userId: number;
  userName: string;
  desc?: string;

  constructor(userId: number, userName: string, desc?: string) {
    this.userId = userId;
    this.userName = userName;
    this.desc = desc;
  }
}