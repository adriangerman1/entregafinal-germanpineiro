import { useContext } from "react"
import { Context } from "../../context/CardContext"


const CardItem = ({item}) => {
    const {removeItem} = useContext(Context)

    const borrar = () => {
        removeItem(item.id)
    }

    return (
        <table className="tableCardItem col-md-12 m-3" key={item.id}>
            <tr>
                <td><img className="boximagenCardItem" src={item.image} alt={item.title}/></td>
                <td><h5 className="text-center">Producto: {item.title}</h5></td>
                <td><h5 className="text-center">Cantidad: {item.quantity}</h5></td>
                <td><h5 className="text-center">Precio: ${item.price}</h5></td>
                <button className="btn btn-danger m-3" onClick={borrar}>Eliminar</button>
            </tr>
        </table>
        
    )
}

export default CardItem