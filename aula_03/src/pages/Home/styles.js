import { createGlobalStyle } from 'styled-components';

export const HomeStyled = createGlobalStyle`
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