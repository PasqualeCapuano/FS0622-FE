import { Users } from "../models/users";

export async function getUsers(): Promise<Users[]> {
  return await (await fetch('http://localhost:3000/users')).json();
}
