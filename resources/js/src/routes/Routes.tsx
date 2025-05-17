import { Route, Routes as Router } from "react-router-dom";
import Login from "../views/pages/auth/Login";
import Register from "../views/pages/auth/Register";

const Routes = () => {
    return (
        <Router>
            <Route path="/test" element={<>HI TEST</>} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Router>
    );
};

export default Routes;
