import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Login } from "../views"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='/login'/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter