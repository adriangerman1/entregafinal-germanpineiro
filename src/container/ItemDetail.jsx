import { useContext, useState } from "react"
import { Context } from "../context/CardContext"
import ItemCount from "./ItemCount"

const ItemDetail = ({product}) => {

    const [suma, setSuma] = useState([0])
    const {addItem} = useContext(Context)

    const onAdd = (quantityToAdd) => {
        addItem(product,quantityToAdd)
        setSuma(quantityToAdd) 
    }
    
    return (
        <div className="row">
                <div className="boxImagenDetail col-md-4">
                    <img key={product.id} src={product.image} className="border m-2" alt={product.title} />
                </div>      
                <div className="boxInfoDetail card-body col-md-8 p-4">
                    <h3 className="card-title p-2">{product.title}</h3>
                    <h5 className="p-2 ">Precio:<span></span> ${product.price}.</h5>
                    <h5 className="p-2">Pantalla: {product.screen}.</h5>
                    <h5 className="p-2">Camaras: {product.camera}</h5>
                    <h5 className="p-2">Procesador: {product.processor}.</h5>
                    <h5 className="p-2">Memoria: {product.memory_limit}GB.</h5> 
                    <h5 className="p-2">Memoria ram: {product.ram}GB.</h5> 
                    <h5><ItemCount stock={product.stock} initial={0} onAdd={onAdd}/></h5>  
                </div>
        </div> 
    )
}

export default ItemDetail