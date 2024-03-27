import Home from "./Home";
import Perfil from "./Perfil";
import Descricao from "./Descricao";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element ={<Home/>}></Route>
                <Route path="/Perfil" element ={<Perfil/>}></Route>
                <Route path="/Descricao" element ={<Descricao/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;