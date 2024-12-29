import styled from "styled-components";
import palette from "../palette";

export const Btn = styled.button<{ $bgImg: string }>`
  width: 100%;
  max-width: 168px;
  height: 56px;
  border: none;
  background-color: transparent;
  background-image: url(${({ $bgImg }) => $bgImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const TodoToggleBtn = styled.button<{ $isDone?: boolean }>`
  width: 32px;
  height: 32px;
  margin-left: 10px;
  border-radius: 50%;
  border: 2px solid
    ${({ $isDone }) => ($isDone ? palette.violet600 : palette.slate900)};
  background-color: ${({ $isDone }) =>
    $isDone ? palette.violet600 : "#fefce8"};
  background-image: ${({ $isDone }) =>
    $isDone ? 'url("/checkedBtn.png")' : "none"};
  background-position: center;
  background-repeat: no-repeat;
`;

export const DetailToggleBtn = styled(TodoToggleBtn)`
  margin-left: none;
`;
