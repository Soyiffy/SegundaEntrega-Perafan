import './App.css';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import CartList from './Components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'Replica BG5 Blancas',
      category: 'Zapatillas',
      seller: 'DopeStyle',
      price: 31000
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'Reloj LOREM Negro',
      category: 'Relojes',
      seller: 'DopeStyle',
      price: 50500
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Notebook 8GB RAM',
      category: 'Notebook',
      seller: 'DopeStyle',
      price: 150000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
      name: 'Camara de Seguridad',
      category: 'Tecnologia',
      seller: 'DopeStyle',
      price: 18000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'AppleWatch Rosa',
      category: 'Apple',
      seller: 'DopeStyle',
      price: 80000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Tasa Roja',
      category: 'Hogar',
      seller: 'DopeStyle',
      price: 1500
    },
    
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div className="container">
      <Header count={cart.length} handleShow={handleShow}></Header>
  
      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={product} addToCart={addToCart}></ProductList>
      )}
    </div>
  );
}

export default App;