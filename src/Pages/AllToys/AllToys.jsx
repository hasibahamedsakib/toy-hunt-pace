import { Table } from "flowbite-react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ToyBody from "./ToyBody/ToyBody";

const AllToys = () => {
  const loadData = useLoaderData();
  const [Data, setData] = useState(loadData);
  const [searchText, setSearchText] = useState(" ");

  const handleSearch = async () => {
    fetch(`http://localhost:3000/searchToy/${searchText}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div className="container">
      <div className="py-8 rounded-lg text-slate-600  text-3xl font-bold bg-gradient-to-r from-orange-200 to-green-100 text-center mb-3">
        All Toys
      </div>

      <div className="border-slate-600  border-2 w-full md:w-[500px] py-1 px-1 rounded-full flex mx-auto my-5">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="w-full text-lg bg-transparent border-none focus:outline-none rounded-full placeholder:text-gray-400"
          placeholder="Search Toy Name"
        />

        <button
          onClick={handleSearch}
          type="submit"
          className="bg-orange-500 px-3 md:px-6 py-3 rounded-full text-white"
        >
          <FaSearch className="w-6 h-6 " />
        </button>
      </div>
      {/* <div className="">
    
    
  </div> */}
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
