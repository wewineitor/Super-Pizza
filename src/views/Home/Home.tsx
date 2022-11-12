import { Card } from "../../components"
import { API } from "../../data"
import { Input } from "./components/Input"
import { CardsWrapper, Wrapper } from "./Home.style"

const Home = () => {
    const stores = API.response.stores

    return (
        <Wrapper>
            <Input placeholder="Busca una pizzeria" />
            <CardsWrapper>
                {
                    stores.map(store => (
                        <Card
                            key={store.name}
                            title={store.name}
                            image={store.logo}
                            address={store.address}
                        />
                    ))
                }
            </CardsWrapper>
        </Wrapper>
    )
}

export default Home