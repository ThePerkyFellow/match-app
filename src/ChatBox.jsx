import React, { useState } from 'react';

function ChatBox() {
  const [messages, setMessages] = useState([
    { sender: 'CA Anil Kumar', text: 'Hello, how can I help with your FEMA query?' },
    { sender: 'CPA John Smith', text: 'Hi! I need help with Form 15CA/CB for a US client.' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [currentSender, setCurrentSender] = useState('CA Anil Kumar'); // Toggle between users

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { sender: currentSender, text: newMessage }]);
    setNewMessage('');
    // Toggle sender for demo
    setCurrentSender(currentSender === 'CA Anil Kumar' ? 'CPA John Smith' : 'CA Anil Kumar');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, margin: 16, maxWidth: 400 }}>
      <h3>Chat between CA and CPA</h3>
      <div style={{ minHeight: 100, marginBottom: 8 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ margin: '4px 0' }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ width: '70%' }}
      />
      <button onClick={handleSend} style={{ width: '28%', marginLeft: '2%' }}>Send</button>
    </div>
  );
}

export default ChatBox;
