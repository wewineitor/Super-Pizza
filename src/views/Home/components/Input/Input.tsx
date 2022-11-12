import styled from "styled-components"

const InputStyle = styled.input`
margin-top: 10px;
width: 80vw;
font-size: 2rem;
padding: 1rem;
border-radius: 1rem;
outline: none;
`

interface Props {
    placeholder: string,
}

const Input = ({placeholder}: Props) => {
    return <InputStyle 
    placeholder={placeholder}
    />
}

export default Input