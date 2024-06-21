import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { Plus, Search, Eye, PenSquare, Trash2 } from "lucide-react";
import moment from "moment";
import PageSkeleton from "./PageSkeleton";
import { Link } from "react-router-dom";
const Table = ({ data, buttonText, handleOpen, loading, title }) => {
  const { theme, themeColor } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  console.log(data);  

  const filteredApplications = data.filter((application) => {
    if (status === "all") {
      return application?.name?.toLowerCase().includes(search.toLowerCase());
    } else {
      return (
        application.name.toLowerCase().includes(search.toLowerCase()) &&
        application.status === status
      );
    }
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setStatus(e.target.value);
  };

  const getStatusColor = (status) => {
    if (status === "Pending") {
      return "text-yellow-500";
    } else if (status === "Approved") {
      return "text-green-500";
    } else if (status === "Rejected") {
      return "text-red-500";
    }
  };

  

  return (
    <>

      {
        loading ? (
          <PageSkeleton />
        ) : (
  
      <div className="mt-5 w-full"
        style={{
          color: theme === "light" ? "#3A3A38" : "#f2f2f2",
        }}
      >
        {/*  search and filter */}
        <div className="flex w-full justify-between">
          <div className="flex flex-1 gap-5">
            <div
              className="flex items-center gap-2 "
              style={{
                color: theme === "dark" ? "#f5f5f5" : "#444",
              }}
            >
              <label htmlFor="status">Status:</label>
              <select
                name="status"
                id="status"
                className="p-2 border border-gray-200 rounded-lg outline-none text-black"
                onChange={handleFilter}
              >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="flex justify-between w-96 ml-2 p-2 border border-gray-200 rounded-lg">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none "
                onChange={handleSearch}
              />
              <Search size={24} />
            </div>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              className="flex items-center gap-2 text-white px-4 py-2 rounded-lg"
              style={{
                backgroundColor: themeColor,
              }}
              onClick={() => handleOpen(buttonText)}
            >
              <Plus size={24} />
              <span>{buttonText}</span>
            </button>
          </div>
        </div>
  
        <table className="min-w-full divide-y divide-gray-200 mt-5">
          <thead
            className="bg-gray-50"
            style={{
              backgroundColor: theme === "dark" ? "#1d2630" : "#f9fafb",
            }}
          >
            <tr>
              <th className="px-6 py-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              {buttonText === "New User" && (
                <th className="px-6 py-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
              )}
              {buttonText === "New User" && (
                <th className="px-6 py-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
              )}
              {["New Application", "New Content", "New Media"].includes(
                buttonText
              ) && (
                <th className="px-6 py-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description / Link
                </th>
              )}
              {["New Application", "New Content", "New Media"].includes(
                buttonText
              ) && (
                <th className="px-6 py-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              )}
              {buttonText === "New Content" && (
                <th className="px-6 py-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
              )}
              {buttonText === "New Media" && (
                <th className="px-6 py-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
              )}
              {buttonText === "New Media" && (
                <th className="px-6 py-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Media Type
                </th>
              )}
  
              <th className="px-6 py-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th className="px-6 py-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody
            className="bg-white  divide-y divide-gray-300 "
            style={{
              backgroundColor: theme === "dark" ? "#1d2630" : "#f5f5f5",
            }}
          >
            {data.map((application, index) => (
              <tr key={index}>
                <td className="px-6 py-5  whitespace-nowrap">
                  {buttonText === "New User"
                    ? application.firstName + " " + application.lastName
                    : application.name}
                </td>
                {buttonText === "New User" && (
                  <td className="px-6 py-5  whitespace-nowrap">
                    {application.email}
                  </td>
                )}
  
                {buttonText === "New User" && (
                  <td className="px-6 py-5  whitespace-nowrap">
                    {application.role.name}
                  </td>
                )}
  
                {["New Application", "New Content", "New Media"].includes(
                  buttonText
                ) && (
                  <td className="px-6 py-5  whitespace-nowrap">
                    {application.link || application.description}
                  </td>
                )}
                {["New Application", "New Content", "New Media"].includes(
                  buttonText
                ) && (
                  <td
                    className={`px-6 py-5  whitespace-nowrap ${getStatusColor(
                      application.status
                    )}`}
                  >
                    {application.status}
                  </td>
                )}
                {buttonText === "New Content" && (
                  <td className="px-6 py-5  whitespace-nowrap">
                    {application.author}
                  </td>
                )}
  
                {buttonText === "New Media" && (
                  <td className="px-6 py-5  whitespace-nowrap">
                    {application.createdBy}
                  </td>
                )}
                {buttonText === "New Media" && (
                  <td className="px-6 py-5  whitespace-nowrap">
                    {application.mediaType}
                  </td>
                )}
                <td className="px-6 py-5  whitespace-nowrap">
                  {moment(application.createdAt).format("MM/DD/YYYY")}
                </td>
                {/*  view button */}
                <td className="px-6 py-5 whitespace-nowrap flex gap-2 items-center "
                  style={{
                    color: theme === "dark" ? "#f2f2f2" : "#444",
                  }}
                >
                  <Link href={ `/${title.toLowerCase()}/${application.id}`}
                  className=" hover:text-sky-300 ">
                    <Eye size={24} />
                  </Link>
                  <a
                    href="#"
                    className=" hover:text-sky-300 ml-2"
                  >
                    <PenSquare size={24} />
                  </a>
                  <a
                    href="#"
                    className=" hover:text-sky-300 ml-2"
                  >
                    <Trash2 size={24} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        )
      }
    </>
  );
};

export default Table;
