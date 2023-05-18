import { Table } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
import ToyBody from "./ToyBody/ToyBody";

const AllToys = () => {
  const Data = useLoaderData();
  return (
    <div className="container">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Sealer Name</Table.HeadCell>
          <Table.HeadCell>Toy Name</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Sub Category</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>
            <p> Detail</p>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {Data.map((toy) => (
            <ToyBody key={toy._id} toyBody={toy} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllToys;
