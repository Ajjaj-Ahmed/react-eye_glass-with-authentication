import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import Navbar from "../../Components/Navbar/Navbar";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import useAuth from "../../Hook/useAuth";

const Login = () => {
  const { signInUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then(result => console.log(result.user))
      .catch(error => console.error(error))
  }


  return (
    <div>
      <Navbar></Navbar>
      <div className="w-1/4 rounded-2xl mx-auto bg-pink-100 opacity-80">
        <div className="hero ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-center font-bold text-3xl">Login Please</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered"
                {...register("email", { required: true })} />
              {errors.email && <span className="mt-2 text-red-600">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
              {errors.password && <span className="mt-2 text-red-600">This field is required</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center">New here ! <Link to={'/register'} className="text-red-600">Register here</Link></p>
          </form>

        </div>
        <div className="pb-4">
          <SocialMedia></SocialMedia>
        </div>
      </div>

    </div>
  );
};

export default Login;