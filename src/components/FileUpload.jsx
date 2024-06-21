import React from 'react';
import { UploadCloud } from "lucide-react";
import Papa from 'papaparse';
import { v4 as uuidv4 } from 'uuid';

const FileUpload = ({ setQuestions, theme, themeColor }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        const parsedData = result.data;
        if (!parsedData || parsedData.length === 0) {
          console.error("No data found in the uploaded file.");
          return;
        }

        const newQuestions = parsedData.map((row) => ({
          id: uuidv4(),
          text: row["text"],
          type: row["type"],
          options: row["options"] ? row["options"].split(",").map(option => option.trim()) : [],
          required: row["required"],
        }));

        setQuestions(newQuestions);
      },
      error: (error) => {
        console.error("An error occurred while parsing the file:", error);
      },
      header: true,
    });
  };

  return (
    <div className="my-4 file-upload flex flex-col gap-2 w-full justify-between"
      style={{
        "--clr": themeColor,
        backgroundColor: theme === "dark" ? "#111113" : "#F3F4F6",
        color: theme === "dark" ? "#f5f5f5" : "#444",
      }}
    >
      <UploadCloud size={100} className="upload-icon" />
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUpload;
