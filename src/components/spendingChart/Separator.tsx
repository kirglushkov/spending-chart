import styled from "@emotion/styled";
import React from "react";

const Root = styled.div`
  width: 100%;
  height: 1px;
  background: hsl(25, 47%, 15%);
  opacity: 0.2;
`;

function Separator() {
  return <Root></Root>;
}

export default Separator;
