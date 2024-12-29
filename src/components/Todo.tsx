"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import * as S from "../styles/home.style";
import ItemList from "./common/ItemList";

import { TodoType } from "types/todo";

const Todo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_SERVER_URL}/items`
      );
      const todos = await res.json();
      setTodos(todos);
    };

    fetchTodos();
  }, []);

  const addTodo = async (newTodo: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newTodo }),
    });

    if (!res.ok) {
      throw new Error("todo 등록 에러");
    }

    const data = await res.json();
    return data;
  };

  const addTodoHandler = async () => {
    if (todo.trim() === "") return;

    try {
      const newTodo = await addTodo(todo);
      setTodos((prevTodos) =>
        Array.isArray(prevTodos) ? [...prevTodos, newTodo] : [newTodo]
      );
      setTodo("");
    } catch (error) {
      console.error("todo 추가 실패", error);
    }
  };

  return (
    <S.HomeLayout>
      <S.HomeInputRow>
        <S.TodoInput
          placeholder="할 일을 입력해주세요"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodoHandler();
            }
          }}
        />
        <S.AddBtn $bgImg="/addL.png" onClick={addTodoHandler}></S.AddBtn>
      </S.HomeInputRow>

      <S.TodoListRow>
        <ItemList
          icon={
            <Image
              src="/todo.svg"
              alt="Todo Icon"
              priority
              width={101}
              height={36}
            />
          }
          todos={todos}
          isDone={false}
          setTodos={setTodos}
        />
        <ItemList
          icon={
            <Image
              src="/done.svg"
              alt="done Icon"
              priority
              width={97}
              height={36}
            />
          }
          todos={todos}
          isDone={true}
          setTodos={setTodos}
        />
      </S.TodoListRow>
    </S.HomeLayout>
  );
};

export default Todo;
