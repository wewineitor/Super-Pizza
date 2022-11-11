
import { API } from "../../data"
import { Button, Form, Input, Wrapper } from "./Login.style"
import { useForm } from "react-hook-form";
import { Alert } from "../../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit } = useForm<DataForm>();
    const navigate = useNavigate()
    
    type DataForm = {
        email: string,
        password: string
    }
    const onSubmit = (data:DataForm)  => {
        const users = API.response.users.find(user => user.email === data.email && user.password === data.password)
        console.log(data);
        if(users === undefined) {
            return Alert.fire({
                title: 'Email o contraseña incorrectos',
                icon: 'error'
            })
        }
        navigate('/Home')

    }
    
    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Email" type='email' {...register("email")}/>
                <Input placeholder="Contraseña" type='password' {...register("password")}/>
                <Button type="submit">INGRESAR</Button>
            </Form>
        </Wrapper>
    )
}

export default Login