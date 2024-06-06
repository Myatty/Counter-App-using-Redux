import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authReducer";

const Navbar = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <nav className="navbar">
      <h2>Redux Counter</h2>
      {isLogin && (
        <ul>
          <li>My Records</li>
          <li>Profile</li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
