import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
}

#root {
    display: flex;
    width: 100%;
    padding-top: 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`