"use client";

import React from "react";
import Link from "next/link";

import * as S from "../../styles/home.style";
import * as SC from "../../styles/common/btn.style";
import { toggleTodosDone } from "utils/toggleTodo";

import { TodoType } from "types/todo";
import palette from "styles/palette";

interface ItemListProps {
  todos: TodoType[];
  isDone: boolean;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

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
