
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
const Page = () => {
  const { theme, themeColor } = useContext(ThemeContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

 

  const handleEdit = () => {
    // Handle edit action here
  };

  const handleDelete = () => {
    // Handle delete action here
  };

  const nameInitials = data?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className=" w-full pt-2 px-4 text-black">
      <Breadcrumb items={["Home", "Applications", data.name]} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        data && (
          <div className="flex flex-col gap-4 w-full h-full">
            <div className="mt-4 bg-white h-[200px] flex justify-between w-full p-4 pt-6  rounded-lg shadow"
                style={{
                  color: theme === "light" ? "#111113" : "white",
        backgroundColor: theme === "dark" ? "#111113" : "#f5f5f5",
                
                }}
            >
              <div className="w-full h-full flex gap-3  ">

                  <div className=" h-[150px] w-[150px] flex justify-center items-center text-6xl font-semibold rounded-md "
                      style={{
                          backgroundColor: themeColor,
                          color: theme === "dark" ? "#000" : "#f5f5f5",
                      }}
                  >
                    {nameInitials}
                  </div>
                <div className="flex flex-col gap-4">
                  {
                    <div>
                      <h1 className="text-2xl font-semibold">{data.name}</h1>
                      <p>{data.link}</p>
                    </div>
                  }
                  </div>
               
              </div>
              <div className="w-full h-full"></div>
            </div>
            {/* table for content */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h1 className="text-2xl font-semibold">Content</h1>
              <table className="w-full mt-4">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">Name</th>
                    <th className="border border-gray-300 p-2">Type</th>
                    <th className="border border-gray-300 p-2">Status</th>
                    <th className="border border-gray-300 p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">Content 1</td>
                    <td className="border border-gray-300 p-2">Type 1</td>
                    <td className="border border-gray-300 p-2">Status 1</td>
                    <td className="border border-gray-300 p-2">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Content 2</td>
                    <td className="border border-gray-300 p-2">Type 2</td>
                    <td className="border border-gray-300 p-2">Status 2</td>
                    <td className="border border-gray-300 p-2">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Page;
