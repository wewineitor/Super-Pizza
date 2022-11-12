import { CardContainer, Wrapper } from "./Card.style"

type Props = {
    title: string,
    image: string,
    address: string
}
const Card = ({title, image, address}: Props) => {
    console.log(image);
    return (
        <Wrapper>
            <CardContainer>
                
                <img src={image} alt={title} loading = 'lazy' referrerPolicy="no-referrer"/>
                <p>{title}</p>
                <p>{address}</p>
            </CardContainer>
        </Wrapper>
    )
}

export default Card