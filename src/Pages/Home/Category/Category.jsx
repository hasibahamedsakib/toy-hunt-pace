import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loader from "../../Loader/Loader";
import SingleTabPanel from "./SingleTabPanel";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://toy-hunt-place-server.vercel.app/toyTab")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader />;
  }
  const { sports, police, truck } = toys;

  return (
    <div className="py-10 bg-pink-50">
      <div className="text-center ">
        <p className="text-xl font-mono text-teal-400 text-center  font-bold py-3">
          Sub Category item
        </p>
        <h1 className="text-5xl font-bold text-slate-800 mb-16">
          Shop by Category
        </h1>
      </div>

      <Tabs forceRenderTabPanel className="container">
        <TabList className="bg-slate-500 text-white font-bold rounded-md shadow-lg mb-2">
          <Tab>Sports Car</Tab>
          <Tab>Police Car</Tab>
          <Tab>Truck Car</Tab>
        </TabList>
        <TabPanel>
          <Tabs className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* <TabPanel > */}
            {sports.map((data) => (
              <SingleTabPanel data={data} key={data.id} />
            ))}
            {/* </TabPanel> */}
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* <TabPanel > */}
            {police.map((data) => (
              <SingleTabPanel data={data} key={data.id} />
            ))}
            {/* </TabPanel> */}
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* <TabPanel > */}
            {truck.map((data) => (
              <SingleTabPanel data={data} key={data.id} />
            ))}
            {/* </TabPanel> */}
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
