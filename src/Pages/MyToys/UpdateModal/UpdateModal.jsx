import { Button, Modal, Textarea } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";

const UpdateModal = ({ open, setOpen, toyBody }) => {
  const { description, toyName, price, quantity } = toyBody;

  const { register, handleSubmit } = useForm();
  const handleAddToy = (value) => {
    console.log(value);
  };
  return (
    <React.Fragment>
      <Modal dismissible={true} show={open} onClose={() => setOpen(false)}>
        <Modal.Header className="bg-gradient-to-r from-orange-100 to-green-100  ">
          <p className="text-center">Update Toy Data</p>
        </Modal.Header>
        <Modal.Body className="bg-gradient-to-r from-purple-100 to-fuchsia-200">
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
                  className="px-4 py-2 mt-5 border-2 "
                  type="submit"
                  gradientDuoTone="purpleToPink"
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
