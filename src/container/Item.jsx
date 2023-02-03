import { Link } from "react-router-dom"

const Item = ({product}) => {

    

    return( 
        <div key={product.id} className="boxListCard col-sm-6 col-md-3 p-5">
            <div className="boxCard card">
                <img src={product.image} className="card-img-top" alt={product.title}/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Precio: ${product.price}</p>
                    <Link to={`/Item/${product.id}`}>
                        <button className="btn btn-light m-2">Ver producto</button>
                    </Link> 
                </div>
            </div>
        </div>
        )    
}

export default Item;