import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
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
        setMyToys(data);
      });
  }, [URL]);

  const handleUpdate = (id) => {
    Swal.fire("Updated", "Successfully deleted This Toy", "success");
    console.log(id);
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this toy?",

      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/toys/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount === 1) {
              Swal.fire("Deleted", "Successfully deleted This Toy", "success");

              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

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
            <p> Edit</p>
          </Table.HeadCell>
          <Table.HeadCell>
            <p> Action</p>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {myToys.map((toy) => (
            <MyToyBody
              key={toy._id}
              toyBody={toy}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyToys;
