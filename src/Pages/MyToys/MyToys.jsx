import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyBody from "./MyToyBody/MyToyBody";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const URL = `http://localhost:3000/myToys?email=${user?.email}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [URL]);
  console.log(myToys);
  return (
    <div className="container">
      <div className="py-8 rounded-lg text-slate-600  text-3xl font-bold bg-gradient-to-r from-orange-200 to-green-100 text-center mb-3">
        My Toys
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
          {myToys.map((toy) => (
            <MyToyBody key={toy._id} toyBody={toy} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyToys;
