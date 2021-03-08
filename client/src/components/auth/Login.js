import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postLogin } from "../../store/asyncMethods/AuthMethods";
import toast, { Toaster } from "react-hot-toast";
import './Login.css'

const Login = () => {
  const dispatch = useDispatch();
  const { loginErrors, loading } = useSelector((state) => state.AuthReducer);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const userLogin = (e) => {
    e.preventDefault();
    dispatch(postLogin(state));
  };
  useEffect(() => {
    if (loginErrors.length > 0) {
      loginErrors.map((error) => toast.error(error.msg));
    }
  }, [loginErrors]);
  return (
    <>
      <div  >
        <div>
          <div  >
            <form  onSubmit={userLogin}>
              <div >
                <h3 >Login</h3>
              </div>
              <div >
                <input className="login-input"
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleInputs}
                  placeholder=" Email gir"
                />
              </div>
              <div className="group">
                <input
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleInputs}
                  className="group__control"
                  placeholder="Sifre gir"
                />
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="btn btn-default btn-block"
                  value={loading ? "..." : "Login"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
