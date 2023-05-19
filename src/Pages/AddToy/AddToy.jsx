import { Button, Textarea } from "flowbite-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleAddToy = (value) => {
    const toyData = value;
    fetch(" http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire(`Success`, "Toy Add SuccessFull...", "success");
        }
      });
  };
  return (
    <div className="container">
      <div className="py-8 rounded-lg text-slate-600 text-3xl font-bold bg-gradient-to-r from-orange-200 to-green-100 text-center mb-3">
        Add A Toy
      </div>
      <div className=" font-semibold bg-gradient-to-r from-violet-100 to-fuchsia-200  px-3 md:p-10 py-10  rounded-md">
        <form onSubmit={handleSubmit(handleAddToy)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              {...register("imageURL")}
              className="rounded-lg placeholder:text-slate-300"
              required={true}
              placeholder="Image URL"
            />
            <input
              type="text"
              {...register("toyName")}
              className="rounded-lg placeholder:text-slate-300"
              required={true}
              placeholder="Toy Name"
            />
            <input
              type="text"
              {...register("sellerName")}
              className="rounded-lg placeholder:text-slate-300"
              required={true}
              placeholder="user name"
              defaultValue={user.displayName}
            />
            <input
              type="text"
              {...register("sellerEmail")}
              className="rounded-lg placeholder:text-slate-300"
              required={true}
              placeholder="user email"
              defaultValue={user.email}
            />
            <input
              type="text"
              {...register("subCategory")}
              placeholder="Sub Category Name"
              className="rounded-lg placeholder:text-slate-300"
              required={true}
            />
            <input
              type="number"
              {...register("price")}
              placeholder="Toy Price"
              className="rounded-lg placeholder:text-slate-300"
              required={true}
            />

            <input
              type="text"
              {...register("rating")}
              placeholder="Rating"
              className="rounded-lg placeholder:text-slate-300"
              required={true}
            />
            <input
              type="text"
              {...register("quantity")}
              placeholder="Available Quantity"
              className="rounded-lg placeholder:text-slate-300"
              required={true}
            />

            <Textarea
              {...register("description")}
              placeholder="Details Description "
              className="rounded-lg placeholder:text-slate-300 w-full"
              required={true}
              rows={4}
            />
          </div>
          <div className="mx-auto w-32">
            <Button
              className="px-4 py-2 mt-5 border-2 "
              type="submit"
              gradientDuoTone="purpleToPink"
            >
              Add Toy
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
