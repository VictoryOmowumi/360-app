import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import CreateQuestionnaireContext from "../context/CreateQuestionnaireContext";
import { v4 as uuidv4 } from "uuid";
import CreateQuestionnaireForm from "./CreateQuestionnaireForm";
import Papa from "papaparse";
const CreateQuestionnaire = () => {
  const { theme, themeColor } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    errors,
    onSubmit,
  } = useContext(CreateQuestionnaireContext);

  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [optionText, setOptionText] = useState("");
  const [options, setOptions] = useState([]);
 
 
  const addQuestion = () => {
    let newQuestion = {
      id: uuidv4(),
      text: questionText,
      ...(questionType && { type: questionType }), // Only include type if it's defined
    };

    if (questionType === "Multiple Choice" || questionType === "Checkbox") {
      newQuestion.options = options;
    } else if (questionType === "Rating") {
      newQuestion.options = ["1 - Very Bad", "2 - Bad", "3 - Neutral", "4 - Good", "5 - Very Good"];
    }
    setQuestions([...questions, newQuestion]);
    setQuestionText("");
    setQuestionType("");
    setOptions([]);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const addOption = () => {
    setOptions([...options, optionText]);
    setOptionText("");
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        const parsedData = result.data;
        console.log(parsedData);
        if (!parsedData || parsedData.length === 0) {
          console.error("No data found in the uploaded file.");
          return;
        }
  
        const headers = parsedData[0];
        if (!Array.isArray(headers)) {
          console.error("Header row is missing or invalid in the uploaded file.");
          return;
        }
  
        const questionsData = parsedData.slice(1);
        console.log(questionsData);
        const newQuestions = questionsData.map((row) => {
          const question = {
            id: uuidv4(),
            text: row[headers.indexOf("text")],
            type: row[headers.indexOf("type")],
            options: row[headers.indexOf("options")].split(',').map(option => option.trim())
          };
  
          console.log(newQuestions);
          if (question.type === "Rating") {
            question.options = ["1 - Very Bad", "2 - Bad", "3 - Neutral", "4 - Good", "5 - Very Good"];
          }
  
          return question;
        });
  
        setQuestions(newQuestions);
      },
      error: (error) => {
        console.error("An error occurred while parsing the file:", error);
      },
      header: true,
    });
  };
  

  const onSubmitForm = (data) => {
    const formData = {
      ...data,
      questions,
    };
    onSubmit(formData);
  };

  return (
    <div
      className="h-full p-4"
      style={{
        color: theme === "light" ? themeColor : "#EEEFFF",
        backgroundColor: theme === "dark" ? "#1b1c1f" : "#F3F4F6",
      }}
    >
      <h1
        className="text-3xl mb-4"
        style={{
          color: theme === "dark" ? "#EEEFFF" : "#444",
        }}
      >
        Create Questionnaire
      </h1>
      <CreateQuestionnaireForm
        themeColor={themeColor}
        register={register}
        handleSubmit={handleSubmit}
        setValue={setValue}
        getValues={getValues}
        control={control}
        errors={errors}
        onSubmit={onSubmitForm}
        handleFileUpload={handleFileUpload}
        questions={questions}
        questionText={questionText}
        setQuestionText={setQuestionText}
        questionType={questionType}
        setQuestionType={setQuestionType}
        optionText={optionText}
        setOptionText={setOptionText}
        options={options}
        setOptions={setOptions}
        addOption={addOption}
        addQuestion={addQuestion}
        removeOption={removeOption}
        removeQuestion={removeQuestion}
        setQuestions={setQuestions}
        theme={theme}
      />
    </div>
  );
};

export default CreateQuestionnaire;
