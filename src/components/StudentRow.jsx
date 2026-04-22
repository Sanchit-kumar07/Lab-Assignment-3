import React, { useState } from 'react';

const StudentRow = ({ student, onUpdateScore }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newScore, setNewScore] = useState(student.score);

  const handleUpdate = () => {
    onUpdateScore(student.id, Number(newScore));
    setIsEditing(false);
  };

  const isPass = student.score >= 40;

  return (
    <tr className="student-row">
      <td className="student-name">{student.name}</td>
      <td className="student-score">
        {isEditing ? (
          <input 
            type="number" 
            value={newScore} 
            onChange={(e) => setNewScore(e.target.value)} 
            className="score-input"
            min="0"
            max="100"
          />
        ) : (
          <span className="score-display">{student.score}</span>
        )}
      </td>
      <td className="student-status">
        <span className={`status-badge ${isPass ? 'pass' : 'fail'}`}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>
      <td className="student-actions">
        {isEditing ? (
          <button className="btn-save" onClick={handleUpdate}>Save</button>
        ) : (
          <button className="btn-edit" onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </td>
    </tr>
  );
};

export default StudentRow;
