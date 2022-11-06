import React from "react";
import styled from "@emotion/styled";

const COLOR_RED = "hsl(10, 79%, 65%)";
const COLOR_BROWN = "hsl(25, 47%, 15%)";

const Bar = styled.div<{ height: number }>`
  width: 24px;
  height: ${({ height }) => height * 3}px;
  background: ${COLOR_RED};
  border-radius: 5px;
  text-align: center;
  :hover {
    background: hsl(10, 79%, 75%);
    :after {
      content: "$${({ height }) => height}";
      font-size: 12px;
      padding: 4px;
      border-radius: 5px;
      position: relative;
      top: -25px;
      color: white;
      background: ${COLOR_BROWN};
    }
  }
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  span {
    font-size: 12px;
  }
`;

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: end;

    container-type: inline-size;

  @container (min-width: 340px) {
    ${Bar} {
        width: 48px;
    }
`;

type Props = {
  day: string;
  amount: number;
};

const Value = ({ day, amount }: Props) => {
  return (
    <BarContainer>
      <Bar height={amount} />
      <span>{day}</span>
    </BarContainer>
  );
};

const Chart = ({ data }: { data: Props[] }) => {
  return (
    <Root>
      {data.map((item, index) => {
        return <Value key={index} day={item.day} amount={item.amount} />;
      })}
    </Root>
  );
};

export default Chart;
