import { useState } from "react"


const ItemCount = ({ stock, initial, onAdd }) => {
    
    const [count, setCount] = useState(initial)

    const addNumber = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restNumber = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }

    return (
        <div >
            <div className="btn-group p-2 " role="group" aria-label="Basic outlined example">
                <button type="button" className="botonSumar btn btn-secondary" onClick={ addNumber}>+</button>
                <h5 >{count}</h5>
                <button type="button" className="btn btn-secondary" onClick={ restNumber}>-</button>
                
            </div>

            <div className="m-2">
                <button className="btn btn-success " onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
            
        </div>
    )
}

export default ItemCount