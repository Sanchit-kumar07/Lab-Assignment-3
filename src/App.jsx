import React, { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import ScoreboardStats from './components/ScoreboardStats';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Rahul Sharma', score: 78 },
    { id: 2, name: 'Priya Patel', score: 45 }
  ]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, score: newScore } : student
    ));
  };

  return (
    <div className="app-container">
      <div className="glass-panel">
        <Header />
        <ScoreboardStats students={students} />
        <main className="main-content">
          <div className="left-panel">
            <AddStudentForm onAddStudent={addStudent} />
          </div>
          <div className="right-panel">
            <StudentTable students={students} onUpdateScore={updateScore} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
