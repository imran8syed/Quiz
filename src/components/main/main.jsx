import React, { useState } from "react";
import search from "../../assets/search.png"; 

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

  const toggleOption = (key) => {
    setViewOptions({ ...viewOptions, [key]: !viewOptions[key] });
  };
  const filteredQuestions = sampleQuestions.filter((q) =>
    q.question.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      {/* Header Controls */}
      <h2>Test Question</h2>

      {/* search bar */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", alignItems: "center" }}>
        <div style={{ position: "relative", width: "85%" }}>
          <input
            type="text"
            placeholder="Search"
            style={{ padding: "5px 5px 5px 32px", width: "100%" }}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <img src={search} alt="search" style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", width: "18px", height: "18px", pointerEvents: "none" }} />
        </div>

        {/* expand it */}

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button onClick={() => setFullView(!fullView)} style={{ padding: "6px 10px" }}>
            {fullView ? "Full View" : "Expand "}
          </button>

          {/* view button dropdown */}
          <div style={{ position: "relative" }}>
            <button style={{ padding: "6px 10px" }} onClick={() => setViewDropdownOpen((open) => !open)}>
              View
            </button>
            {viewDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  right: 0,
                  minWidth: "160px",
                  background: "#fff",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "flex-start"
                }}
              >
                {Object.keys(viewOptions).map((key) => (
                  <label key={key} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px" }}>
                    <input
                      type="checkbox"
                      checked={viewOptions[key]}
                      onChange={() => toggleOption(key)}
                    />
                    {key}
                  </label>
                ))}
                <button
                  style={{
                    marginTop: "10px",
                    padding: "6px 16px",
                    background: "#2563eb",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
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

      {/* Question List */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredQuestions.map((q, index) => (
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
              <strong>{q.question}</strong>
              {(fullView || expandedIndex === index) && (
                <p style={{ marginTop: "5px" }}>{q.answer}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;


