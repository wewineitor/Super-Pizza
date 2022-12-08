import { useState } from 'react'
import Swal from 'sweetalert2'
import iconUser from '../../../../assets/icons/ic_usuario.png'
import { Modal } from '../Modal'
import { Container, Icon } from './MenuButton.style'

const MenuButton = () => {
    
    const [imagen, setImagen] = useState<any>(localStorage.getItem('image'))
    const [open, setOpen] = useState(false)

    return (
        <>
            <Container>
                <label>
                    <Icon
                        src={imagen === null ? iconUser : imagen}
                        style={{ borderRadius: '50%' }}
                        onClick={() => setOpen(true)}
                    />

                </label>

            </Container>
            {
                open ? <Modal imagen={imagen} setImagen={setImagen} open={open} setOpen={setOpen}/> : null
            }
        </>
    )
}

export default MenuButton