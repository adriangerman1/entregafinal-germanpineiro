import { useContext } from "react"
import { Context } from "../context/CardContext"
import ItemList from "./ItemList"


const ItemListContainer = () =>{

    const {products} = useContext(Context)

    return(

        <div className="container-fluid">
            
            <ItemList products={products}/>

        </div>
    )
}

export default ItemListContainer