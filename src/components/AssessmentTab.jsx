import React from 'react';

const AssessmentTab = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === 'All' ? 'active' : ''}`}
        onClick={() => setActiveTab('All')}
      >
        All
      </button>
      <button
        className={`tab ${activeTab === 'active' ? 'active' : ''}`}
        onClick={() => setActiveTab('active')}
      >
        Active
      </button>
    </div>
  );
};

export default AssessmentTab;
