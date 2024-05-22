import { Link } from "react-router-dom";


const ShowProducts = ({ item }) => {
  const {name,image,description, id} = item
  return (
      <div  className="flex flex-col justify-center items-center">
      <img src={image} className='w-60' />
      <h2 className='text-xl font-medium mb-2'>{name}</h2>
      <p className="text-lg font-normal ">{description}</p> 
      <Link className="mt-3" to={`/item/${item.id}`}>
      <button className="btn btn-info">Show Details</button>
      </Link>
      </div>
  );
};


export default ShowProducts;