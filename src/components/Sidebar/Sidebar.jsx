import "./SidebarStyle.css";
import { fb, ig, tk } from "../../assets/img.jsx"
import { useState, useEffect } from 'react';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState({display: 'none'})
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
        <section id='sidebar-main' className="col-lg-2 col-md-0" style={checkWidth? sidebar:{}}>
            <div className="sidebar">
                <div className="sidebar-user-profile">
                    <img className="sidebar-img" src="https://i.imgur.com/8Km9tLL.png" alt="img" />
                    <div className="sidebar-profile-box">
                        <span className="sidebar-name">Firstname</span>
                        <span className="sidebar-phone">+66987654321</span>
                    </div>
                </div>
                <span className="sidebar-title">ติดต่อเรา</span>
                <div className='facebook'>
                    <img className="icon-sidebar" src={fb}/>
                    <span id='text-fb' className='text-fb'>Facebook</span>
                </div>
                <div className='instragram'>
                    <img className="icon-sidebar" src={ig}/>
                    <span id='text-ig' className='text-ig'>Instragram</span>
                </div>
                <div className='tiktok'>
                    <img className="icon-sidebar" src={tk}/>
                    <span id='text-tk' className='text-tk'>Tiktok</span>
                </div>
            </div>
            <div className="footer">
                <span>____________________________________________</span>
                <span>© Copyright 2024; Desgned by
                    <span className="credit-name"> Sittinon</span>
                </span>
            </div>
        </section>
    );
};

export default Sidebar;