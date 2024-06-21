import React, { useContext } from 'react';
import { Controller} from 'react-hook-form';
import FormField from './FormField';
import FileUpload from './FileUpload';
import QuestionForm from './QuestionForm';
import QuestionsTable from './QuestionTable';
import { MenuItem } from '@mui/material';
import {Select} from '@mui/material'
import CreateQuestionnaireContext from '../context/CreateQuestionnaireContext';
import ThemeContext from '../context/ThemeContext';
import useFetch from '../hooks/useFetch';
import baseUrl from '../baseUrl';
const CreateQuestionnaireForm = () => {

  const {
    register,
    handleSubmit,
    control,
    errors,
    onSubmit,
    questions,
    questionText,
    setQuestionText,
    questionType,
    setQuestionType,
    optionText,
    setOptionText,
    options,
    addOption,
    removeOption,
    addQuestion,
    handleCheckboxChange,
    removeQuestion,
    setQuestions,
  } = useContext(CreateQuestionnaireContext);
 
  const { data, error } = useFetch(`${baseUrl}CyclesAndRoles/api/CyclesAndRoles/GetQuestionnaireTypes`);

  const { theme, themeColor } = useContext(ThemeContext);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ color: theme === "dark" ? "#f5f5f5" : "#444" }}>
      <FormField
        label="Title"
        register={register}
        name="title"
        errors={errors}
        theme={theme}
        themeColor={themeColor}
      />
      <FormField
        label="Description"
        register={register}
        name="description"
        errors={errors }
        theme={theme}
        themeColor={themeColor}
      />
      <div className="mb-4">
        <label className="block text-sm mb-1 ml-2">Type</label>
        <Controller
          name="type"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              fullWidth
              error={!!errors.type || error}
              style={{
                "--tw-ring-color": themeColor,
                borderColor: errors.title ? themeColor : "",
                border: theme === "dark" ? "2px solid #a1a1a1" : "2px solid #f3f4f6",
                borderRadius: "0.375rem",
              }}
            >
              <MenuItem value="">Select Type</MenuItem>
              {data &&
                data.map((type) => (
                  <MenuItem key={type.code} value={type.code}>
                    {type.description}
                  </MenuItem>
                ))}
            </Select>
          )}
        />
        {errors.type && <span className="text-red-500">Type is required</span>}
      </div>
      <FileUpload setQuestions={setQuestions} theme={theme} themeColor={themeColor} />
      <QuestionForm
        questionText={questionText}
        setQuestionText={setQuestionText}
        questionType={questionType}
        setQuestionType={setQuestionType}
        optionText={optionText}
        setOptionText={setOptionText}
        options={options}
        addOption={addOption}
        removeOption={removeOption}
        addQuestion={addQuestion}
        control={control}
        errors={errors}
        theme={theme}
        themeColor={themeColor}
      
      />
      {questions.length > 0 && (
        <QuestionsTable
          questions={questions}
          removeQuestion={removeQuestion}
          handleCheckboxChange={handleCheckboxChange}
          theme={theme}

        />
      )}
      <div className="flex justify-end mt-5">
        <button
          type="submit"
          variant="contained"
          color="primary"
          className="mr-2 w-[150px] h-auto text-white px-3 py-3 rounded"
          style={{ backgroundColor: themeColor }}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateQuestionnaireForm;
