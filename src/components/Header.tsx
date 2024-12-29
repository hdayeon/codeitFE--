"use client";

import React from "react";
import Link from "next/link";

import * as S from "../styles/header.style";

const Header: React.FC = () => {
  return (
    <S.HeaderLayout>
      <S.HeaderBox>
        <Link href="/">
          <S.LogoBox />
        </Link>
      </S.HeaderBox>
    </S.HeaderLayout>
  );
};

export default Header;
