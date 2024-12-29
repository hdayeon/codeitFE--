"use client";

import React, { ReactNode } from "react";
import Link from "next/link";

import * as S from "../../styles/home.style";
import * as SC from "../../styles/common/btn.style";
import { toggleTodosDone } from "utils/toggleTodo";

import { TodoType } from "types/todo";

interface ItemListProps {
  icon: ReactNode;
  todos: TodoType[];
  isDone: boolean;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

const ItemList: React.FC<ItemListProps> = ({
  icon,
  todos,
  isDone,
  setTodos,
}) => {
  return (
    <S.ItemListSection>
      {icon}
      <S.TodoList>
        {todos
          ?.filter((item) => item.isCompleted === isDone)
          .map((item) => (
            <S.TodoListItem key={item.id}>
              <SC.TodoToggleBtn
                $isDone={isDone}
                onClick={() => toggleTodosDone(item.id, todos, setTodos)}
              />
              <Link
                href={`/items/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <S.TodoSpan $txtDeco={isDone ? "line-through" : "none"}>
                  {item.name}
                </S.TodoSpan>
              </Link>
            </S.TodoListItem>
          ))}
      </S.TodoList>
    </S.ItemListSection>
  );
};

export default ItemList;
