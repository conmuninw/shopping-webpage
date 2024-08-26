import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import Payment from './layout/Payment.jsx';
import QR_payment from './layout/QR_payment.jsx';
import Admin_dashboard from './layout/Admindashboard.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}></Route>
                <Route path="/payment/" element={<Payment />}></Route>
                <Route path="/payment/QrPromptpay" element={<QR_payment />}></Route>
                <Route path="/dashboard-for-admin" element={<Admin_dashboard />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;