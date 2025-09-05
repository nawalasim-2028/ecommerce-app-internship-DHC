import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-primary text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">E-Shop</Link>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-secondary">Home</Link>
        <Link to="/cart" className="hover:text-secondary">Cart</Link>
        <Link to="/login" className="hover:text-secondary">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
