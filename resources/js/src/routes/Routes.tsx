import { Route, Routes as Router } from "react-router-dom";
import Login from "../views/pages/auth/Login";
import Register from "../views/pages/auth/Register";
import Home from "../views/pages/home/Home";

const Routes = () => {
    return (
        <Router>
            <Route path="/test" element={<>HI TEST</>} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
        </Router>
    );
};

export default Routes;
