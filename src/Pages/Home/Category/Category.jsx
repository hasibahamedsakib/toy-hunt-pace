import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleTabPanel from "./SingleTabPanel";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/toyTab")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <>Loading...........</>;
  }
  const { sports, police, truck } = toys;

  return (
    <div className="my-10">
      <div className="text-center ">
        <p className="text-xl font-mono text-orange-500 text-center  font-bold py-3">
          Sub Category item
        </p>
        <h1 className="text-5xl font-bold text-slate-800 mb-16">
          Shop by Category
        </h1>
      </div>
      <Tabs forceRenderTabPanel defaultIndex={1} className="container">
        <TabList className="bg-slate-500 text-white font-bold rounded-md shadow-lg mb-2">
          <Tab>Sports Car</Tab>
          <Tab>Police Car</Tab>
          <Tab>Truck Car</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className="bg-orange-600 text-white font-bold">
              <Tab>Sports 1</Tab>
              <Tab>Sports 2</Tab>
            </TabList>
            <TabPanel>
              {Array(sports[0]).map((data) => (
                <SingleTabPanel data={data} key={data.id} />
              ))}
            </TabPanel>
            <TabPanel>
              {Array(sports[1]).map((data) => (
                <SingleTabPanel data={data} key={data.id} />
              ))}
            </TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className="bg-lime-600 text-white font-bold">
              <Tab>Police Car 1</Tab>
              <Tab>Police Car 2</Tab>
            </TabList>
            <TabPanel>
              {Array(police[0]).map((data) => (
                <SingleTabPanel data={data} key={data.id} />
              ))}
            </TabPanel>
            <TabPanel>
              {Array(police[1]).map((data) => (
                <SingleTabPanel data={data} key={data.id} />
              ))}
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className="bg-violet-600 text-white font-bold">
              <Tab>Truck Car 1</Tab>
              <Tab>Truck Car 2</Tab>
            </TabList>
            <TabPanel>
              {Array(truck[0]).map((data) => (
                <SingleTabPanel data={data} key={data.id} />
              ))}
            </TabPanel>
            <TabPanel>
              {Array(truck[1]).map((data) => (
                <SingleTabPanel data={data} key={data.id} />
              ))}
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
