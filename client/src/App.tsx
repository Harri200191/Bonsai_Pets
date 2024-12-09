import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthForm } from './components/Auth/AuthForm';
import { ProtectedRoute } from './components/Layout/ProtectedRoute';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PetGallery } from './components/PetGallery';
import { Testimonials } from './components/Testimonials';
import { DIYSection } from './components/DIYSection';
import { WorkshopBooking } from './components/WorkshopBooking';
import { useAuthStore } from './store/AuthStore';

function MainContent() {
  return (
    <>
      <Navbar />
      <Hero />
      <PetGallery />
      <Testimonials />
      <DIYSection />
      <WorkshopBooking />
    </>
  );
}

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={isAuthenticated ? <Navigate to="/" replace /> : <AuthForm />}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainContent />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;