import { Table } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
import ToyBody from "./ToyBody/ToyBody";

const AllToys = () => {
  const Data = useLoaderData();
  return (
    <div className="container">
      <div className="py-8 rounded-lg text-slate-600  text-3xl font-bold bg-gradient-to-r from-orange-200 to-green-100 text-center mb-3">
        All Toys
      </div>
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
