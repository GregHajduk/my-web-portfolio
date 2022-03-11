import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body { 
    font-family: 'Be Vietnam Pro', sans-serif;
    background-color:var(--main-bg-color);
    color: var(--main-text-color);
    overflow-x: hidden;
  }
  li {
    list-style: none;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  button{
    cursor: pointer;
  }
  img{
    display: block;
    width: 100%;
  }
  `;

export default GlobalStyles;
