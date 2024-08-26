import "./UserLikeStyle.css"
import Product_inContent from '../Product_incontent/Product_inContent.jsx'

function UserLike() {
  return (
    <section className='userLike-main row col-lg-8 col-md-12'>
    <Product_inContent></Product_inContent>
    <Product_inContent></Product_inContent>
  </section>
  )
}

export default UserLike