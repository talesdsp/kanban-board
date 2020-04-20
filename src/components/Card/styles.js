import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5%;
  margin-bottom: 1rem;
  padding: 1.5rem;
  box-shadow: 0 0.1rem 0.4rem 0 rgba(192, 28, 230, 0.8);
  border-top: 2rem solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  header {
    position: relative;
    top: -2.2rem;
    left: 1.5rem;
  }

  p {
    font-weight: 600;
    line-height: 2rem;
  }

  img {
    margin-top: 0.5rem;
  }
`;
export const Label = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 2%;
  display: inline-block;

  background: ${(props) => props.color};
`;
