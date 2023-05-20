import { Button, Modal, Textarea } from "flowbite-react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const UpdateModal = ({ open, setOpen, toyBody }) => {
  const { myToys, setMyToys } = useContext(AuthContext);
  const { description, toyName, price, quantity, _id } = toyBody;

  const { register, handleSubmit } = useForm();
  const handleAddToy = (value) => {
    fetch(`https://toy-hunt-place-server.vercel.app/toys/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire("Updated", "Successfully Update This Toy", "success");
          const remaining = myToys.filter((toy) => toy._id !== _id);
          const update = myToys.find((toy) => toy._id === _id);
          update.price = value.price;
          update.toyName = value.toyName;
          update.description = value.description;
          update.quantity = value.quantity;
          const newToys = [update, ...remaining];
          setMyToys(newToys);
        }
      });
  };
  return (
    <React.Fragment>
      <Modal dismissible={true} show={open} onClose={() => setOpen(false)}>
        <Modal.Header className="bg-gradient-to-r from-orange-100 to-green-100  ">
          <p className="text-center">Update Toy Data</p>
        </Modal.Header>
        <Modal.Body className="bg-gradient-to-r from-purple-100 to-fuchsia-200 rounded-b-md">
          <div className=" font-semibold   px-3 md:p-10 py-10  rounded-md">
            <form onSubmit={handleSubmit(handleAddToy)}>
              <div className="grid gap-3">
                <input
                  type="text"
                  {...register("toyName")}
                  className="rounded-lg placeholder:text-slate-300"
                  required={true}
                  placeholder="Toy Name"
                  defaultValue={toyName}
                />

                <input
                  type="number"
                  {...register("price")}
                  placeholder="Toy Price"
                  className="rounded-lg placeholder:text-slate-300"
                  required={true}
                  defaultValue={price}
                />

                <input
                  type="text"
                  {...register("quantity")}
                  placeholder="Available Quantity"
                  className="rounded-lg placeholder:text-slate-300"
                  required={true}
                  defaultValue={quantity}
                />

                <Textarea
                  {...register("description")}
                  placeholder="Details Description "
                  className="rounded-lg placeholder:text-slate-300 w-full"
                  required={true}
                  rows={4}
                  defaultValue={description}
                />
              </div>
              <div className="mx-auto w-44">
                <Button
                  className="bg-gradient-to-r from-purple-400 to-fuchsia-400 hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-purple-400 px-4 py-1 mt-5 border-2 "
                  type="submit"
                  gradientDuoTone="greenToBlue"
                >
                  Update Toy
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default UpdateModal;
