import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import Navbar from "../Navbar/Navbar";

const Register = () => {
  const {createUser} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const {email,password} = data;
    createUser(email, password)
    .then()
    .catch()
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="text-center font-bold text-3xl">Register Here</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" {...register("fullName", { required: true })} />
                {errors.fullName && <span className="mt-2 text-red-600">This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered"  {...register("email", { required: true })} />
                {errors.email && <span className="mt-2 text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">URL</span>
                </label>
                <input type="url" placeholder="Image Url" name="url" className="input input-bordered" 
                {...register("url", { required: true })}  />
                {errors.url && <span className="mt-2 text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" 
                {...register("password", { required: true })}/>
                {errors.password && <span className="mt-2 text-red-600">This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Have an Account ! <Link to={'/login'}>Login here</Link></p>
            </form>
      </div>
    </div>
  );
};

export default Register;