import "./PaymentStyle.css"
import { t_shirt, icon_thaiqr } from '../assets/img'
import { useState, useEffect } from "react"

function Payment() {
    const [code, setCode] = useState({background: '#a1a1a1', color: '#fff'})

    useEffect(() => {
    }, [])

    const handleCodeChange = (e) => {
        setCode({background: '#ad1a3d', color: '#fff'})
        if (e.target.value === "") {
            setCode({background: '#a1a1a1', color: '#fff'})
        }
    }

  return (
    <section id="payment-layout" className="row">
        <div className="col-7 payment-box">
            <div className="payment-address">
                <h3>ที่อยู่สำหรับจัดส่ง</h3>
                <form>
                    <div className="row justify-content-center">
                        <input type="text" placeholder="ชื่อ-นามสกุล" className="col-5" />
                        <input type="text" placeholder="เบอร์โทรศัพท์" className="col-5" />
                    </div>
                    <div className="row justify-content-center">
                        <textarea placeholder="บ้านเลขที่ ตำบล อำเภอ จังหวัด รหัสไปรษณี" className="col-10" />
                    </div>
                </form>
            </div>
            <div className="payment-pay">
                <img src={icon_thaiqr} alt="img" />
                <h4>QR Promptpay</h4>
                <input className="checkbox" type="checkbox" checked />
            </div>
            <div className="btn-payment">ยืนยันคำสั่งซื้อ</div>
            <h5 className="user-checked"> <h3>การยืนยันคำสั่งซื้อ</h3> กรุณาตรวจสอบความถูกต้องของข้อมูลหลังกรอกข้อมูลเสร็จสิ้น
            โดยผู้ลงทะเบียนสามารถทำการชำระเงินได้ตามข้อมูลรายละเอียดของช่องทางที่ระบุไว้</h5>
        </div>
        <div className="col-5 total-payment">
            <div className="cardBox-payment">
                <div className="row card-payment">
                    <div className="col-2 img-card-payment">
                        <img src={t_shirt} alt="img" />
                    </div>
                    <div className="col-8 deatil-card-payment">
                        <h4>เสื้อยืดสำหรับคุณผู้ชาย รหัส 001</h4>
                        <p>x 1</p>
                    </div>
                    <div className="col-2 price-card-payment">
                        <h4>฿ 300</h4>
                        <p>ลบ</p>
                    </div>
                </div>
                <div className="row card-payment">
                    <div className="col-2 img-card-payment">
                        <img src={t_shirt} alt="img" />
                    </div>
                    <div className="col-8 deatil-card-payment">
                        <h4>เสื้อยืดสำหรับคุณผู้ชาย รหัส 001</h4>
                        <p>x 1</p>
                    </div>
                    <div className="col-2 price-card-payment">
                        <h4>฿ 300</h4>
                        <p>ลบ</p>
                    </div>
                </div>
                <div className="row card-payment">
                    <div className="col-2 img-card-payment">
                        <img src={t_shirt} alt="img" />
                    </div>
                    <div className="col-8 deatil-card-payment">
                        <h4>เสื้อยืดสำหรับคุณผู้ชาย รหัส 001</h4>
                        <p>x 1</p>
                    </div>
                    <div className="col-2 price-card-payment">
                        <h4>฿ 300</h4>
                        <p>ลบ</p>
                    </div>
                </div>
                <div className="row card-payment">
                    <div className="col-2 img-card-payment">
                        <img src={t_shirt} alt="img" />
                    </div>
                    <div className="col-8 deatil-card-payment">
                        <h4>เสื้อยืดสำหรับคุณผู้ชาย รหัส 001</h4>
                        <p>x 1</p>
                    </div>
                    <div className="col-2 price-card-payment">
                        <h4>฿ 300</h4>
                        <p>ลบ</p>
                    </div>
                </div>
            </div>
            <div className="row code-payment justify-content-between">
                <input type="text" placeholder="กรอกรหัสโค้ดที่นี่" className="col-8" onChange={handleCodeChange}></input>
                <div className="col-3" style={code}>ใช้โค้ด</div>
            </div>
            <div className="price-payment">
                <div>
                    <span>ราคาสินค้า</span>
                    <p>฿600</p>
                </div>
                <div>
                    <span>ค่าจัดส่ง</span>
                    <p>฿50</p>
                </div>
                <div>
                    <span>ส่วนลด</span>
                    <p>฿0</p>
                </div>
            </div>
            <div className="total">
                <h2>รวม</h2>
                <h2>฿650</h2>
            </div>
        </div>
    </section>
  )
}

export default Payment