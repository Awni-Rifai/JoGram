import "./NavbarmainStyle.scss";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
const Navbar = () => {
  const ctx = useContext(AuthContext);
  console.log(ctx);
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="navbar__logo__title">Jo</span>
        <Link to="/" className="navbar__logo__text">
          Gram
        </Link>
      </div>
      <input type="checkbox" className="navbar__btn" id="navbar__btn" />
      <label htmlFor="navbar__btn" className="navbar__icon">
        <span className="navbar__icon__line"></span>
      </label>
      <ul className="navbar__links">
        <li className="navbar__links--li">
          <a href="" id="selected">
            Home
          </a>
        </li>
        <li className="navbar__links--li">
          <a href="">contact us</a>
        </li>
        <li className="navbar__links--li">
          <a href="">services</a>
        </li>
        {ctx.isLoggedIn ? (
          <li className="navbar__links--li">
            <Link to="register">Post</Link>
            
          </li>
        ) : (
          <li className="navbar__links--li">
            <Link to="register">Register</Link>
          </li>
        )}
      </ul>
      {ctx.isLoggedIn ? (
        <Link className="navbar__btn--login" to="register">
          Post
        </Link>
      ) : (
        <Link className="navbar__btn--login" to="register">
          Register
        </Link>
      )}
    </nav>
  );
};
export default Navbar;
