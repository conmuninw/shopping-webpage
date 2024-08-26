import './Product_incartStyle.css'
import { t_shirt } from '../../assets/img'

function Product_incart() {
  return (
    <div>
    <section className='card-cart'>
        <div className='imgAndName'>
            <div className='img-box'>
                <img className='img-cart' src={t_shirt} alt="Product_img" />
            </div>
            <span className='name'>เสื้อยืด สำหรับคุณผู้ชาย รหัส 01</span>
        </div>
        <div className='priceAndCount'>
            <span className='price'>฿250</span>
            <div className='count-product'>
                <div className="pull-cart">-</div>
                <span className='count-cart'>1</span>
                <div className="push-cart">+</div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Product_incart