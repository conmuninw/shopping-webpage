import "./Admindashboard_style.css"

function Admindashboard() {
  return (
    <section className="dashboard-main">
        <div className="sidebar-dashboard">
            <div className="logo-dashboard">
                <h1>Management for admin</h1>
            </div>
            <div className="menu-dashboard">
                <ul>
                    <li>Dashboard</li>
                    <li>Product</li>
                    <li>Order</li>
                    <li>Customer</li>
                    <li>Report</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Admindashboard