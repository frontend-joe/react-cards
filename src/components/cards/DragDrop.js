import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { ReactSortable } from "react-sortablejs";

const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  padding: 1rem 0;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 4px 15px ${rgba("black", 0.05)};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 1rem;
  cursor: default;
`;

const ItemImage = styled.img`
  width: 44px;
  height: 44px;
  padding: 2px;
  margin-right: 0.75rem;
  border-radius: 50%;
  border: 1px solid ${rgba("black", 0.05)};
`;

const ItemTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${rgba("black", 0.85)};
`;

const ItemSubtitle = styled.div`
  color: ${rgba("black", 0.38)};
  font-size: 0.75rem;
`;

const ItemLikes = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${rgba("black", 0.38)};

  & > i {
    margin-right: 0.25rem;
    font-size: 1rem;
    color: #fe0f7c;
  }
`;

const DragDrop = () => {
  const [state, setState] = useState([
    {
      id: 1,
      title: "developerdylan",
      subtitle: "Frontend Developer",
      likes: 565
    },
    { id: 2, title: "bart.code", subtitle: "Web Developer", likes: 452 },
    { id: 4, title: "lukes.code", subtitle: "Junior Developer", likes: 364 },
    { id: 3, title: "coding.beast", subtitle: "Web Developer", likes: 487 }
  ]);

  return (
    <Card>
      <ReactSortable list={state} setList={setState}>
        {state.map(item => (
          <Item key={item.id}>
            <ItemImage src={require(`../../assets/images/${item.title}.png`)} />
            <div style={{ flex: 1 }}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemSubtitle>{item.subtitle}</ItemSubtitle>
            </div>
            <ItemLikes>
              <i className="material-icons-outlined">favorite</i>
              <span>{item.likes}</span>
            </ItemLikes>
          </Item>
        ))}
      </ReactSortable>
    </Card>
  );
};

export default DragDrop;
