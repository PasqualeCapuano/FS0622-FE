import { Todo } from './models/todo';

export async function getTodos(): Promise<Todo[]> {
  const response = await fetch('assets/data/data.json');
  return await response.json();
}
