import { Button, ButtonClose, Container, Image, Wrapper } from "./Modal.style"
import iconUser from '../../../../assets/icons/ic_usuario.png'

interface Props {
    imagen: any
    setImagen: any
    open: any
    setOpen: any
}

interface User {
    id: number
    name: string;
    email: string;
    password: string
}
const Modal = ({ imagen, setImagen, open, setOpen }: Props) => {
    const user: User = JSON.parse(localStorage.getItem('user') || '')
    
    const convertBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => resolve(fileReader.result);
            fileReader.onerror = (error) => reject(error);

        });
    };

    const readImage = (e: any) => {
        convertBase64(e.target.files[0]).then((result: any) => {
            localStorage.setItem("image", result)
            setImagen(result)
        })
    }

    return (
        <Wrapper>
            <ButtonClose onClick={() => setOpen(false)}>X</ButtonClose>
            <Container>
                
                <Image
                    src={imagen === null ? iconUser : imagen}
                    alt="iconUser"
                />
                <input type='file' accept="image/*" hidden onChange={(e) => readImage(e)} />
                
            </Container>
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
            <Button>Cerrar sesion</Button>
        </Wrapper>
    )
}

export default Modal