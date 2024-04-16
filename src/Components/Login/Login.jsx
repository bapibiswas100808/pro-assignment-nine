import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Log into E-estate for secure, user-friendly access to manage and
              explore real estate listings, transactions, and personalized
              services.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#ff3e55] hover:bg-primary text-white"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="pl-5 pb-5">
              Do not have an account? <br /> Please
              <Link className="text-[#ff3e55] underline ml-2" to="/register">
                Register Here
              </Link>
              <p className="font-poppins font-semibold mt-3">Login With:</p>
              <div className="flex gap-5">
                <p className="flex items-center gap-3">
                  <span>Google:</span>
                  <FaGoogle className="cursor-pointe" />
                </p>
                <p className="flex items-center gap-3">
                  <span>Github:</span>
                  <FaGithub className="cursor-pointer" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
