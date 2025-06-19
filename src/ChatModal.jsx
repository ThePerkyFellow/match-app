import React, { useState } from 'react';

const ChatModal = ({ profile, onClose }) => {
  const [messages, setMessages] = useState([
    {
      text: `Hello! I'm ${profile.name}. How can I help you with FEMA/DTAA matters today?`,
      sender: profile.name,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        text: newMessage,
        sender: 'You',
        timestamp: new Date().toLocaleTimeString()
      }]);
      setNewMessage('');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        width: '90%',
        maxWidth: '500px',
        maxHeight: '70vh',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          padding: '20px',
          backgroundColor: '#3498db',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ margin: '0', fontSize: '18px' }}>💬 {profile.name}</h3>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: '0.9' }}>
              {profile.city}, {profile.state}
            </p>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '5px'
            }}
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div style={{
          padding: '20px',
          height: '300px',
          overflowY: 'auto',
          backgroundColor: '#f8f9fa'
        }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{
              marginBottom: '15px',
              display: 'flex',
              justifyContent: msg.sender === 'You' ? 'flex-end' : 'flex-start'
            }}>
              <div style={{
                maxWidth: '70%',
                padding: '12px 16px',
                borderRadius: '18px',
                backgroundColor: msg.sender === 'You' ? '#3498db' : 'white',
                color: msg.sender === 'You' ? 'white' : '#2c3e50',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <div>{msg.text}</div>
                <div style={{
                  fontSize: '11px',
                  opacity: '0.7',
                  marginTop: '5px'
                }}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div style={{
          padding: '20px',
          borderTop: '1px solid #e1e8ed',
          display: 'flex',
          gap: '10px'
        }}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            style={{
              flex: 1,
              padding: '12px',
              border: '1px solid #e1e8ed',
              borderRadius: '25px',
              outline: 'none',
              fontSize: '14px'
            }}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            style={{
              padding: '12px 20px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
