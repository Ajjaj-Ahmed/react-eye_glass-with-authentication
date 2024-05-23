import { useLoaderData, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar"
import ShowProducts from "../../Components/ShowProducts/ShowProducts";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  const glasses = useLoaderData()
  //console.log(glasses)

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {glasses.map(glass => <ShowProducts key={glass.id} item={glass}></ShowProducts>)}
      </div>
      <Footer></Footer>

    </div>
  );
};

export default Home;