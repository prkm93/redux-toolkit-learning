import { useDispatch } from "react-redux"
import productList from '../data/productList.json'
import cartSlice from '../data/cartSlice'
import '../styles/home.scss'

const Home = () => {
  const dispatch = useDispatch();
  const { addToCart, removeFromCart } = cartSlice.actions;

  return (
    <div className="container product-catalogue">
      <div className="row">
        {productList.products.map((product) => {
          return (
            <div className="wrapper col-md-4" key={product.id}>
              <div className="card">
                <img className="card-img-top center-block" src={product.imageUrl} alt="Card cap" />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>

                  <button className="btn btn-primary" onClick={() => dispatch(addToCart(product.id))}>Add to cart</button>
                  <button className="ml-2 btn btn-primary" onClick={() => dispatch(removeFromCart(product.id))}>Remove from cart</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
