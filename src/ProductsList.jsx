import Product from './Product'

export default function ProductsList(props){
  return <ul className="store-front">
    {props.product.map(product=><li key={product.id}>

<Product details={product}/>
<button className="btn-outline btn-delete" onClick={()=>props.onDeleteClick(product.id)}>Delete</button>
     </li>)}
    </ul>
    }