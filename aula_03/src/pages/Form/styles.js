import { createGlobalStyle } from 'styled-components';

export const FormStyled = createGlobalStyle`
form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    font-size: 20px;
    color: #3F3D56;
    font-family: Open Sans;
}

form label {
    font-weight: 700;
}

form input[type=text], form input[type=password] {
    border: 2px solid #3F3D56;
    border-radius: 5px;
    padding: .4em .6em;
    font-size: 18px;
    color: #3F3D56;
    font-family: Open Sans;
}

form input[type=submit] {
    border: 0;
    padding: .4em .6em;
    font-size: 22px;
    color: #3F3D56;
    font-family: Open Sans;
    font-weight: 700;
    cursor: pointer;
}

form input:focus {
    outline: none;
}
`