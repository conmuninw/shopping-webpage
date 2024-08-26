import Dropdow_support from '../Dropdown_support/Dropdow_support';
import './NavbarStyle.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [cart, setCart] = useState({display: 'none'})
    const [profile, setProfile] = useState({display: 'flex', background: "#d1d1d1", width: "35px", height: "35px", borderRadius: "100px", marginRight: "10px"})
    const [checkWidth, setCheckWidth] = useState(window.innerWidth >= 768&&window.innerWidth < 992)
    const [checkWidthCart, setCheckWidthCart] = useState(window.innerWidth < 992)
    const [checkWidthMobile, setCheckWidthMobile] = useState(window.innerWidth < 768)
    useEffect(() => {
        let like_hover = document.querySelector('#like-hover');
        let text_Like = document.querySelector('#text-like');
        let home_hover = document.querySelector('#home-hover');
        let text_Home = document.querySelector('#text-home');
        let me_hover = document.querySelector('#me-hover');
        let text_Me = document.querySelector('#text-me');
        let home = document.querySelector('.home');
        let like = document.querySelector('.like');
        let me = document.querySelector('.me');
        let content_main = document.querySelector('.content-main');
        let User_profile = document.querySelector('.user_Profile');
        let user_like = document.querySelector('.userLike-main');
        user_like.style.display = 'none';

        let clickLike = () => {
            like_hover.className = 'click-center';
            text_Like.className = 'click-text';
            home_hover.className = 'home-hover';
            text_Home.className = 'text';
            me_hover.className = 'me-hover';
            text_Me.className = 'text';
            content_main.style.display = 'none';
            User_profile.style.display = 'none';
            user_like.style.display = 'flex';
        }

        let clickHome = () => {
            home_hover.className = 'click-center';
            text_Home.className = 'click-text';
            like_hover.className = 'like-hover';
            text_Like.className = 'text';
            me_hover.className = 'me-hover';
            text_Me.className = 'text';
            content_main.style.display = 'flex';
            User_profile.style.display = 'none';
            user_like.style.display = 'none';
        }

        let clickMe = () => {
            me_hover.className = 'click-center';
            text_Me.className = 'click-text';
            like_hover.className = 'like-hover';
            text_Like.className = 'text';
            home_hover.className = 'home-hover';
            text_Home.className = 'text';
            content_main.style.display = 'none';
            User_profile.style.display = 'flex';
            User_profile.style.maxHeight = '95%';
            User_profile.style.overflow = 'auto';
            User_profile.className = 'user-profile row col-lg-8 col-md-12';
            document.querySelector('.user-profile_detail').className = 'user-profile_detail col-lg-6 col-md-12';
            document.querySelector('.user-profile_info').className = 'user-profile_info col-lg-6 col-md-12';
            user_like.style.display = 'none';
        }

        like.addEventListener('click', clickLike);
        home.addEventListener('click', clickHome);
        me.addEventListener('click', clickMe);

        const handleResize = () => {
            setCheckWidth(window.innerWidth >= 768 && window.innerWidth < 992);
            setCheckWidthCart(window.innerWidth < 992);
            setCheckWidthMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id='navbar' className="text-center row align-items-center" style={checkWidthMobile ?{height: "10%", justifyContent: "space-between"} :{}}>
            <div className="nav-start col-lg-2 col-md-2 col-6" style={checkWidthMobile ?{justifyContent: "start", width: "auto", marginLeft: "10px"} :{}}>
                <h1 className='logo'>Logo</h1>
            </div>
            <div className="nav-center col-lg-8 col-md-7" style={checkWidthMobile ?{display: "none"} :{}}>
                <a href="#" className='like' >
                    <div id='like-hover' className='like-hover'>
                        <i className="fi-nav fi fi-sr-heart"></i>
                    </div>
                    <span id='text-like' className='text'>LIKE</span>
                </a>
                <a href="#" className='home'>
                    <div id='home-hover' className='click-center'>
                        <i className="fi-nav fi fi-sr-home"></i>
                    </div>
                    <span id='text-home' className='click-text'>HOME</span>
                </a>
                <a href="#" className='me'>
                    <div id='me-hover' className='me-hover'>
                        <i className="fi-nav fi fi-sr-user"></i>
                    </div>
                    <span id='text-me' className='text'>ME</span>
                </a>
            </div>
            <div className="nav-end col-lg-2 col-md-3 col-6" style={checkWidthMobile?{justifyContent: 'end'} :{}}>
                <div className='cart' style={checkWidthCart? cart:{}}>
                    <div>
                        <i className="fi-nav fi fi-sr-shopping-cart"></i>
                    </div>
                    <span className='click-text'>CART</span>
                </div>
                <Dropdow_support></Dropdow_support>
                <div className='text-center profile' style={checkWidthCart? profile:{}}>35*35</div>
            </div>
        </section>
    );
};

export default Navbar;