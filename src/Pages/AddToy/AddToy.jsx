import { Button, Select, Textarea } from "flowbite-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AppTitle from "../../Helmet/AppTitle";
import { AuthContext } from "../../Provider/AuthProvider";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleAddToy = (value) => {
    const toyData = value;

    fetch("https://toy-hunt-place-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire(`Add Success`, "Toy Add SuccessFull...", "success");
        }
      });
  };
  return (
    <div className="bg-gradient-to-r from-pink-100 to-fuchsia-100">
      <AppTitle title="- Add Toy" />
      <div className="container">
        <div className="py-8 rounded-lg text-slate-600 text-3xl font-bold bg-gradient-to-r from-orange-200 to-green-100 text-center mb-3">
          Add A Toy
        </div>
        <div className=" font-semibold p-3  rounded-md">
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

              <Select defaultValue="Sub Category" {...register("subCategory")}>
                <option value="sports">Sports Car</option>
                <option value="truck">Truck</option>
                <option value="police">police Car</option>
                <option value="fire">Fire Truck</option>
                <option value="regular">Regular Car</option>
              </Select>

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
                className="px-4 pt-2 mt-5 border-2 "
                type="submit"
                gradientDuoTone="purpleToPink"
              >
                Add Toy
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
