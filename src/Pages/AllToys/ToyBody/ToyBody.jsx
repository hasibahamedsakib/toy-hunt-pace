import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ToyBody = ({ toyBody }) => {
  const { sellerName, toyName, price, subCategory, quantity, _id } = toyBody;

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {sellerName}
      </Table.Cell>
      <Table.Cell>{toyName}</Table.Cell>
      <Table.Cell>${price}</Table.Cell>
      <Table.Cell>{subCategory}</Table.Cell>
      <Table.Cell>{quantity} pic</Table.Cell>
      <Table.Cell>
        <Link to={`/all-toys/${_id}`}>
          <Button color="light" pill={true}>
            View details
          </Button>
        </Link>
      </Table.Cell>
    </Table.Row>
  );
};

export default ToyBody;
