import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Offers from './pages/Offers';
import Trends from './pages/Trends';
import Coupons from './pages/Coupons';
import News from './pages/News';
import Contact from './pages/Contact';
import CameraSearch from './pages/CameraSearch';
import Results from './pages/Results';

// Search Forms
import SearchRam from './pages/search/SearchRam';
import SearchStorage from './pages/search/SearchStorage';
import SearchCpu from './pages/search/SearchCpu';
import SearchPsu from './pages/search/SearchPsu';
import SearchGpu from './pages/search/SearchGpu';
import SearchMotherboard from './pages/search/SearchMotherboard';
import SearchCooling from './pages/search/SearchCooling';
import SearchAccessories from './pages/search/SearchAccessories';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <div className="mx-auto max-w-md bg-background-light dark:bg-background-dark min-h-screen shadow-2xl overflow-hidden">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/camera" element={<CameraSearch />} />
            
            {/* Protected Routes (Only Coupons and Trends) */}
            <Route 
              path="/coupons" 
              element={
                <ProtectedRoute>
                  <Coupons />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/trends" 
              element={
                <ProtectedRoute>
                  <Trends />
                </ProtectedRoute>
              } 
            />
            
            {/* Search Forms (Public) */}
            <Route path="/search/ram" element={<SearchRam />} />
            <Route path="/search/storage" element={<SearchStorage />} />
            <Route path="/search/cpu" element={<SearchCpu />} />
            <Route path="/search/psu" element={<SearchPsu />} />
            <Route path="/search/gpu" element={<SearchGpu />} />
            <Route path="/search/motherboard" element={<SearchMotherboard />} />
            <Route path="/search/cooling" element={<SearchCooling />} />
            <Route path="/search/accessories" element={<SearchAccessories />} />
            
            {/* Results (Public) */}
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;