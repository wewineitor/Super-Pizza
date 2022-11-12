import styled from "styled-components";


/*
#C92C2C
#CF6123
#F3C363
#F1E9BB
#5C483A
*/

export const Wrapper = styled.div `
margin: auto;
border: solid 1px;
margin-top: 10rem;
@media (min-width: 320px) {
    width: 90vw;
    height: 50vh;
};

@media (min-width: 768px) {
    width: 60vw;
};

@media (min-width: 1200px) {
    width: 30vw;
};
`

export const Form = styled.form `
display: flex;
flex-direction: column;
align-content: center;
`

export const Input = styled.input `
margin: auto;
margin-top: 2em;
font-size: 1rem;
padding: 1rem;
outline: none;
border-radius: 5px;
width: 80%;
`

export const Button = styled.button`
margin: auto;
font-weight: 800;
margin-top: 2em;
font-size: 1rem;
padding: 1rem;
outline: none;
border-radius: 5px;
width: 90%;
border: none;
`