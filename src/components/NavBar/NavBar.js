import CarWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import titulo from "./imagentitulo/titulo.png"

const NavBar = () =>{
    return(
        <nav className="NavBar">
            <Link to="/" className="Intrepido">
                <img src={titulo} alt="Intrepido" className="imgTitulo"/>
            </Link>
            <div className="nav">
                <NavLink to="/category/guantes" className="botones-nav">Guantes</NavLink>
                <NavLink to="/category/cascos" className="botones-nav">Cascos</NavLink>
                <NavLink to="/category/camperas" className="botones-nav">Camperas</NavLink>
            </div>
            <CarWidget />
        </nav>
    )
}

export default NavBar