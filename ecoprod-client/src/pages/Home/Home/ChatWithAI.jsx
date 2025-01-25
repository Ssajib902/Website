import React, { useState } from "react";

const ChatWithAI = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chatbox
  const [messages, setMessages] = useState([
    { question: "What are the delivery charges?", answer: "Delivery charges vary depending on your location and the product weight.", isAnswerVisible: false },
    { question: "How can I track my order?", answer: "You can track your order through the 'My Orders' section in your account.", isAnswerVisible: false },
    { question: "What is your return policy?", answer: "You can return products within 7 days of delivery if they are in original condition.", isAnswerVisible: false },
  ]);

  // Toggle chatbox visibility
  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  // Toggle visibility of the answer when the question is clicked
  const handleToggleAnswer = (index) => {
    // When a new question is clicked, hide the previous answer
    const updatedMessages = messages.map((msg, i) => ({
      ...msg,
      isAnswerVisible: i === index ? !msg.isAnswerVisible : false, // Toggle the clicked one, hide the others
    }));
    setMessages(updatedMessages);
  };

  return (
    <>
      {/* Floating SMS Button */}
      <div
        className="fixed bottom-20 right-4 text-white bg-black transform text-center cursor-pointer z-50 border rounded-full p-4"
        onClick={handleToggleChat}
      >
        <h3>SMS</h3>
      </div>

      {/* Chatbox */}
      {isChatOpen && (
        <div className="fixed bottom-28 right-4 w-80 bg-white shadow-lg border rounded-lg z-50">
          <div className="bg-black text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-bold">Chat with AI</h3>
            <button
              className="text-sm bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              onClick={handleToggleChat}
            >
              Close
            </button>
          </div>
          <div className="p-4 max-h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="mb-4">
                <p
                  className="font-semibold text-red-600 cursor-pointer"
                  onClick={() => handleToggleAnswer(index)} // Handle click to toggle answer visibility
                >
                  Q: {msg.question}
                </p>
                {/* Show answer if isAnswerVisible is true */}
                {msg.isAnswerVisible && <p className="text-gray-600">A: {msg.answer}</p>}
              </div>
            ))}
          </div>
          {/* <div className="p-3 bg-gray-100 rounded-b-lg">
            <p className="text-sm text-gray-500">Type your query to know more.</p>
          </div> */}
        </div>
      )}
    </>
  );
};

export default ChatWithAI;
