import { CardProps } from "../../utils/types";
import { CardContainer, Wrapper } from "./Card.style"

const Card = ({title, image, address}: CardProps) => {
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