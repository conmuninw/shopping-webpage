import './ContentStyle.css'
import Product_inContent from '../Product_incontent/Product_inContent.jsx'
import { useState, useEffect } from 'react';
import Vive_product from '../Vive_product/Vive_product.jsx';

function Content() {
  const [checkWidth, setCheckWidth] = useState(window.innerWidth < 768)
  useEffect(() => {
    const handleResize = () => {
      setCheckWidth(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className='content-main row col-lg-8 col-md-12' style={checkWidth ?{height: "94%"} :{}}>
      <Vive_product></Vive_product>
      <Product_inContent></Product_inContent>
      <Product_inContent></Product_inContent>
      <Product_inContent></Product_inContent>
      <Product_inContent></Product_inContent>
      <Product_inContent></Product_inContent>
      <Product_inContent></Product_inContent>
      <Product_inContent></Product_inContent>
      <Product_inContent></Product_inContent>
      <Product_inContent></Product_inContent>
      <Product_inContent></Product_inContent>
      <Product_inContent></Product_inContent>
      <Product_inContent></Product_inContent>
    </section>
  )
}

export default Content