import React from 'react';
import { useReducer } from 'react';

type TTodo = {
  todo: string;
  id: number;
};

type TTodoState = {
  todos: TTodo[];
};

type TAction =
  | {
      type: 'ADD';
      payload: TTodo;
    }
  | {
      type: 'REMOVE';
      payload: number;
    }
  | {
      type: 'CLEAR';
    };

function todoReducer(state: TTodoState, action: TAction): TTodoState {
  switch (action.type) {
    case 'ADD':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    case 'CLEAR':
      return { todos: [] };
    default:
      throw new Error('Action in todoReducer not supported');
  }
}

const initialState: TTodoState = {
  todos: [],
};

export const Todos = () => {
  const [todoState, dispatchFunction] = useReducer(todoReducer, initialState);

  return <h1>Todos</h1>;
};
