import styled from "@emotion/styled";
import React from "react";
import Logo from "../../../images/logo.svg";
const PADDING = 20;

type Props = {};

const COLOR_RED = "hsl(10, 79%, 65%)";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${COLOR_RED};
  border-radius: 12px;
  padding: ${PADDING}px;
  color: white;
`;

const Title = styled.div``;
const BalanceRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Balance = styled.div`
  font-size: 24px;
`;

const index = (props: Props) => {
  return (
    <Root>
      <BalanceRoot>
        <Title>My balance</Title>
        <Balance>$ 1,000.00</Balance>
      </BalanceRoot>
      <img src={Logo}></img>
    </Root>
  );
};

export default index;
