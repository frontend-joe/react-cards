import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const colorLine = "#222A68";
const colorBar = "#8D84EB";

const Card = styled.div`
  position: relative;
  width: 340px;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 4px 15px ${rgba("black", 0.05)};
`;

const IGBladeCard = () => {
  const [data] = useState([
    { name: "J", change: 150, followers: 1800 },
    { name: "F", change: 200, followers: 2000 },
    { name: "M", change: 400, followers: 2400 },
    { name: "A", change: 600, followers: 3000 },
    { name: "M", change: 2000, followers: 5000 },
    { name: "J", change: 5000, followers: 10000 }
  ]);

  const formatLabel = number => {
    return number > 1000 ? (number / 1000).toString() + "K" : number.toString();
  };

  const formatXAxis = timestamp => {
    const date = new Date(timestamp * 1000);
    return date;
  };

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={data}
          margin={{
            top: 30,
            right: -20,
            left: -20,
            bottom: 0
          }}
        >
          <CartesianGrid stroke="rgba(0,0,0,0.05)" />
          <XAxis
            padding={{ left: 10, right: 10 }}
            axisLine={false}
            tickLine={false}
            tickMargin={5}
            tick={{ fontSize: 8 }}
            dataKey="name"
          />
          <YAxis
            dx={5}
            tickCount={5}
            type="number"
            domain={[0, 400]}
            axisLine={false}
            tickLine={false}
            tickMargin={5}
            width={70}
            label={{
              fill: colorBar,
              value: "Followers Change",
              fontSize: 10,
              fontWeight: 700,
              angle: -90
            }}
            tick={{ fontSize: 8 }}
            yAxisId="left"
          />
          <YAxis
            dx={-5}
            type="number"
            domain={[0, 30000]}
            axisLine={false}
            tickLine={false}
            width={70}
            label={{
              fill: colorLine,
              value: "Followers",
              fontSize: 10,
              fontWeight: 700,
              angle: 90
            }}
            tickMargin={5}
            tick={{ fontSize: 8 }}
            tickFormatter={formatLabel}
            yAxisId="right"
            orientation="right"
          />
          <Bar
            maxBarSize={5}
            yAxisId="left"
            type="monotone"
            dataKey="change"
            fill={colorBar}
            activeDot={{ r: 8 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="followers"
            stroke={colorLine}
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IGBladeCard;
