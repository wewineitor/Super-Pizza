import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home, Login } from "../views"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='/login'/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter