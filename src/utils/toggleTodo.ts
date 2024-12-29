import { TodoType } from "types/todo";

export const toggleTodosDone = async (
  id: number,
  todos: TodoType[],
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>,
) => {
  const updatedTodos = todos.map((item) =>
    item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
  );
  setTodos(updatedTodos);

  try {
    const updatedTodo = updatedTodos.find((item) => item.id === id);
    if (updatedTodo) {
      await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/items/${id}`, {
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