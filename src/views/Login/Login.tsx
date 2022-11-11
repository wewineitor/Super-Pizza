import { Button, Form, Input, Wrapper } from "./Login.style"

const Login = () => {
    return (
        <Wrapper>
            <Form>
                <Input placeholder="Usuario" />
                <Input placeholder="Contraseña" type='password'/>
                <Button>INGRESAR</Button>
            </Form>
        </Wrapper>
    )
}

export default Login