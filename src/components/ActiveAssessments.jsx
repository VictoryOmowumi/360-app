import React from 'react';

const activeAssessments = [
  // Example data
  { id: 1, title: "Mid-Year Review", status: "In Progress", dueDate: "2024-06-30" },
  { id: 2, title: "Annual Performance Review", status: "In Progress", dueDate: "2024-12-31" },
  {id: 3, title: "Transformation Survey", status: "In Progress", dueDate: "2024-12-31" },
];

const ActiveAssessments = () => {
  return (
    <div className='w-full flex flex-col gap-4  '>
      <h2 className='text-2xl font-bold mb-2'>Active Assessments</h2>
      {activeAssessments.length > 0 ? (
        <ul className='space-y-2'>
          {activeAssessments.map((assessment) => (
            <li key={assessment.id} className='flex justify-between items-center p-2 border-b'>
              <div>
                <h3 className='text-lg font-semibold'>{assessment.title}</h3>
                <p className='text-sm text-gray-500'>Due: {assessment.dueDate}</p>
              </div>
              <span className='text-sm text-green-600'>{assessment.status}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-sm text-gray-500'>No active assessments.</p>
      )}
    </div>
  );
};

export default ActiveAssessments;
