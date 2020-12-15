import React, { useState } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import json from "./countryPicker.json";

const Card = styled.div`
  position: relative;
  width: 200px;
  padding: 1rem;
  border-radius: 3rem;
  background: #7245c7;
`;

const Input = styled.button`
  color: ${rgba("white", 0.85)};
  background: transparent;
`;

const Placeholder = styled.div`
  color: ${rgba("white", 0.5)};
`;

const openStyles = css`
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
`;

const Dialog = styled.div`
  position: absolute;
  overflow: auto;
  top: 100%;
  padding: 1.5rem;
  height: 260px;
  visibility: hidden;
  opacity: 0;
  transform: translateY(1rem);
  background: #fff;
  transition-property: visibility, opacity, transform;
  transition-duration: 0.35s;
  ${(p) => p.open && openStyles};
`;

const Row = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Flag = styled.img`
  width: 30px;
`;

const getFlag = (code) => `https://www.countryflags.io/${code}/flat/64.png`;

const CountryDialog = ({ open, setOpen, setCountry }) => (
  <Dialog open={open}>
    {json.map((c) => (
      <Row
        onClick={() => {
          setOpen(false);
          setCountry(c.name);
        }}
      >
        <Flag src={getFlag(c.code)} />
        <span>{c.name}</span>
      </Row>
    ))}
  </Dialog>
);

const CountryPicker = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  return (
    <Card>
      <CountryDialog open={open} setOpen={setOpen} setCountry={setCountry} />
      <Input onClick={() => setOpen(!open)}>
        <Placeholder>{country === "" ? "Country" : country}</Placeholder>
      </Input>
    </Card>
  );
};

export default CountryPicker;
