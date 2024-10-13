import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#060047',
    height: ' 70px',
  };
  return (
    <nav style={navbarStyle}>
      <Link to="/" className="single-link">
        <h2>Home</h2>
      </Link>
      <Link to="/shopping" className="single-link">
        <h2>Shopping</h2>
      </Link>
      <Link to="/cart" className="single-link">
        <h2>Cart</h2>
      </Link>
    </nav>
  );
}

export default Navbar;
