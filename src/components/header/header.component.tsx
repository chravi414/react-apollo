import React from "react";

import { Logo } from "../logo";

import * as styled from "./header.styled";

export const Header: React.FC = () => {
  return (
    <styled.HeaderWrapper>
      <Logo />
      <styled.MenuWrapper>
        <styled.MenuItem>
          <a href="/home">Home</a>
        </styled.MenuItem>
        <styled.MenuItem>
          <a href="/login">Login</a>
        </styled.MenuItem>
      </styled.MenuWrapper>
    </styled.HeaderWrapper>
  );
};
