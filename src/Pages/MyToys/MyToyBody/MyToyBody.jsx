import { Button, Table } from "flowbite-react";

const MyToyBody = ({ toyBody, handleUpdate, handleDelete }) => {
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
        <Button color="light" onClick={() => handleUpdate(_id)}>
          Update
        </Button>
      </Table.Cell>
      <Table.Cell>
        <Button color="light" onClick={() => handleDelete(_id)}>
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default MyToyBody;
