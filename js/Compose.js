import React, { useState, useEffect } from "react";
import axios from "axios";

// Toast for Undo
function UndoToast({ message, onUndo }) {
  return (
    <div style={{ position: "fixed", bottom: 20, left: 20, background: "#eee", padding: 10 }}>
      {message} <button onClick={onUndo}>Undo</button>
    </div>
  );
}

// Message row in Inbox/Archive
function MessageRow({ msg, onSelect }) {
  return (
    <div onClick={() => onSelect(msg)} style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
      <strong>{msg.senderId}</strong> — {msg.body.slice(0, 50)}...
      {!msg.readAt && <span style={{ marginLeft: 10, color: "blue" }}>●</span>}
      <div style={{ fontSize: 12, color: "#888" }}>{new Date(msg.createdAt).toLocaleString()}</div>
    </div>
  );
}

// Inbox Component
export function Inbox({ currentUser }) {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    axios.get(`/book-mail/inbox/${currentUser}`).then(res => setMessages(res.data));
  }, [currentUser]);

  const archiveMessage = async (stateId) => {
    await axios.post("/book-mail/archive", { messageStateId: stateId });
    setToast({ text: "Archived", stateId });
    setMessages(messages.filter(m => m.stateId !== stateId));
    setTimeout(() => setToast(null), 5000);
  };

  const deleteMessage = async (stateId) => {
    await axios.post("/book-mail/delete", { messageStateId: stateId });
    setToast({ text: "Deleted", stateId });
    setMessages(messages.filter(m => m.stateId !== stateId));
    setTimeout(() => setToast(null), 5000);
  };

  const undo = async () => {
    if (toast) {
      await axios.post("/book-mail/undo", { messageStateId: toast.stateId });
      setToast(null);
      // Reload inbox
      const res = await axios.get(`/book-mail/inbox/${currentUser}`);
      setMessages(res.data);
    }
  };

  if (selected) {
    return (
      <MessageView
        message={selected}
        onBack={() => setSelected(null)}
        onArchive={() => archiveMessage(selected.stateId)}
        onDelete={() => deleteMessage(selected.stateId)}
        currentUser={currentUser}
      />
    );
  }

  return (
    <div>
      <h2>Inbox</h2>
      {messages.map(msg => <MessageRow key={msg.id} msg={msg} onSelect={setSelected} />)}
      {toast && <UndoToast message={toast.text} onUndo={undo} />}
    </div>
  );
}

// MessageView Component
function MessageView({ message, onBack, onArchive, onDelete, currentUser }) {
  const [replyText, setReplyText] = useState("");

  const sendReply = async () => {
    await axios.post("/book-mail/send", {
      senderId: currentUser,
      recipientId: message.senderId,
      body: replyText,
      replyToMessageId: message.id
    });
    setReplyText("");
    alert("Reply sent!");
  };

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h3>From: {message.senderId}</h3>
      <p>{message.body}</p>
      <small>{new Date(message.createdAt).toLocaleString()}</small>
      <div style={{ marginTop: 10 }}>
        <button onClick={onArchive}>Archive</button>
        <button onClick={onDelete}>Delete</button>
      </div>
      <div style={{ marginTop: 20 }}>
        <textarea value={replyText} onChange={e => setReplyText(e.target.value)} placeholder="Reply..." />
        <br />
        <button onClick={sendReply}>Send Reply</button>
      </div>
    </div>
  );
}

// Compose Component (new mail)
export function Compose({ currentUser }) {
  const [recipient, setRecipient] = useState("");
  const [body, setBody] = useState("");

  const sendMail = async () => {
    await axios.post("/book-mail/send", {
      senderId: currentUser,
      recipientId: recipient,
      body
    });
    setRecipient("");
    setBody("");
    alert("Book Mail sent!");
  };

  return (
    <div>
      <h2>Compose Book Mail</h2>
      <input value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="Recipient ID" />
      <br />
      <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Message..." />
      <br />
      <button onClick={sendMail}>Send</button>
    </div>
  );
}
