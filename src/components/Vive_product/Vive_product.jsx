import "./Vive_product_style.css"
import { t_shirt } from "../../assets/img.jsx"

function Vive_product() {
  return (
    <section className="vive-product col-12">
        <div className="vive-product-start text-center">รายละเอียดสินค้า</div>
        <div className="vive-product-center row p-5">
            <div className="vive-product-img col-sm-6 ">
                <img src={t_shirt} alt="img" />
            </div>
            <div className="vive-product-detail col-sm-6 ">
                <span className="vive-product-name">เสื้อยืด สำหรับคุณผู้ชาย รหัส 01</span>
                <span className="vive-product-price">฿250</span>
                <div className="vive-product-btn">
                    <i className="fi fi-sr-shopping-cart-add"></i>
                    <span>เพิ่ม</span>
                </div>
                <span className="product-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolores porro ipsum amet quae repellendus iusto, delectus nisi, quisquam voluptates eligendi deleniti neque. Voluptatum quis ex iusto nisi sint dolorem perferendis ipsam! At amet officiis nobis ex vitae totam minus, eum fugit dolor, quos fuga, corrupti illo nemo error accusantium.</span>
            </div>
        </div>
        <div className="vive-product-end text-center">รายการสินค้าทั้งหมด</div>
    </section>
  )
}

export default Vive_product