import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { PieChart, Pie, Label } from "recharts";

const Card = styled.div`
  width: 300px;
  padding: 2rem 0;
  border-radius: 3rem;
  background: #191919;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 64px;
  margin-bottom: 1rem;
`;

const CardText = styled.div`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? 500 : 400)};
  text-align: center;
  color: ${(props) => rgba("white", props.opacity)};
`;

const ChartWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const ChartLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.875rem;
  color: ${rgba("white", 0.5)};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  text-align: center;
  transition: opacity 0.25s;
`;

const ChartLabelValue = styled.div`
  font-size: 1.75rem;
  color: ${rgba("white", 0.85)};
`;

const data = [
  { name: "Lost", value: 672, fill: "#292929" },
  { name: "Strong", value: 462, fill: "#753bde" },
  { name: "Moderate", value: 127, fill: "#cb34d2" },
  { name: "Low", value: 41, fill: "#75ebc7" },
];

const PieChartCard = ({}) => {
  const [active, setActive] = useState("");
  const [mouseOver, setMouseOver] = useState(false);
  const activeItem = data.find((obj) => obj.name === active);

  return (
    <Card>
      <div>
        <CardText size="1.25rem" opacity={0.75} bold>
          Engagement
        </CardText>
        <CardText size="0.75rem" opacity={0.5}>
          Over last 30 days
        </CardText>
      </div>
      <ChartWrapper>
        <ChartLabel isVisible={mouseOver}>
          {activeItem && activeItem.name}
          <ChartLabelValue>{active !== "" && activeItem.value}</ChartLabelValue>
        </ChartLabel>
        <PieChart width={210} height={210}>
          <Pie
            isAnimationActive={false}
            startAngle={90}
            endAngle={450}
            strokeWidth={0}
            data={data}
            innerRadius={60}
            outerRadius={80}
            onMouseEnter={(e) => {
              setActive(e.name);
              setMouseOver(true);
            }}
            onMouseLeave={(e) => {
              setMouseOver(false);
            }}
          />
        </PieChart>
      </ChartWrapper>
    </Card>
  );
};

export default PieChartCard;
