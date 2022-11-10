import Swal from "sweetalert2"

const Alert = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
})

export default Alert