import React, { useContext, useRef } from "react";
import { useDrop } from "react-dnd";
import { MdAdd } from "react-icons/md";
import BoardContext from "../Board/context";
import Card from "../Card";
import { Container } from "./styles";

export default function List({ data, index: listIndex }) {
  const ref = useRef();

  const { move } = useContext(BoardContext);

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;

      if (draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = targetSize.height / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedTop < targetCenter) {
        return;
      }
      if (draggedTop > targetCenter) {
        return;
      }
      move(draggedListIndex, targetListIndex, draggedIndex);

      item.listIndex = targetListIndex;
    },
  });

  dropRef(ref);

  return (
    <Container ref={ref} done={data.done}>
      <header>
        <h2>{data.title}</h2>

        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color={"#fff"} />
          </button>
        )}
      </header>
      <ul>
        {data.cards.length ? (
          data.cards.map((card, index) => (
            <Card key={"card" + card.id} card={card} index={index} listIndex={listIndex} />
          ))
        ) : (
          <Card card={false} listIndex={listIndex} index={0} />
        )}
      </ul>
      <span>{data.title}</span>
    </Container>
  );
}
