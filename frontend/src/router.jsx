import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoriaPage from './pages/CategoriaPage';
import RecursoPage from './pages/RecursoPage';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/categorias" element={<CategoriaPage />} />
      <Route path="/recursos" element={<RecursoPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
