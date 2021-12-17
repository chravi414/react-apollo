import React from "react";

import * as styled from "./logo.styled";

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <styled.LogoImage
        src="https://vscode.github.com/assets/img/github-vscode-icon.svg"
        alt=""
      />
    </div>
  );
};
