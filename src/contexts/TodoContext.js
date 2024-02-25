import React from "react";
import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: false,
    },
  ],

  addTodos: (todo) => {},
  updateTodos: (id, todo) => {},
  deleteTodos: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
