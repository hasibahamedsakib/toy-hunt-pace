import { Button, Textarea } from "flowbite-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleAddToy = (value) => {
    console.log(value);
  };
  return (
    <div className="container">
      <div className="py-8 rounded-lg text-white text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-center mb-3">
        Add A Toy
      </div>
      <div className=" font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500  px-3 md:p-10 py-10  rounded-md">
        <form onSubmit={handleSubmit(handleAddToy)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              {...register("imageURL")}
              className="rounded-lg"
              required={true}
              placeholder="Image URL"
            />
            <input
              type="text"
              {...register("toyName")}
              className="rounded-lg"
              required={true}
              placeholder="Toy Name"
            />
            <input
              type="text"
              {...register("sellerName")}
              className="rounded-lg"
              required={true}
              placeholder="user name"
              defaultValue={user.displayName}
            />
            <input
              type="text"
              {...register("sellerEmail")}
              className="rounded-lg"
              required={true}
              placeholder="user email"
              defaultValue={user.email}
            />
            <input
              type="text"
              {...register("subCategory")}
              placeholder="Sub Category Name"
              className="rounded-lg"
              required={true}
            />
            <input
              type="number"
              {...register("price")}
              placeholder="Toy Price"
              className="rounded-lg"
              required={true}
            />

            <input
              type="text"
              {...register("rating")}
              placeholder="Rating"
              className="rounded-lg"
              required={true}
            />
            <input
              type="text"
              {...register("quantity")}
              placeholder="Available Quantity"
              className="rounded-lg"
              required={true}
            />

            <Textarea
              {...register("description")}
              placeholder="Details Description "
              className="rounded-lg w-full"
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
