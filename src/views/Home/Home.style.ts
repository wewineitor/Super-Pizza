import styled from "styled-components";

export const Wrapper = styled.div `
margin: auto;
width: 95vw;
display: flex;
flex-direction: column;
align-items: center;
`

export const CardsWrapper = styled.div `
@media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
};
`