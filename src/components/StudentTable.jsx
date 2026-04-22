import React from 'react';
import StudentRow from './StudentRow';
import './StudentTable.css';

const StudentTable = ({ students, onUpdateScore }) => {
  if (students.length === 0) {
    return <div className="empty-state">No students added yet.</div>;
  }

  return (
    <div className="table-container">
      <h2>Student Roster</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow 
              key={student.id} 
              student={student} 
              onUpdateScore={onUpdateScore} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
