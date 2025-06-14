import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Dashboard from './Pages/Dashboard';
import Gift from './Pages/Gift';
import Profile from './Pages/Profile';
import HelpCenter from './Pages/HelpCenter';
import Registration from './Pages/Registration';
import Order from './Pages/Order';
import ScrollToTop from './Components/Scroller/ScrollToTop';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';

function AppRoutes() {
  const location = useLocation();

  
  if (location.pathname === '/') {
    return <Navigate to="/dashboard" replace />;
  }

  const showFooterPaths = ['/dashboard', '/giftcards', '/profile','/profile/help-center'];
  const shouldShowFooter = showFooterPaths.includes(location.pathname);

  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/giftcards" element={<Gift />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/help-center" element={<HelpCenter />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/ordering" element={<Order />} />
        <Route path="/ordering/:productName" element={<ProductPage/>} />
        <Route path="/ordering/cart" element={<Cart/>} />
        <Route path="*" element={<div><h1>404 NOT FOUND</h1></div>} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
}

export default AppRoutes;
