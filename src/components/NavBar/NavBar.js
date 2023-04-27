import CarWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return(
        <nav>
            <h3>Intrepido</h3>
            <div className="botones-nav">
                <button>Principal</button>
                <button>Cascos</button>
                <button>Prendas</button>
            </div>
            <CarWidget />
        </nav>
    )
}

export default NavBar