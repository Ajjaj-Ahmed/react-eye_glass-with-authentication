import {useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const SocialMedia = () => {
  const location = useLocation();
  const form = location?.state || '/'
  const navigate = useNavigate();

  
  const { googleLogin, githubLogin, twitterLogin, fbLogin } = useAuth()
  const handleSocialLogin = socialProvider => [
    socialProvider()
      .then(result => {
        if(result.user){
          navigate(form)
        }
      })
  ]
  return (
    <div className="flex justify-around">
      <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-sm btn-primary">Google </button>
      <button onClick={() => handleSocialLogin(fbLogin)} className="btn btn-sm btn-info">FB </button>
      <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-sm btn-secondary">Github </button>
      <button onClick={() => handleSocialLogin(twitterLogin)} className="btn btn-sm btn-success">Twitter </button>

    </div>

  );
};

export default SocialMedia;