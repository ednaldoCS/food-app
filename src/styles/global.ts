import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
    overflow-y:hidden;
  }
  body {
    background: ${(props) => props.theme.colors.gray900};
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fontFamily.sans};
    // padding: 1rem;

  }

  button,textarea,input,select,body{
    font:400 1rem 'Roboto', Helvetiva,Arial, sans-serif;
  }

  a{
    color:inherit;
    text-decoration:none;
  }


  button{
    cursor:pointer;
  }

  ul,li{
    list-style:none;
    padding:0px;
  }
`
