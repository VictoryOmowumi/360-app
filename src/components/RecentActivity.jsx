import React from 'react';

const recentActivities = [
  // Example data
  { id: 1, type: "Assessment", title: "Mid-Year Review", status: "Completed", date: "2024-06-15" },
  { id: 2, type: "Survey", title: "Employee Engagement Survey", status: "Completed", date: "2024-05-30" },
  { id: 3, type: "Assessment", title: "Annual Performance Review", status: "In Progress", date: "2024-05-01" },
];

const RecentActivity = () => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <h2 className='text-2xl font-bold mb-2'>Recent Activity</h2>
      {recentActivities.length > 0 ? (
        <ul className='space-y-2'>
          {recentActivities.map((activity) => (
            <li key={activity.id} className='flex justify-between items-center p-2 border-b'>
              <div>
                <h3 className='text-lg font-semibold'>{activity.title}</h3>
                <p className='text-sm text-gray-500'>{activity.type} - {activity.date}</p>
              </div>
              <span className={`text-sm ${activity.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                {activity.status}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-sm text-gray-500'>No recent activities.</p>
      )}
    </div>
  );
};

export default RecentActivity;
