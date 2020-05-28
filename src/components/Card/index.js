import React, { useContext, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import BoardContext from "../Board/context";
import { Container, Label } from "./styles";

export default function Card({ card, index, listIndex }) {
  const ref = useRef();

  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = targetSize.height / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }
      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }
      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging} empty={!card}>
      {card && (
        <>
          <header>
            {card.labels.map((color, index) => (
              <Label key={color + index} color={color} />
            ))}
            {card.content}
          </header>

          <footer>
            <img src={card.user} alt="avatar" />

            {card.tags.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </footer>
        </>
      )}
    </Container>
  );
}
