
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landscapes from './components/projects/Landscapes'; // Import the Landscapes page
import Modal from './components/projects/Modal'; // Import the Modal page
import './App.css'; // Import Tailwind CSS

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landscapes" element={<Landscapes />} />
        
        {/* We changed :id to :slug */}
        <Route path="/landscapes/:slug" element={<Modal />} />

        <Route path="/" element={<Navigate to="/landscapes" replace />} />
      </Routes>
    </BrowserRouter>
  );
}