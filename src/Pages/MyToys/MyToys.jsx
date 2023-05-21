import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import AppTitle from "../../Helmet/AppTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyBody from "./MyToyBody/MyToyBody";

const MyToys = () => {
  const { user, myToys, setMyToys } = useContext(AuthContext);
  const [select, setSelect] = useState("");
  useEffect(() => {
    if (select == "true" || select == "false") {
      const URL = `https://toy-hunt-place-server.vercel.app/myToys?email=${user?.email}&sort=${select}`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          setMyToys(data);
        });
    }
  }, [select, setMyToys, user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this toy?",

      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-hunt-place-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
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
      <AppTitle title="- My Toys" />
      <div className="py-8 rounded-lg text-slate-600  text-3xl font-bold bg-gradient-to-r from-orange-200 to-green-100 text-center mb-3">
        My Toys
        <select
          onChange={(e) => setSelect(e.target.value)}
          className="float-right p-2 border-2 bg-transparent border-red-200 rounded-md focus:outline-none mr-3"
        >
          <option>Sorting By Price</option>
          <option value={true}>Ascending</option>
          <option value={false}>Descending</option>
        </select>
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
              handleDelete={handleDelete}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyToys;
