import React, { useContext, useState} from "react";
import ThemeContext from "../../context/ThemeContext";
import PageSkeleton from "../../components/PageSkeleton";
import baseUrl from "../../baseUrl";
import useFetch from "../../hooks/useFetch";
import { DataGrid } from "@mui/x-data-grid";
import { Eye, Trash2,  } from "lucide-react";
import { responses } from "../../data/responses";
import {Link} from "react-router-dom";
const Page = () => {
    const { theme, themeColor } = useContext(ThemeContext);
    const { loading } = useFetch(`${baseUrl}applications`);
    const [searchTerm, setSearchTerm] = useState("");


    if (loading) {
        return <PageSkeleton />;
      }
      const columns = [
        { field: "respondent", headerName: "Respondent", width: 150 },
        { field: "date", headerName: "Date", width: 180 },
        { field: "assessmentType", headerName: "Assessment Type", width: 200 },
        { field: "questionnaireTitle", headerName: "Questionnaire Title", width: 250 },
        {
            field: "actions",
            headerName: "Actions",
            width: 200,
            align: "center",
            renderCell: (params) => (
              <div className="flex gap-5 h-full items-center  ">
                <Link
                    to={`/responses/${params.row.id}`} 
                className="text-slate-600 hover:text-slate-800">
                  <Eye size={20} />
                </Link>
               
                <button className="text-slate-600 hover:text-slate-800">
                  <Trash2 size={20} />
                </button>
              </div>
            ),
          },
      ];
    
      const filteredResponse = responses.filter((item) =>
        item.questionnaireTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
    
      return (
        <div
          className={`h-full p-4`}
          style={{
            color: theme === "light" ? themeColor : "white",
            backgroundColor: theme === "dark" ? "#111113" : "#F3F4F6",
          }}
        >
        
      <div className="flex flex-col rounded-md p-3 gap-5"
          style={{
              color: theme === "dark" ? "#c5c5c5" : "#444",
              backgroundColor: theme === "dark" ? "#1d2630" : "#f5f5f5",
            }}
      >

          <h1
            className="text-3xl mb-4"
            style={{
              color: theme === "dark" ? "#f5f5f5" : "#444",
            }}
          >
            Response Management 
          </h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          {filteredResponse.length > 0 ? (
        <div style={{ width: "100%" }}>
          <DataGrid
            rows={filteredResponse}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            draggable={true}
            style={{
              color: theme === "dark" ? "#c5c5c5" : "#444",
              backgroundColor: theme === "dark" ? "#1d2630" : "#f5f5f5",
            }}
          />
        </div>
      ) : (
        <p className="text-sm text-gray-500">No questionnaire found.</p>
      )}
      </div>
        </div>
      );
    };
    
    export default Page;