import useAuth from "../../Hook/useAuth";

const SocialMedia = () => {
  const {googleLogin} =  useAuth()
  return (
    <div className="flex justify-around">
      <button onClick={()=>googleLogin()} className="btn btn-primary">Google </button>
      <button className="btn btn-secondary">Fb </button>
      <button className="btn btn-success">Twitter </button>
    </div>

  );
};

export default SocialMedia;