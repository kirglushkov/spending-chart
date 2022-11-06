import styled from "@emotion/styled";
import React from "react";

type Props = {
  total: number;
};

const COLOR_BROWN = "hsl(25, 47%, 15%)";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  color: ${COLOR_BROWN};

  h3 {
    margin: 0;
    font-size: 20px;
  }

  h2 {
    margin: 0;
    font-size: 32px;
  }
`;

const index = (props: Props) => {
  return (
    <Root>
      <h3>Total this month</h3>
      <h2>${props.total}</h2>
    </Root>
  );
};

export default index;
