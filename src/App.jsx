import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BuyerLandingPage from './pages/BuyerLandingPage.jsx';
import VendorLandingPage from './pages/VendorLandingPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/buyer" replace />} />
        <Route path="/buyer" element={<BuyerLandingPage />} />
        <Route path="/vendor" element={<VendorLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
