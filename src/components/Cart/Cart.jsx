import "./cartStyle.css"
import Product_incart from "../Product_incart/Product_incart.jsx"
import { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState({display: 'none', height: '94%'})
  const [checkWidth, setCheckWidth] = useState(window.innerWidth < 992)

  useEffect(() => {
    const handleResize = () => {
        setCheckWidth(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);
  return (
    <section className="cart-main col-lg-2 col-md-0" style={checkWidth? cart:{}}>
        <div className="product-incart">
          <Product_incart />
          <Product_incart />
          <Product_incart />
          <Product_incart />
          <Product_incart />
          <Product_incart />
          <Product_incart />
          <Product_incart />
          <Product_incart />
          <Product_incart />
          <Product_incart />
          <Product_incart />
          <Product_incart />
          <Product_incart />
          <Product_incart />
        </div>
        <a href="/payment" className="btn-checkout">ชำระเงิน</a>
    </section>
  )
}

export default Cart;