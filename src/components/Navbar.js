import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about-me">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/github">GitHub</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
}

export default Navbar;