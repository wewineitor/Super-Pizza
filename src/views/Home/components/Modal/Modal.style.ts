import styled from "styled-components";

export const Wrapper = styled.div `
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
margin-top: 15%;
height: 50%;
border: 1px solid;
background-color: #fff;
`

export const Container = styled.label `
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
`

export const Image = styled.img `
border-radius: 50%; 
width: 100px;
height: 100px; 
`

export const Button = styled.button `
padding: 1rem;
border: none;
outline: none;
font-size: 2rem;
margin-bottom: 1rem;
border-radius: 1rem;
`

export const ButtonClose = styled.button `
padding: 1rem;
border: none;
outline: none;
margin-left: 90%;
`