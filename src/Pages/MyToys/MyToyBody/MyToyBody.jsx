import { Button, Table } from "flowbite-react";
import { useState } from "react";
import UpdateModal from "../UpdateModal/UpdateModal";

const MyToyBody = ({ toyBody, handleUpdate, handleDelete }) => {
  const { sellerName, toyName, price, subCategory, quantity, _id } = toyBody;
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => {
    setOpen(true);
    handleUpdate(_id);
  };

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
        <Button color="light" onClick={handleModalOpen}>
          Update
        </Button>
        <UpdateModal toyBody={toyBody} open={open} setOpen={setOpen} />
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
