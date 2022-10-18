import { useContext, useEffect, useState } from "react"
import { Context } from "../../context/CardContext"
import { Link } from "react-router-dom";
import CardItem from "./CardItem";

const CardWidget = () => {

    const {card, clear, Total,precioTotal,setPrecioTotal} = useContext(Context)

    useEffect(() => {
        setPrecioTotal(Total())
    },[card])


    return (
        <div className="container"> 
            <div className="row"> 
                <h2>{card.length == 0 ? (
                    <div className="col-md-12">
                        <h2 className="text-center m-2">EL carrito no contiene Productos</h2>
                        <Link to={'/galeria'}>
                            <button className="btn btn-success m-2">Continuar comprando</button>
                        </Link> 
                    </div>
                    ) : (
                    <>
                        {card.map(element =><CardItem item={element}/>)}
                        <div className="container">

                            <div className="row">

                                <table className="boxCompra col-md-12 m-2">

                                    <tr> 

                                        <td>
                                            <h5>Total de la compra: ${precioTotal}</h5> 
                                        </td>

                                        <td>
                                            <Link to={'/Form'}>
                                                <button className="btn btn-success m-2">finalizar Compra</button>
                                            </Link>
                                        </td>

                                        <td>
                                            <button className="btn btn-danger m-4 " onClick={clear}>Vaciar Carrito</button>
                                        </td>

                                    </tr>

                                </table>
                                
                            </div>
                        </div>

                    </>) }
                </h2>
            </div>    
        </div>
        
    )
}

export default CardWidget