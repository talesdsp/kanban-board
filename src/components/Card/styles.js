import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #fff;
  width: 100%;
  height: 8rem;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  padding: 1rem 2rem;
  cursor: grab;

  > header {
    position: relative;
  }

  > footer {
    position: absolute;
    bottom: 1rem;
    img {
      vertical-align: middle;
      width: 2.4rem;
      border-radius: 0.12rem;
      margin-right: 1rem;
    }

    > span {
      font-size: 1.2rem;
      border: 0.1rem solid rgba(190, 103, 250, 1);
      padding: 0.25rem 0.5rem;
      color: rgba(190, 103, 250, 1);
    }
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 0.2rem dashed rgba(0, 0, 0, 0.2);
      padding-top: 3.1rem;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;
      p,
      img,
      span,
      header {
        opacity: 0;
      }
    `}

  ${(props) =>
    props.empty &&
    css`
      border: 0.2rem dashed rgba(0, 0, 0, 0.1);
      padding-top: 3.1rem;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: initial;
    `}
`;
export const Label = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 2%;
  display: inline-block;

  background: ${(props) => props.color};
`;
