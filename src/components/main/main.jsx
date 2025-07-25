import React, { useState } from "react";
import search from "../../assets/search.png"; 
import "./main.css";

const sampleQuestions = [
  {
    question: "What is the primary purpose of React in web development,andhow dose it contribute to building dynamic and interctive user interface?",
    answer: "React is primarily used for building user interfaces,allowing developers to create reuseable UI components and manage the state of applications efficiently.",
  },
  {
    question: "What is the result of 5 + 3?",
    answer: "8",
  },
  {
    question: "Is React a JavaScript library?",
    answer: "Yes, React is a JavaScript library for building user interfaces.",
  },
  {
    question: "Explain the concept of JSX in React?",
    answer: "JSX is a syntax extension for JavaScript that looks similar to HTML. It allows developers to write HTML-like code within JavaScript, making it easier to create React components",
  },
  {
    question: "whate is capital of France?",
    answer: "Paris",
  },
  {
    question: "Define newtons's second law of motion?",
    answer: "Newton's second law states that the  Force = mass x acceleration(F=M*A). "
  },
  {
    question: "what is the square root of 144?",
    answer: "12",
  },
  {
    question: " whate dose HTML stand for?",
    answer: "HTML stands for HyperText Markup Language, which is the standard markup language for creating web pages.",
  },
  {
    question: "who developed the python programming language?",
    answer: " guido van rossum",
},
{
    question: "what is the chemical symbol for gold?",
    answer: "Au",
},
{
    question: "solve:15*6",
    answer: "90",
},
{
    question: "Explain the concepts of object oriented programming",
    answer: "Object-oriented programming (OOP) is a programming paradigm based on the concept of 'objects', which can contain data and code.",
},
{
    question: " what is the function of RAM in a computer?",
    answer: "RAM (Random Access Memory) is used to store and access  data that is actively being  used by the system,making operation faster.",
},
{
    question: " which planet is known as the Red Planet?",
    answer: "Mars",

},
{
    question: "calculate the area of a circle with length 10cm and width 5cm?",
    answer: "50 cm²",
},
{
    question: "what is tha algorithm?",
    answer: "An algorithm is a step-by-step procedure or formula for solving a problem.", 
},
{
  question: "What is the json format?",
  answer: "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.",
}, 
{
   question: "explain the concept of recursion in programming?",
   answer: "Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller subproblems.", 
},
];

function Main() {
  const [filter, setFilter] = useState("");
  const [fullView, setFullView] = useState(false);
  const [viewOptions, setViewOptions] = useState({
    Questions: true,
    Owner: false,
    Type: false,
    Marks: false,
    Actions: false,
  });
  const [viewDropdownOpen, setViewDropdownOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  const toggleOption = (key) => {
    setViewOptions({ ...viewOptions, [key]: !viewOptions[key] });
  };
  const filteredQuestions = sampleQuestions.filter((q) =>
    q.question.toLowerCase().includes(filter.toLowerCase())
  );

  const handleLoadMore = () => {
    setVisibleCount(filteredQuestions.length);
  };

  // Determine which columns to show
  const activeColumns = Object.keys(viewOptions).filter((key) => viewOptions[key]);

  return (
    <div style={{ padding: "20px" }}>
      {/* Header Controls: Test Question, Expand, and View on the same line */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "15px" }}>
        <h2 style={{ margin: 0, cursor: 'pointer' }} onClick={() => setFullView(false)}>Test Question</h2>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button onClick={() => setFullView(!fullView)} style={{ padding: "6px 10px", borderRadius: "10px" }}>
            {fullView ? "Full View" : "Expand "}
          </button>
          {/* view button dropdown */}
          <div style={{ position: "relative" }}>
            <button style={{ padding: "6px 10px", borderRadius: "10px" }} onClick={() => setViewDropdownOpen((open) => !open)}>
              View
            </button>
            {viewDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  right: 0,
                  minWidth: "200px",
                  background: "#fff",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  padding: "16px 20px",
                  borderRadius: "10px",
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  alignItems: "flex-start"
                }}
              >
                {/* Block of all view options */}
                {Object.keys(viewOptions).map((key) => (
                  <div key={key} style={{ display: "flex", alignItems: "center", gap: "10px", background: "#f1f5fa", borderRadius: "8px", padding: "8px 14px", width: "100%" }}>
                    <input
                      type="checkbox"
                      checked={viewOptions[key]}
                      onChange={() => toggleOption(key)}
                    />
                    <span style={{ fontSize: "15px", fontWeight: 500 }}>{key}</span>
                  </div>
                ))}
                <button
                  style={{
                    marginTop: "10px",
                    padding: "6px 16px",
                    background: "#2563eb",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    alignSelf: "flex-end"
                  }}
                  onClick={() => setViewDropdownOpen(false)}
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* search bar */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", alignItems: "center" }}>
        <div style={{ position: "relative", width: "85%" }}>
          <input
            type="text"
            placeholder="Search"
            style={{ padding: "5px 5px 5px 32px", width: "110%" }}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <img src={search} alt="search" style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", width: "18px", height: "18px", pointerEvents: "none" }} />
        </div>
      </div>

      {/* Question List or Table */}
      {activeColumns.length > 1 ? (
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ minWidth: '700px', width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr>
                <th style={{ padding: "8px", borderBottom: "2px solid #2563eb" }}></th>
                {activeColumns.map((col) => (
                  <th key={col} style={{ padding: "8px", borderBottom: "2px solid #2563eb", textAlign: "left" }}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredQuestions.slice(0, visibleCount).map((q, index) => {
                let type = "Theory";
                const questionText = q.question.toLowerCase();
                if (questionText.includes("mcq")) type = "MCQ";
                else if (questionText.match(/\b\d+\s*[+\-*/]\s*\d+/) || questionText.includes("calculate") || questionText.includes("solve") || questionText.includes("square root")) type = "Numerical";

                // Make all cells clickable to expand/collapse
                const handleRowClick = () => setExpandedIndex(expandedIndex === index ? null : index);

                return (
                  <React.Fragment key={index}>
                    <tr style={{ background: index % 2 === 0 ? "#f9f9f9" : "#fff" }} onClick={handleRowClick}>
                      <td style={{ padding: "8px" }}>
                        <input
                          type="checkbox"
                          checked={selectedQuestions.includes(index)}
                          onClick={e => {
                            e.stopPropagation();
                            setSelectedQuestions(selectedQuestions.includes(index)
                              ? selectedQuestions.filter(i => i !== index)
                              : [...selectedQuestions, index]);
                          }}
                        />
                      </td>
                      {activeColumns.map((col) => (
                        <td key={col} style={{ padding: "8px", cursor: "pointer" }}>
                          {col === "Questions" && <strong style={{ color: "#2563eb" }}>{q.question}</strong>}
                          {col === "Owner" && <span>Admin</span>}
                          {col === "Type" && <span>{type}</span>}
                          {col === "Marks" && <span>{type === "Theory" ? 2 : type === "Numerical" ? 1 : "-"}</span>}
                          {col === "Actions" && (
                            <span style={{ fontSize: "18px", display: "flex", gap: "10px" }}>
                              <span title="Delete" style={{ cursor: "pointer" }}>🗑️</span>
                              <span title="Copy" style={{ cursor: "pointer" }}>📋</span>
                              <span title="Rewrite" style={{ cursor: "pointer" }}>✏️</span>
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                    {(fullView || expandedIndex === index) && (
                      <tr>
                        <td colSpan={activeColumns.length + 1} style={{ background: "#eef2ff", padding: "10px 16px", color: "#444" }}>
                          {q.answer}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {filteredQuestions.slice(0, visibleCount).map((q, index) => (
            <li
              key={index}
              style={{
                margin: "15px 0",
                padding: "10px",
                background: "#f9f9f9",
                borderRadius: "5px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center"
              }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <input
                type="checkbox"
                checked={selectedQuestions.includes(index)}
                onClick={e => {
                  e.stopPropagation();
                  setSelectedQuestions(selectedQuestions.includes(index)
                    ? selectedQuestions.filter(i => i !== index)
                    : [...selectedQuestions, index]);
                }}
                style={{ marginRight: "12px" }}
              />
              <div style={{ flex: 1 }}>
                <strong style={{ color: "#2563eb" }}>{q.question}</strong>
                {(fullView || expandedIndex === index) && (
                  <p style={{ marginTop: "5px" }}>{q.answer}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
      {/* Centered Load More and Show Less buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {visibleCount < filteredQuestions.length && (
            <button
              style={{
                marginTop: "16px",
                padding: "8px 24px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
          {visibleCount > 10 && (
            <button
              style={{
                marginTop: "16px",
                padding: "8px 24px",
                background: "#e53e3e",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
              onClick={() => setVisibleCount(10)}
            >
              Show Less
            </button>
          )}
        </div>
        <div style={{ marginTop: '8px', color: '#444', fontWeight: 'bold' }}>
          Showing {Math.min(visibleCount, filteredQuestions.length)} out of {filteredQuestions.length}
        </div>
      </div>
    </div>
  );
}

export default Main;


