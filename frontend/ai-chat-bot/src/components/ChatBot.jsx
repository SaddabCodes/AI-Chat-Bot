import "bootstrap/dist/css/bootstrap.min.css";
import ChatInput from "./ChatInput";
import ChatResponse from "./ChatResponse";
import { useState } from "react";
import { FetchChatResponse } from "../services/FetchChatResponse";

export default function ChatBot() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);

    try {
      const apiResponse = await FetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("Failed to get response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="bg-primary text-white text-center py-4">
        <h1>Chat Bot</h1>
      </header>
      <ChatInput onSubmit={handleQuestionSubmit} />
      {loading ? <p>Loading...</p> : <ChatResponse response={response} />}
    </div>
  );
}
