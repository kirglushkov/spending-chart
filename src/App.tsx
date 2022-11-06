import React from "react";
import styled from "@emotion/styled";
import { Global, Interpolation, Theme } from "@emotion/react";
import MyBalance from "./components/myBalance";
import SpendingChart from "./components/spendingChart";

const PADDING = 20;

type Props = {};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  max-width: 540px;
  gap: ${PADDING}px;
`;

const App = (props: Props) => {
  const globalStyles: Interpolation<Theme> = {
    body: {
      backgroundColor: "#F7E9DC",
    },
  };

  return (
    <Root>
      <Global styles={globalStyles} />
      <MyBalance />
      <SpendingChart />
    </Root>
  );
};

export default App;
