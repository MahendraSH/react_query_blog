import { Link } from "react-router-dom";

const Login = () => {


  return (
    <>
        <div
          className="hero min-h-screen bg-base-200  shadow-xl shadow-base-content"
          // style={{
          //   backgroundImage: `url("https://res.cloudinary.com/dranaclni/image/upload/v1684320559/cenIN/MainHero_esipxn.png")`,
          // }}
        >
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left  ">
              <h1 className="text-5xl font-bold para ">Welcome Again !!</h1>
              {/* <p className="py-6 para">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p> */}
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
              <div className="card-body  shadow-xl shadow-base-content">
                <form >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required={true}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required={true}
                    />
                    <label className="label">
                      <Link
                        to="/forgot"
                        className="label-text-alt link link-hover"
                      >
                        Forgot password?
                      </Link>

                     
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default Login;
