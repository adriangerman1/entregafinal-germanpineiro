import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../../context/CardContext'

const NavBar = () => {
    
    const {card} = useContext(Context)

    return ( 
        <>
            <nav className="boxNavbar navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to={"/"}>
                        <a className="navbar-brand">Tienda de celulares</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </Link>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"}>
                                <a className="nav-link " aria-current="page" >Inicio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/galeria"}>
                                <a className="nav-link" >Galeria</a>
                            </Link>     
                        </li>
                        <li className="nav-item">
                            <Link to={"/ConsultaCompra"}>
                                <a className="nav-link" >Compras</a>
                            </Link>     
                        </li>
                    </ul>
                    </div>
                    <div>
                        <Link to={"/CardWidget"}>
                            <button type="button" className="btn btn-success position-relative m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                    {card.length}
                                    <span className="visually-hidden">sadunread messages</span>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
            

            <div className="boxMarcas text-center">
                <Link to={"/Category/Samsung"}>
                    <a className=" link-dark m-2">Samsung</a>
                </Link>

                <Link to={"/Category/Motorola"}>
                    <a className=" link-dark m-2">Motorola</a>
                </Link>

                <Link to={"/Category/Xiaomi"}>
                    <a className=" link-dark m-2">Xiaomi</a>
                </Link>

                <Link to={"/Category/Iphone"}>
                    <a className=" link-dark m-2">Iphone</a>
                </Link>
                

            </div>
        </>   
    )
}

export default NavBar