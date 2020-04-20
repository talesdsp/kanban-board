import React from "react";
import { Container, Label } from "./styles";

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <img src="https://api.adorable.io/avatars/24/al" alt="" />
    </Container>
  );
}
