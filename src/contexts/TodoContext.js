import React from "react";
import { createContext, useContext } from "react";

const intialVal = {
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  updateTodos: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
};

export const TodoContext = createContext(intialVal);

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
