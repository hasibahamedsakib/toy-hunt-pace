import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();
  const {
    sellerName,
    toyName,
    price,
    subCategory,
    quantity,
    description,
    imageURL,
    createdAt,
    sellerEmail,
  } = data;
  console.log(data);
  return (
    <div className="container">
      <div className="py-8 rounded-lg text-slate-600 text-3xl font-bold bg-gradient-to-r from-orange-200 to-green-100 text-center mb-3">
        View Details For Toy
      </div>
      <div className="flex space-x-5">
        <div>
          <img className="rounded-md" src={imageURL} alt="" />
        </div>
        <div>
          <p>Seller Name : {sellerName}</p>
          <p> Email : {sellerEmail}</p>
          <p>Toy Name : {toyName}</p>
          <p>Price : $ {price}</p>
          <p>SubCategory : {subCategory}</p>
          <p>Stock Quantity : {quantity}</p>
          <p>Posted Time : {createdAt}</p>
          <p>Description : {description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
