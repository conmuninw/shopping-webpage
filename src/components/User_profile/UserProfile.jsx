import "./UserProfileStyle.css"
import { useState, useEffect } from "react"

function UserProfile() {
    const [name, setName] = useState("Firstname Lastname");
    const [email, setEmail] = useState("test_1@gmail.com");
    const [phone, setPhone] = useState("+66987654321");
    const [adress, setAdress] = useState("123/456 หมู่ 7 ต.ทดสอบ อ.ทดอบ จ.ทดสอบ 10540");
    const [checkWidth, setCheckWidth] = useState(window.innerWidth < 768)
    useEffect(() => {
        const handleResize = () => {
            setCheckWidth(window.innerWidth < 992);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNameChange = (e) => {
        setName(e.target.value);
        setEmail(e.target.value);
        setPhone(e.target.value);
        setAdress(e.target.value);
    };
  return (
    <section className="user_Profile row col-lg-8 col-md-12" style={checkWidth ?{maxHeight: "95%", display: "none", overflow: "auto"} :{display: "none", overflow: "auto"}}>
        <div className="user-profile_detail col-lg-6 col-md-6">
            <div className="user-deatil">
                <div className="user-img">
                    <img src="https://i.imgur.com/8Km9tLL.png" alt="avatar" />
                    <span>Firstname Lastname</span>
                    <p>อัพเดทโปรไฟล์ของคุณได้ที่นี่!</p>
                    <div className="btn-update-info">
                        <button className="btn-update-profile">อัพโหลดรูปโปรไฟล์</button>
                        <button className="btn-save-profile">บันทึก</button>
                    </div>
                </div>
            </div>
            <div className="user-detail-end">
                <span className="detail-end-personal">ข้อมูลส่วนตัว</span>
                <div className="mt-1">
                    <span className="detail-end-name">ชื่อ-นามสกุล</span>
                    <div>
                        <i className="detail-end-icon fi fi-sr-user"></i>
                        <input className="detail-end-input" type="text" value={name} onChange={handleNameChange}/>
                    </div>
                </div>
                <div className="mt-1">
                    <span className="detail-end-name">อีเมล์</span>
                    <div>
                        <i className="detail-end-icon fi fi-sr-envelope"></i>
                        <input className="detail-end-input" type="text" value={email} onChange={handleNameChange}/>
                    </div>
                </div>
                <div className="mt-1">
                    <span className="detail-end-name">มือถือ</span>
                    <div>
                        <i className="detail-end-icon fi fi-sr-phone-call"></i>
                        <input className="detail-end-input" type="text" value={phone} onChange={handleNameChange}/>
                    </div>
                </div>
                <div className="mt-1">
                    <span className="detail-end-name">ที่อยู่</span>
                    <div className="detail-end-adress">
                        <i className="detail-end-icon fi fi-sr-map-marker"></i>
                        <textarea className="detail-end-input-adress" type="text" value={adress} onChange={handleNameChange}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="user-profile_info col-lg-6 col-md-6">
            <div className="user-info">
                <div className="user-info-start">
                    <span className="user-info_item">รายการสั่งซื้อ</span>
                    <span className="user-info_status">สถานะ</span>
                </div>
                <div className="user-info-center">
                    <div className="order-id-title">
                        <div className="order-id">
                            <span>รหัสคำสั่งซื้อ: </span>
                            <span>2vh4298s8s77d</span>
                        </div>
                        <span className="status-wait">กำลังจัดเตรียมสินค้า</span>
                    </div>
                    <div className="user-info-detail">
                        <img src="#" alt="img" />
                        <div className="user-info-name">
                            <span className="info-name">เสื้อยืด สำหรับคุณผู้ชาย ใส่สบาย เนื้อผ้านุ่ม</span>
                            <span className="info-date">จันทร์ 10 ต.ค. 67 08:16</span>
                        </div>
                        <span className="user-info-count">x 1</span>
                    </div>
                    <div className="user-info-detail">
                        <img src="#" alt="img" />
                        <div className="user-info-name">
                            <span className="info-name">เสื้อยืด สำหรับคุณผู้ชาย ใส่สบาย เนื้อผ้านุ่ม</span>
                            <span className="info-date">จันทร์ 10 ต.ค. 67 08:16</span>
                        </div>
                        <span className="user-info-count">x 1</span>
                    </div>
                    <div className="user-info-detail">
                        <img src="#" alt="img" />
                        <div className="user-info-name">
                            <span className="info-name">เสื้อยืด สำหรับคุณผู้ชาย ใส่สบาย เนื้อผ้านุ่ม</span>
                            <span className="info-date">จันทร์ 10 ต.ค. 67 08:16</span>
                        </div>
                        <span className="user-info-count">x 1</span>
                    </div>
                    <div className="parcel-number">
                        <span>เลขพัสดุ: </span>
                        <span></span>
                    </div>
                </div>
                <div className="user-info-center">
                    <div className="order-id-title">
                        <div className="order-id">
                            <span>รหัสคำสั่งซื้อ: </span>
                            <span>2vh4298s8s77d</span>
                        </div>
                        <span className="status-complete">จัดส่งเรียบร้อย</span>
                    </div>
                    <div className="user-info-detail">
                        <img src="#" alt="img" />
                        <div className="user-info-name">
                            <span className="info-name">เสื้อยืด สำหรับคุณผู้ชาย ใส่สบาย เนื้อผ้านุ่ม</span>
                            <span className="info-date">จันทร์ 10 ต.ค. 67 08:16</span>
                        </div>
                        <span className="user-info-count">x 1</span>
                    </div>
                    <div className="user-info-detail">
                        <img src="#" alt="img" />
                        <div className="user-info-name">
                            <span className="info-name">เสื้อยืด สำหรับคุณผู้ชาย ใส่สบาย เนื้อผ้านุ่ม</span>
                            <span className="info-date">จันทร์ 10 ต.ค. 67 08:16</span>
                        </div>
                        <span className="user-info-count">x 1</span>
                    </div>
                    <div className="parcel-number">
                        <span>เลขพัสดุ: TH45235F56GSD9</span>
                        <span>จัดส่งโดย: Kerry</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default UserProfile