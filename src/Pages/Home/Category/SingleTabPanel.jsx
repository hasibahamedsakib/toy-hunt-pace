import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button, Card } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
const SingleTabPanel = ({ data }) => {
  const { user } = useContext(AuthContext);
  const { imageURL, price, _id, toyName, rating, description } = data;

  const handleDetails = () => {
    if (!user) {
      return Swal.fire("Login First,to view Details");
    }
  };
  return (
    <>
      <div className="max-w-md ">
        <Card imgSrc={imageURL}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {toyName}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="font-bold py-3">
            <p className=" text-gray-700 dark:text-gray-400">Price: {price}</p>
            <span className="flex text-gray-700 dark:text-gray-400">
              {<Rating style={{ maxWidth: 120 }} value={rating} readOnly />}
            </span>
          </div>
          <Link to={`/category-details/${_id}`}>
            <Button
              className="w-full"
              onClick={handleDetails}
              gradientMonochrome="pink"
            >
              view details
            </Button>
          </Link>
        </Card>
      </div>
    </>
  );
};

export default SingleTabPanel;
