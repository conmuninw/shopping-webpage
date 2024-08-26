import Navbar from "../components/Navbar/Navbar.jsx"
import Sidebar from "../components/Sidebar/Sidebar.jsx"
import Content from "../components/Content/Content.jsx"
import Cart from "../components/Cart/Cart.jsx"
import MobileFooter from "../components/Footer/MobileFooter.jsx"
import UserProfile from "../components/User_profile/UserProfile.jsx"
import UserLike from "../components/UserLike/UserLike.jsx"

const MainLayout = () => {
  return (
    <section id="main-layout">
        <Navbar></Navbar>
        <div className="content row">
          <Sidebar></Sidebar>
          <UserLike></UserLike>
          <Content></Content>
          <UserProfile></UserProfile>
          <Cart></Cart>
        </div>
        <MobileFooter></MobileFooter>
    </section>
  )
}

export default MainLayout