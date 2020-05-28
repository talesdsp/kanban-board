import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1.5rem;
  height: 100%;
  flex: 0 0 30rem;
  opacity: ${(props) => props.done && 0.7};

  + div {
    border-left: 0.1rem solid rgba(0, 0, 0, 0.05);
  }

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.2rem;

    h2 {
      font-weight: 600;
      font-size: 1.6rem;
      padding: 0 1rem;
    }

    button {
      width: 3rem;
      height: 3rem;
      border-radius: 0.3rem;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 1rem;
  }
  > span {
    font-size: 1.1rem;
    text-align: center;
    display: block;
    color: #555;
  }
`;
