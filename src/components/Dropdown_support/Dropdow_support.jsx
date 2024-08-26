import "./Dropdown_support.css"
import { useState, useEffect } from 'react';

function Dropdow_support() {
    const [dw, setDw] = useState({display: 'flex'})
    const [checkWidth, setCheckWidth] = useState(window.innerWidth < 992)
    const [checkWidthDestop, setCheckWidthDestop] = useState(window.innerWidth >= 992)
    const btn_dw = () => {
        let dropdown = document.querySelector('.dropdown-content');
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }
    useEffect(() => {
        let btn_cart = document.querySelector('.cart-dw');
        let dropdown = document.querySelector('.dropdown-content');
        let content_main = document.querySelector('.content-main');
        let cart_main = document.querySelector('.cart-main');
        let card_cart = document.querySelectorAll('.card-cart');
        let product_incart = document.querySelector('.product-incart');
        btn_cart.addEventListener('click', () => {
            dropdown.style.display = 'none';
            content_main.style.display = 'none';
            cart_main.style.display = 'flex';
            cart_main.style.height = '90%';
            card_cart.forEach((card_cart) => {
                card_cart.style.flexDirection = 'row';
                card_cart.style.width = '100%';
                card_cart.style.margin = '0 0 10px 0';
            });    
            product_incart.style.display = 'block';
        });
        const handleResize = () => {
            setCheckWidth(window.innerWidth < 992);
            setCheckWidthDestop(window.innerWidth >= 992);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <div className="dropdown position-relative" style={checkWidth? dw:{}}>
        <div className="icon-ham" onClick={btn_dw}>
            <i className="fi fi-ham fi-sr-menu-burger position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">99+</span>
            </i>
        </div>
        <ul className="dropdown-content position-absolute top-100 end-0">
            <p>
                <span>ติดต่อเรา</span>
                <span>___________________</span>
            </p>
            <li>Instragram</li>
            <li>Tiktok</li>
            <li>Facebook</li>
            <li className="cart-dw">
                <i className="fi fi-sr-shopping-cart"></i>
                <span>ตระกล้า</span>
            </li>
        </ul>
    </div>
  )
}

export default Dropdow_support