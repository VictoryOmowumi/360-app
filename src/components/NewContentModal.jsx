import React from "react";

const NewContentModal = ({
  isOpen,
  handleClose,
  title,
  children,
  handleSave,
  loading,
  isEditing,
  handleUpdate,
  application,
  formRef,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <form
          onSubmit={isEditing ? handleUpdate : handleSave}
          ref={formRef}
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {isEditing ? `Edit ${title}` : `Create ${title}`}
                </h3>
                <div className="mt-4 flex flex-col w-full gap-4">
                  {children.map((field, index) => (
                    <div
                      key={index}
                      className="mb-4 w-full grid grid-rows-2
                     gap-1 text-black"
                    >
                      <label className="text-sm">{field.label}</label>
                      {field.type === "select" ? (
                        <select
                          className="border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-100"
                          name={field.name}
                          id={field.name}
                          value={field.value}
                          onChange={field.onChange}
                        >
                          <option value="" className="text-slate-400">
                            --Select--
                          </option>
                          {field.options.map((option, index) => (
                            <option key={index} value={option._id}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          id={field.name}
                          value={field.value}
                          onChange={field.onChange}
                          className="border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-100"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded
            border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white
            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              disabled={loading}
            >
              {loading ? "Loading..." : isEditing ? "Update" : "Save"}
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewContentModal;
