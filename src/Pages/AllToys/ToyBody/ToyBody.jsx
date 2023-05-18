import { Button, Table } from "flowbite-react";

const ToyBody = ({ toyBody }) => {
  const { sellerName, toyName, price, subCategory, quantity } = toyBody;
  console.log(toyBody);
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
        <Button color="light" pill={true}>
          View details
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default ToyBody;
