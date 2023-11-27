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

main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
}

svg {
    position: absolute;
    bottom: 0;
}

a {
    text-decoration: none;
    color: #3F3D56;
    text-align: center;
    font-family: Open Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 147.682%;
}
`