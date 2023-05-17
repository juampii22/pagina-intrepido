import CarWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <nav className="NavBar">
            <Link to="/" className="intrepido">
                <h3 >Intrepido</h3>
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