"use client";

import React from "react";
import Link from "next/link";

import * as S from "../../styles/home.style";
import * as SC from "../../styles/common/btn.style";
import { toggleTodosDone } from "utils/toggleTodo";

import { TodoItem } from "../../../schemas/todo";
import palette from "styles/palette";

interface ItemListProps {
  todos: TodoItem[];
  isDone: boolean;
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

// Todo 리스트 컴포넌트
const ItemList: React.FC<ItemListProps> = ({ todos, isDone, setTodos }) => {
  return (
    <S.TodoList>
      {todos
        ?.filter((item) => item.isCompleted === isDone)
        .map((item) => (
          <S.TodoListItem
            key={item.id}
            $bgColor={item.isCompleted ? palette.violet100 : "none"}
          >
            <SC.TodoToggleBtn
              $isDone={isDone}
              onClick={() => toggleTodosDone(item.id, todos, setTodos)}
            />
            <Link href={`/items/${item.id}`} style={{ textDecoration: "none" }}>
              <S.TodoSpan $txtDeco={isDone ? "line-through" : "none"}>
                {item.name}
              </S.TodoSpan>
            </Link>
          </S.TodoListItem>
        ))}
    </S.TodoList>
  );
};

export default ItemList;
