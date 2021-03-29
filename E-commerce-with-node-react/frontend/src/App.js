import {data} from './data.js'

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <a href="/">Ecommerce</a>
        </div>
        <div className="right">
          <ul>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/signin">Sign In</a></li>
          </ul>
        </div>
      </div>

      <div className="main">
        {
          data.products.map(product=>(
            <div key={product._id} className="card-wrapper">
              <div key={product._id} className="card-header">
                  <a href={`/product/${product._id}`}>
                      <img src={product.image} alt={product.name}/>
                  </a>
                  <div className="card-body">
                      <div className="card-body-wrapper"> 
                          <a href="/product-details">
                              <h3>{product.name}</h3>
                          </a>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <p>${product.price}</p>
                      </div>
                  </div>
              </div>
        </div>
            
          ))
        }
        
      </div>

      <div className="footer">
        <h2>All right reserved</h2>
      </div> 

    </div>
  );
}

export default App;
