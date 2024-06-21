import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const CreateQuestionnaireContext = createContext();

export const CreateQuestionnaireProvider = ({ children }) => {
  const { register, handleSubmit, setValue, getValues, watch, control, formState: { errors }, trigger } = useForm();
  
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [optionText, setOptionText] = useState('');
  const [options, setOptions] = useState([]);
  
  const addOption = () => {
    setOptions([...options, optionText]);
    setOptionText('');
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: uuidv4(),
        text: questionText,
        type: questionType,
        options: options,
        required: false,
      },
    ]);
    setQuestionText('');
    setQuestionType('');
    setOptions([]);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter(question => question.id !== id));
  };


  const handleCheckboxChange = (id) => {
    setQuestions(questions.map(question =>
      question.id === id ? { ...question, required: !question.required } : question
    ));
    console.log(questions);
  };

  const onSubmit = (data) => {
    const { questionType, ...filteredData } = data; 

    const finalData = {
      ...filteredData,
      questions: questions,
    };
    console.log(finalData);
    // Add your axios or other submission logic here
  };

  return (
    <CreateQuestionnaireContext.Provider value={{
      register,
      handleSubmit,
      setValue,
      getValues,
      watch,
      control,
      errors,
      trigger,
      onSubmit,
      questions,
        setQuestions,
      questionText,
      setQuestionText,
      questionType,
      setQuestionType,
      optionText,
      setOptionText,
      options,
      setOptions,
      addOption,
      removeOption,
      addQuestion,
      handleCheckboxChange,
        removeQuestion,
    }}>
      {children}
    </CreateQuestionnaireContext.Provider>
  );
};

export default CreateQuestionnaireContext;
