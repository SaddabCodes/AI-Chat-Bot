import { useState } from "react";

export default function ChatInput({ onSubmit }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);
      setQuestion("");
    }
  };

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question">Ask a question</label>
          <input
            type="text"
            id="question"
            className="form-control"
            placeholder="Enter your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
