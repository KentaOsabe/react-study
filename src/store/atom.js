import { atom, selector } from 'recoil';

export const counterAtom = atom({
  key: 'counterAtom',
  default: 0
});

export const todoAtom = atom({
  key: 'todosAtom',
  default: [
    {
      id: 1,
      title: '夕飯',
      isDone: false,
    },
    {
      id: 2,
      title: '選択',
      isDone: true,
    },
    {
      id: 3,
      title: 'お迎え',
      isDone: false,
    },
    {
      id: 4,
      title: '掃除',
      isDone: false,
    },
    {
      id: 5,
      title: '勉強',
      isDone: true,
    },
  ],
});

export const todoLastIdSelector = selector({
  key: 'todoLastIdSelector',
  get: ({ get }) => {
    const todo = get(todoAtom);
    return todo.at(-1)?.id ?? 0;
  },
});