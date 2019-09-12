// styles/global.js
import css from 'styled-jsx/css'
import Colors from './colors';

export default css.global`
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${Colors.background};
    color: ${Colors.white};
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    overflow-x: hidden;
    line-height: 1.5em;
  }
  a {
    color: ${Colors.white};
    text-decoration: none;
  }
  p {
    margin: 0;
  }
  h1 {
    font-weight: 700;
  }
  button {
    width: fit-content;
    color: ${Colors.white};
    background: none;
    padding: 1em;
    border: solid 1px ${Colors.white};
    border-radius: 1rem;
    font-size: 14px;
  }

  .link--button {
    border-radius: 0.5rem;
    display: inline-block;
    padding: 0.5em;
    margin: 0.5em;
    background: ${Colors.buttonBackground};
  }

  .link--button:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    
  }
`