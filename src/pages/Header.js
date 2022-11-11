import { Outlet, Link } from 'react-router-dom';

const Header = () => (
  <>
    <h1>MathGician</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
);

export default Header;
