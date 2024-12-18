import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page!</h1>
      <p>List:</p>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/category/1">Category Page</Link>
        </li>
        <li>
          <Link to="/resource/1">Resource Detail Page</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites Page</Link>
        </li>
        <li>
          <Link to="/contact">Contact Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
