import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor() {}

  private names: string[] = [];
  public addUser(name: string) {
    this.names.push(name);
  }
  get users(): string[] {
    return this.names;
  }
}
