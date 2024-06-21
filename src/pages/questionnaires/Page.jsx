import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import PageSkeleton from "../../components/PageSkeleton";
import baseUrl from "../../baseUrl";
import useFetch from "../../hooks/useFetch";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, Trash2, Search } from "lucide-react";
import { questionnaires } from "../../data/questionnaires";
import { Link } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";
const Page = () => {
  const { theme, themeColor } = useContext(ThemeContext);
  const { loading } = useFetch(`${baseUrl}applications`);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const filteredQuestionnaires = questionnaires.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowMenu = (id) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  // i don't have an api for delete so i need you to simulate something like this
  const handleDelete = async () => {
      // use some kind of timeout to simulate the api call
 
      setActiveMenu(null);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    };

  



  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "description", headerName: "Description", width: 350 },
    { field: "createdBy", headerName: "Created By", width: 180 },
    { field: "createdAt", headerName: "Created At", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      align: "center",
      renderCell: (params) => (
        <div className="flex gap-5 h-full items-center  ">
          <div className=" h-full">
            <div className="inline-flex items-center overflow-hidden rounded-md border bg-[#f5f5f5]">
              <Link
                to={`/questionnaires/${params.row.id}`}
                className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
              >
                View
              </Link>

              <button
                className="h-full p-2 text-gray-600 outline-none hover:bg-gray-50 hover:text-gray-700"
                onClick={() => handleShowMenu(params.row.id)}
              >
                <span className="sr-only">Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {activeMenu === params.row.id && (
            <div
              className="absolute z-50 mt-2 w-max rounded-md border border-gray-100 bg-[#f5f5f5] shadow-lg"
              role="menu"
            >
              <div className="p-2">
                <Link
                  to={`/questionnaires/edit/${params.row.id}`}
                  className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  <Edit size={20} />
                  Edit
                </Link>

                <>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-lg outline-none px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    role="menuitem"
                    onClick={() => setShowDeleteModal(true)}
                  >
                    <Trash2 size={20} />
                    Delete
                  </button>
                </>
              </div>
            </div>
          )}
          </div>
        </div>
      ),
    },
  ];
  if (loading) {
    return <PageSkeleton />;
  }

  return (
    <div
      className={` h-full p-4`}
      style={{
        color: theme === "light" ? themeColor : "white",
        backgroundColor: theme === "dark" ? "#1b1c1f" : "#F3F4F6",
      }}
    >
      <div
        className="flex flex-col rounded-md  px-3 gap-4"
        style={{
          color: theme === "dark" ? "#c5c5c5" : "#444",
          backgroundColor: theme === "dark" ? "#1b1c1f" : "#f5f5f5",
        }}
      >
        <h1
          className="text-3xl mb-4"
          style={{
            color: theme === "dark" ? "#f5f5f5" : "#444",
          }}
        >
          Questionnaire Management
        </h1>

        <div className="flex w-full justify-between items-center gap-4 mb-4">
          <div
            className="flex justify-between items-center w-4/5 rounded  p-4 border focus-within:border focus-within:border-neutral-300  focus-within:border-opacity-50 focus-within:ring-2 focus-within:ring-neutral-300 focus-within:ring-opacity-50 "
            style={{
              borderColor: theme === "dark" ? "#333333" : "#333333",
            }}
          >
            <input
              type="text"
              placeholder="Search Questionnaires"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:outline-none bg-transparent w-full text-lg"
              style={{
                // backgroundColor: theme === "dark" ? "#1d2630" : "#fff",
                color: theme === "dark" ? "#f5f5f5" : "#1b1c1f",
              }}
            />
            <Search />
          </div>
          <Link
            to="/questionnaires/create"
            className="w-1/5 p-4 text-white rounded text-center text-lg hover:opacity-80"
            style={{
              backgroundColor: themeColor,
            }}
          >
            New Questionnaire
          </Link>
        </div>

        {filteredQuestionnaires.length > 0 ? (
          <div style={{ width: "100%" }}>
            <DataGrid
              rows={filteredQuestionnaires}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              draggable={true}
            
              style={{
                color: theme === "dark" ? "#c5c5c5" : "#444",
                backgroundColor: theme === "dark" ? "#1b1c1f" : "#f5f5f5",
                position: "relative",
              }}
            />
          </div>
        ) : (
          <p className="text-sm text-gray-500">No questionnaire found.</p>
        )}
      </div>
      {showDeleteModal && (
        <DeleteModal
          title="Delete Questionnaire"
          message="Are you sure you want to delete this questionnaire?"
          onClose={() => setShowDeleteModal(false)}
          theme={theme}
          themeColor={themeColor}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Page;
