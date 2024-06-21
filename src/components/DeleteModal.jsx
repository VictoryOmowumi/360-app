import React from 'react'
import { toast } from 'react-toastify';
const DeleteModal = ({
    title,
    message,
    onClose,
    theme,
    themeColor,
    handleDelete
}) => {

    const handleDeleteClick = async () => {
        try {
          await handleDelete();
            onClose();
          toast.success('Item deleted successfully');
        } catch (error) {
          toast.error('Failed to delete item');
        }
      };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-4 rounded-md text-neutral-800 w-1/3 text-center"
           
        >
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="text-sm mb-4">{message}</p>
            <div className="flex justify-end gap-4 mt-5">
            <button
                onClick={onClose}
                className="px-4 py-2 text-sm text-white bg-red-500 rounded-md"
            >
                Cancel
            </button>
            <button
                className={`px-4 py-2 text-sm text-white rounded-md`}
                style={{
                backgroundColor: themeColor,
                }}
                onClick={handleDeleteClick}
            >
                Delete
            </button>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal