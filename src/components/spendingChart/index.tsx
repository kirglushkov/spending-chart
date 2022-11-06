import styled from "@emotion/styled";
import React from "react";
import Total from "../total";
import Chart from "./Chart";
import Separator from "./Separator";

const PADDING = 20;
type Props = {};

const COLOR_WHITE = "hsl(33, 100%, 98%)";
const COLOR_BROWN = "hsl(25, 47%, 15%)";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLOR_WHITE};
  border-radius: 12px;
  padding: ${PADDING}px;
  gap: ${PADDING}px;
`;

const Title = styled.h1`
  color: ${COLOR_BROWN};
`;

import Data from "../../../data.json";

const Sum = Data.reduce((accumulator, object) => {
  return accumulator + object.amount;
}, 0);

const index = (props: Props) => {
  return (
    <Root>
      <Title>Spending - Lastsaas 7 days</Title>
      <Chart data={Data} />
      <Separator />
      <Total total={Sum} />
    </Root>
  );
};

export default index;
