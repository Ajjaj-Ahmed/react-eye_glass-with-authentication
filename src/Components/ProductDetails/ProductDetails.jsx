import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ProductDetails = () => {
  const products = useLoaderData()
  const { id } = useParams();

  const product = products.find(product => product.id == id);
  const { image, name, description } = product
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:flex justify-center gap-10 items-center">
        <img className="w-2/4" src={image} />
        <div className="w-2/4 ">
          <h2 className="text-4xl font-semibold  mb-5">{name}</h2>
          <p className="text-lg font-medium "> {description}</p>
          <button className="btn btn-secondary block mx-auto mt-5">Buy Now </button>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;