import useAuth from "../../Hook/useAuth";

const SocialMedia = () => {
  const { googleLogin, githubLogin, twitterLogin ,fbLogin} = useAuth()
  return (
    <div className="flex justify-around">
      <button onClick={() => googleLogin()} className="btn btn-sm btn-primary">Google </button>
      <button onClick={()=>fbLogin()} className="btn btn-sm btn-info">FB </button>
      <button onClick={() => githubLogin()} className="btn btn-sm btn-secondary">Github </button>
      <button onClick={()=>twitterLogin()} className="btn btn-sm btn-success">Twitter </button>
      
    </div>

  );
};

export default SocialMedia;