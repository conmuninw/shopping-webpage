import "./Product_inContentStyle.css"
import { t_shirt } from "../../assets/img.jsx"
import { useState, useEffect } from 'react';

function Product_inContent() {
  const [checkWidth, setCheckWidth] = useState(window.innerWidth < 360)
  const [cardWidth, setCardWidth] = useState("card-content col-lg-3 col-md-3 col-sm-4 col-6")
  useEffect(() => {
      const handleResize = () => {
        const isSmallScreen = window.innerWidth < 360;
        setCheckWidth(isSmallScreen);
        setCardWidth(isSmallScreen 
          ? "card-content col-lg-3 col-md-3 col-sm-4 col-12" 
          : "card-content col-lg-3 col-md-3 col-sm-4 col-6"
        );
      };
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);
  return (
    <section className={cardWidth}>
        <div className="product-content">
            <div className="img-card-content">
                <img src={t_shirt} alt="img-conten" className="img-content" />
            </div>
            <span className="name-content">เสื้อยืด สำหรับคุณผู้ชาย รหัส 01</span>
            <span className="price-content">฿250</span>
            <div className="btn-addCart">
                <i className="fi-content fi fi-sr-shopping-cart-add"></i>
                <span>เพิ่ม</span>
            </div>
        </div>
    </section>
  )
}

export default Product_inContent