import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing: border-box;
}

html, body, #root{
  height: 100%;
}

html{
  font-size: 10px;
}

body{
  font-size: 1.4rem;
  font-family:"Open Sans", sans-serif;
  background: #ecf1f8;
  color: #333;
  -webkit-font-smoothing: antialiased !important;
}

ul{
  list-style: none;
}

`;
