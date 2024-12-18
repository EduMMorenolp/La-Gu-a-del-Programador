// Configuración de rutas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';
import ResourceDetail from '../pages/ResourceDetail';
import Favorites from '../pages/Favorites';
import Contact from '../pages/Contact';
import Login from '../pages/Login';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/resource/:id" element={<ResourceDetail />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default AppRouter;
