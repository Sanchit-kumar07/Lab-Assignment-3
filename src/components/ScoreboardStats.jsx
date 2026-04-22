import React from 'react';
import './ScoreboardStats.css';

const ScoreboardStats = ({ students }) => {
  const totalStudents = students.length;
  const totalPassed = students.filter(s => s.score >= 40).length;
  const totalFailed = totalStudents - totalPassed;
  const avgScore = totalStudents > 0
    ? (students.reduce((sum, s) => sum + s.score, 0) / totalStudents).toFixed(1)
    : 0;
  const highestScore = totalStudents > 0
    ? Math.max(...students.map(s => s.score))
    : 0;

  return (
    <div className="stats-container">
      <h2>Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total Students</span>
          <span className="stat-value">{totalStudents}</span>
        </div>
        <div className="stat-card stat-pass">
          <span className="stat-label">Passed</span>
          <span className="stat-value">{totalPassed}</span>
        </div>
        <div className="stat-card stat-fail">
          <span className="stat-label">Failed</span>
          <span className="stat-value">{totalFailed}</span>
        </div>
        <div className="stat-card stat-avg">
          <span className="stat-label">Avg Score</span>
          <span className="stat-value">{avgScore}</span>
        </div>
        <div className="stat-card stat-high">
          <span className="stat-label">Highest</span>
          <span className="stat-value">{highestScore}</span>
        </div>
      </div>
      {totalStudents > 0 && (
        <div className="pass-bar-container">
          <div className="pass-bar-label">
            <span>Pass Rate</span>
            <span className="pass-rate-value">{((totalPassed / totalStudents) * 100).toFixed(0)}%</span>
          </div>
          <div className="pass-bar-track">
            <div
              className="pass-bar-fill"
              style={{ width: `${(totalPassed / totalStudents) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreboardStats;
