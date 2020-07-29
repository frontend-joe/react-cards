import React, { useState, useCallback, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import styled from "styled-components";
import { rgba } from "polished";

const List = styled.div`
  width: 280px;
  height: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 4px 15px ${rgba("black", 0.05)};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const ItemImage = styled.img`
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
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
    font-size: 1rem;
    color: #fe0f7c;
    margin-right: 0.25rem;
  }
`;

const Card = ({ id, title, subtitle, likes, index, moveCard }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: "card", id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={drag} key={id}>
      <Item>
        <ItemImage src={require("../../assets/images/nerd.png")} />
        <div style={{ flex: 1 }}>
          <ItemTitle>{title}</ItemTitle>
          <ItemSubtitle>{subtitle}</ItemSubtitle>
        </div>
        <ItemLikes>
          <i className="material-icons-outlined">favorite</i>
          <span>{likes}</span>
        </ItemLikes>
      </Item>
    </div>
  );
};

const DragDropCards = () => {
  const [items, setCards] = useState([
    { id: 1, title: "Nerd", subtitle: "Website Mentor", likes: 233 },
    { id: 2, title: "Joe", subtitle: "Website Developer", likes: 124 },
    { id: 3, title: "Harry", subtitle: "Website Mentor", likes: 233 },
    { id: 4, title: "Jack", subtitle: "Website Mentor", likes: 233 }
  ]);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      console.log("card moved");
      const dragCard = items[dragIndex];
      setCards(
        update(items, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        })
      );
    },
    [items]
  );

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <List>
          {/* <List> */}
          {items.map((item, index) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              likes={item.likes}
              index={index}
              moveCard={moveCard}
            />
          ))}
          {/* </List> */}
        </List>
      </DndProvider>
    </div>
  );
};

export default DragDropCards;
