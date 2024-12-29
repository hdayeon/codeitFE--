import { TodoType } from "types/todo";

import { BASE_URL } from "api/url";

// Todo 배열인 경우
export const toggleTodosDone = async (
  id: number,
  todos: TodoType[],
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
) => {
  const updatedTodos = todos.map((item) =>
    item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
  );
  setTodos(updatedTodos);

  try {
    const updatedTodo = updatedTodos.find((item) => item.id === id);
    if (updatedTodo) {
      await fetch(`${BASE_URL}/items/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCompleted: updatedTodo.isCompleted }),
      });
    }
  } catch (error) {
    console.error("todo 완료 상태 변경 실패", error);
  }
};

// Todo 개별인 경우
export const toggleTodoDone = async (
  todo: TodoType,
  setTodo: React.Dispatch<React.SetStateAction<TodoType>>
) => {
  const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
  setTodo(updatedTodo);

  try {
    await fetch(`${BASE_URL}/items/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: updatedTodo.isCompleted }),
    });
  } catch (error) {
    console.error("todo 완료 상태 변경 실패", error);
  }
};
