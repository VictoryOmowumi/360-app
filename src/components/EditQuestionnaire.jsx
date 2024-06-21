import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { useParams, useNavigate } from "react-router-dom";
import { questionnaires } from "../data/questionnaires";

const EditQuestionnaire = () => {
    const { theme, themeColor } = useContext(ThemeContext);
  const { id } = useParams();
  const history = useNavigate();
  const [questionnaire, setQuestionnaire] = useState(null);

  useEffect(() => {
    const foundQuestionnaire = questionnaires.find(
      (item) => item.id === parseInt(id)
    );
    setQuestionnaire(foundQuestionnaire);
  }, [id]);

  const handleChange = (event) => {
    setQuestionnaire({
      ...questionnaire,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically update the assessment in your data.
    // This could involve making a request to a server, for example.
    history.push(`/view/${id}`);
  };

  if (!questionnaire) {
    return <div>Loading...</div>;
  }

  return (
    <div-
      className={` h-full p-4`}
      style={{
        color: theme === "light" ? themeColor : "white",
        backgroundColor: theme === "dark" ? "#111113" : "#F3F4F6",
      }}
    >
      <div
        className="flex flex-col rounded-md py-3 px-5 gap-4"
        style={{
          color: theme === "dark" ? "#c5c5c5" : "#444",
          backgroundColor: theme === "dark" ? "#1b1c1f" : "#fff",
        }}
      >
        <div className="flex gap-5 w-full justify-between">
          <div className="">
            <h1
              className="text-3xl"
              style={{
                color: theme === "dark" ? "#f5f5f5" : "#444",
              }}
            >
              Edit Questionnaire
            </h1>
          </div>
          <button
            className="px-4 py-2 text-lg rounded bg-opacity-50"
            style={{
              color: theme === "dark" ? "#f5f5f5" : "#f5f5f5",
              background: "red",
            }}
          >
            Delete
          </button>
        </div>

    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-gray-500 text-sm">Title:</span>
        <input
          className="mt-3 block w-full rounded-md bg-transparent border py-3 px-2 shadow-sm "
           style={{
             borderColor: theme === "dark" ? "#333333" : "#444",
             }}
          type="text"
          name="title"
          value={questionnaire.title}
          onChange={handleChange}
        />
      </label>
      <label className="block">
        <span className="text-gray-500 text-sm">Type:</span>
        <select
          className="mt-3 block w-full rounded-md bg-transparent border py-3 px-2 shadow-sm "
           style={{
             borderColor: theme === "dark" ? "#333333" : "#444",
             }}
          type="text"
          name="type"
          value={questionnaire.type}
          onChange={handleChange}
        >
          <option value="feedback">Feedback</option>
          <option value="survey">Survey</option>
          <option value="review">Review</option>
        </select>
      </label>
     
      <label className="block">
        <span className="text-gray-500 text-sm">Description</span>
        <textarea
          className="mt-3 block w-full rounded-md bg-transparent  border py-3 px-2 shadow-sm "
          style={{
             borderColor: theme === "dark" ? "#333333" : "#444",
             }}
          name="description"
          value={questionnaire.description}
          onChange={handleChange}

        />
      </label>
      <table className="table-auto w-full">
        <thead className="border"
          style={{
            backgroundColor: theme === "dark" ? "" : "#f5f5f5",
            borderColor: theme === "dark" ? "#333333" : "#444",
          }}
        >
          <tr>
            <th className="px-4 py-2">Question</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Options</th>
          </tr>
        </thead>
        <tbody>
          {questionnaire.questions.map((question, index) => (
            <tr key={index}>
              <td className="border px-4 py-2"  style={{
             borderColor: theme === "dark" ? "#333333" : "#444",
             }}>
                <input
                  className="mt-1 block w-full rounded-md bg-transparent  py-3 px-2 shadow-sm "
                 
                  type="text"
                  name={`question${index}`}
                  value={question.text}
                  onChange={handleChange}
                />
              </td>
              <td className="border px-4 py-2"      style={{
             borderColor: theme === "dark" ? "#333333" : "#444",
             }}>
                <select
                  className="mt-1 block w-full rounded-md bg-transparent  py-3 px-2 shadow-sm "
             
                  type="text"
                  name={`type${index}`}
                  value={question.type}
                  onChange={handleChange}
                >
                  <option value="text">Text</option>
                  <option value="rating">Rating</option>
                  <option value="radio">Radio</option>
                  <option value="checkbox">Checkbox</option>
                </select>
              </td>
              <td className="border px-4 py-2"      style={{
             borderColor: theme === "dark" ? "#333333" : "#444",
             }}>
                <input
                  className="mt-1 block w-full rounded-md bg-transparent  py-3 px-2 shadow-sm "
                  type="text"
                  name={`options${index}`}
                  value={question?.options?.join(", ") || []}
                  onChange={handleChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="submit"
        className="mt-2 px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save
      </button>
    </form>
      </div>
    </div->
  );
};

export default EditQuestionnaire;
