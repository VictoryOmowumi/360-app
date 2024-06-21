import React, {useState, useContext} from 'react';
import { Trash2, ChevronDownIcon } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
const QuestionsTable = ({ questions, removeQuestion, handleCheckboxChange, theme }) => {
  const { themeColor } = useContext(ThemeContext);
    const [collapseTable, setCollapseTable] = useState(true);
  const toggleCollapseTable = () => setCollapseTable(!collapseTable);
   
  return(

  <div className="mb-4 p-4 rounded bg-opacity-50" style={{ background: theme === "dark" ? "#1b1c1f" : "#F3F4F6" }}>
    <div className="flex items-end gap-4 my-3">
      <p className="text-lg font-medium">Questions</p>
      <button type="button" 
      onClick={toggleCollapseTable}
      className="text-blue-600 hover:underline"
      style={{ 
        color: theme === "dark" ? "#f5f5f5" : "#444",
        rotate: collapseTable ? "180deg" : "0deg",
         }}

      >
        <ChevronDownIcon />
      </button>
    </div>
   
    {
      collapseTable && (
    <table className="table-auto rounded-t-md w-full text-left text-neutral-600 transition-all " 
    style={{ 
      color: theme === "dark" ? "#f5f5f5" : "#444",
      transition: "background 0.3s ease",

       }}>
      <thead className="py-4 border" style={{ background: theme === "dark" ? "#1b1c1f" : "#F3F4F6" }}>
        <tr>
          <th className="px-4 py-2">No.</th>
          <th className="px-4 py-2">Question</th>
          <th className="px-4 py-2">Type</th>
          <th className="px-4 py-2">Options</th>
          <th className="px-4 py-2">Required</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((question, index) => (
          <tr key={question.id}>
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{question.text}</td>
            <td className="border px-4 py-2">{question.type}</td>
            <td className="border px-4 py-2">
              {question.options.length > 0 && (
                <ul className="list-disc list-inside ml-4">
                  {question.options.map((option, idx) => (
                    <li key={idx}>{option}</li>
                  ))}
                </ul>
              )}
            </td>
            <td className="border px-4 py-2">
            <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={question.required === 'TRUE'}
                onChange={() => handleCheckboxChange(question.id)}
                style={{ "--clr": themeColor }}
              />
            </td>
            <td className="border px-4 py-2">
              <button onClick={() => removeQuestion(question.id)}>
                <Trash2 />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    )
    }
  </div>
  )
}
;

export default QuestionsTable;
