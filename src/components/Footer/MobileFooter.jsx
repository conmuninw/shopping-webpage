import "./MobileFooter_style.css"
import { useEffect, useState } from "react"

function MobileFooter() {
    const [checkWidthMobile, setCheckWidthMobile] = useState(window.innerWidth < 768)
    useEffect(() => {
        const footerHome = document.querySelector('.mb-footer-home')
        const footerLike = document.querySelector('.mb-footer-like')
        const footerMe = document.querySelector('.mb-footer-me')
        const cart_main = document.querySelector('.cart-main')
        const content_main = document.querySelector('.content-main')

        footerHome.addEventListener('click', () => {
            footerHome.classList.add('mb-footer-click')
            footerLike.classList.remove('mb-footer-click')
            footerMe.classList.remove('mb-footer-click')
            cart_main.style.display = "none"
            content_main.style.display = "flex"
        })
        footerLike.addEventListener('click', () => {
            footerHome.classList.remove('mb-footer-click')
            footerLike.classList.add('mb-footer-click')
            footerMe.classList.remove('mb-footer-click')
            cart_main.style.display = "flex"
            content_main.style.display = "none"
        })
        footerMe.addEventListener('click', () => {
            footerHome.classList.remove('mb-footer-click')
            footerLike.classList.remove('mb-footer-click')
            footerMe.classList.add('mb-footer-click')
            cart_main.style.display = "none"
            content_main.style.display = "none"
        })
        const handleResize = () => {
            setCheckWidthMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
  return (
    <footer id="mb-footer" className="row" style={checkWidthMobile ?{display: "flex"}:{display: "none"}}>
        <div className="mb-footer-home mb-footer-click col-4">
            <div>
                <i className="fi fi-sr-home"></i>
            </div>
            <span>HOME</span>
        </div>
        <div className="mb-footer-like col-4">
            <div>
                <i className="fi fi-sr-heart"></i>
            </div>
            <span>LIKE</span>
        </div>
        <div className="mb-footer-me col-4">
            <div>
                <i className="fi fi-sr-user"></i>
            </div>
            <span>ME</span>
        </div>
    </footer>
  )
}

export default MobileFooter