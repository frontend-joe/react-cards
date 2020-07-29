import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import Chart from "react-apexcharts";

const Card = styled.div`
  width: 300px;
  border-radius: 3rem;
  background: #191919;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 64px;
`;

const CardText = styled.div`
  font-size: ${props => props.size};
  font-weight: ${props => (props.bold ? 700 : 400)};
  color: ${props => rgba("white", props.opacity)};
`;

const ChartWrapper = styled(Chart)`
  display: flex;
  justify-content: center;
`;

const state = {
  options: {
    plotOptions: {
      radialBar: {
        hollow: { size: "28%" },
        dataLabels: {
          name: { show: false },
          value: { show: false }
        },
        track: { background: rgba("white", 0.0375) }
      }
    },
    stroke: { lineCap: "round" },
    colors: ["#C200FB", "#2191FB", "#50FFB1"]
  },
  series: [30, 40, 45]
};

const ActivityRings = () => (
  <Card>
    <CardHeader>
      <CardText size="1rem" opacity={0.75} bold>
        Activity
      </CardText>
      <CardText size="0.75rem" opacity={0.5}>
        Today
      </CardText>
    </CardHeader>
    <ChartWrapper
      options={state.options}
      series={state.series}
      type="radialBar"
    />
  </Card>
);

export default ActivityRings;
