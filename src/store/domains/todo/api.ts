import { ITodoObj } from './interfaces';

export const getTodos = () => new Promise<ITodoObj>(
  res => setTimeout(() => res(
    {
      1: { id: '1', text: 'first', completed: false },
      2: { id: '2', text: 'second', completed: false }
    }
), 3000));
