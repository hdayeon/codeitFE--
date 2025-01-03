import styled from "styled-components";
import palette from "./palette";
import media from "./media";
import { Btn } from "./common/btn.style";

export const HomeLayout = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  margin: 24px auto 0;
  font-family: "NanumSquare";
  color: ${palette.slate800};
`;

export const HomeInputRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 34px;
`;

export const TodoInput = styled.input`
  width: 100%;
  max-width: 968px;
  height: 56px;
  padding: 0 24px;
  border: 2px solid ${palette.slate900};
  border-radius: 24px;
  box-shadow: 3px 4px 0 rgba(0, 0, 0, 1);
  outline: none;
  background-color: ${palette.slate100};
`;

export const AddBtn = styled(Btn)<{ $bgImgS: string }>`
  min-width: 162px;

  ${media.small`
    width: 56px;
    min-width: 56px;
    height: 56px;
    background-image: ${({ $bgImgS }: { $bgImgS: string }) =>
      `url(${$bgImgS})`};
  `};
`;

export const TodoListRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 32px;

  ${media.medium`
    flex-direction: column;
  `};
`;

export const ItemListSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TodoList = styled.ul`
  width: 100%;
  margin: 16px 0 0;
`;

export const TodoListItem = styled.li<{ $bgColor?: string }>`
  width: 100%;
  max-width: 588px;
  height: 50px;
  border-radius: 27px;
  border: 2px solid ${palette.slate900};
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  background-color: ${({ $bgColor }) => $bgColor};
`;

export const TodoSpan = styled.span<{ $txtDeco?: string }>`
  color: ${palette.slate800};
  font-size: 16px;

  text-decoration: ${({ $txtDeco }) => $txtDeco};
`;

export const EmpBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const EmpLP = styled.p`
  display: block;

  ${media.small`
    display: none;
  `};
`;

export const EmpSP = styled.p`
  display: none;

  ${media.small`
    display: block;
  `};
`;

export const EmpP = styled.p`
  width: 100%;
  font-weight: 700;
  line-height: 18.16px;
  color: ${palette.slate400};
`;
