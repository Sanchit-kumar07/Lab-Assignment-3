import React, { useState } from 'react';
import './AddStudentForm.css';

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || score === '') return;
    
    onAddStudent({
      id: Date.now(),
      name,
      score: Number(score)
    });
    
    setName('');
    setScore('');
  };

  return (
    <div className="form-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="input-group">
          <label htmlFor="name">Student Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="e.g. John Doe"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="score">Score</label>
          <input 
            type="number" 
            id="score" 
            value={score} 
            onChange={(e) => setScore(e.target.value)} 
            placeholder="0 - 100"
            min="0"
            max="100"
            required
          />
        </div>
        <button type="submit" className="btn-add">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
