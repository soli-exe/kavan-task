import { Routes, Route } from "react-router-dom"

// Components
import Home from "./components/Home/Home";
import Login from "./components/auth/Login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Login />} />
            <Route path='/index' element={<Home />} />
            <Route path='/auth/login' element={<Login />} />
        </Routes>
    )
}

export default AppRoutes;