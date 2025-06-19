import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Papa from "papaparse";

// Simple chatbox component for demo
function ChatBox({ profile }) {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");

  const sendMessage = () => {
    if (newMsg.trim()) {
      setMessages([...messages, { sender: "You", text: newMsg }]);
      setNewMsg("");
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, marginTop: 16 }}>
      <h4>Chat with {profile.name}</h4>
      <div style={{ minHeight: 100, marginBottom: 8 }}>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMsg}
        onChange={e => setNewMsg(e.target.value)}
        placeholder="Type your message..."
        style={{ width: "70%" }}
      />
      <button onClick={sendMessage} style={{ width: "28%", marginLeft: "2%" }}>
        Send
      </button>
    </div>
  );
}

function ChatPage() {
  const { type, index } = useParams();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const file = type === "ca" ? "/ca_standardized.csv" : "/cpa_standardized.csv";
    fetch(file)
      .then(res => res.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: results => {
            setProfile(results.data[Number(index)]);
          }
        });
      });
  }, [type, index]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div style={{ padding: 24 }}>
      <button 
        onClick={() => navigate('/')}
        style={{ marginBottom: 16, padding: '8px 16px' }}
      >
        ← Back to List
      </button>
      <h2>Chat Page</h2>
      <div>
        <strong>Name:</strong> {profile.name} <br />
        <strong>City:</strong> {profile.city} <br />
        <strong>State:</strong> {profile.state} <br />
        <strong>Services:</strong> {profile.services_offered} <br />
        <a href={profile.profile_url} target="_blank" rel="noopener noreferrer">View Profile</a>
      </div>
      <ChatBox profile={profile} />
    </div>
  );
}

export default ChatPage;
