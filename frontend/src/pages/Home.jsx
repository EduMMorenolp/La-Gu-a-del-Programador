/*
Encabezado con el título y una breve descripción.
Menú de navegación principal.
Sección destacada con recursos más populares.
Carrusel de categorías: Libros, Recursos en Línea, Canales de YouTube.
Barra de búsqueda y filtros para facilitar el acceso.
*/
import { Link } from 'react-router-dom';
import MainLayout from '../components/Layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <h1>Home Page!</h1>
      <p>Description</p>
    </MainLayout>
  );
};

export default Home;
