import { Route, Routes as Router } from "react-router-dom";
import Login from "../views/pages/auth/Login";
const Routes = () => {
    return (
        <Router>
            <Route path="/test" element={<>HI TEST</>} />
            <Route path="/" element={<Login />} />
        </Router>
    );
};

export default Routes;
