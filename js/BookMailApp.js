import React, { useState } from "react";
import { Inbox } from "./Inbox";
import { Compose } from "./Compose";

// Simple Archive component using Inbox with filter
import { Inbox as ArchiveInbox } from "./Inbox";

export default function BookMailApp({ currentUser }) {
  const [view, setView] = useState("inbox"); // inbox / archive / compose

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif", maxWidth: 600, margin: "0 auto" }}>
      {/* Top navigation */}
      <nav style={{ display: "flex", justifyContent: "space-around", marginBottom: 20 }}>
        <button onClick={() => setView("inbox")} style={{ fontWeight: view === "inbox" ? "bold" : "normal" }}>Inbox</button>
        <button onClick={() => setView("archive")} style={{ fontWeight: view === "archive" ? "bold" : "normal" }}>Archive</button>
        <button onClick={() => setView("compose")} style={{ fontWeight: view === "compose" ? "bold" : "normal" }}>Compose</button>
      </nav>

      {/* Main content */}
      <div>
        {view === "inbox" && <Inbox currentUser={currentUser} />}
        {view === "archive" && <ArchiveInbox currentUser={currentUser} archiveView={true} />}
        {view === "compose" && <Compose currentUser={currentUser} />}
      </div>
    </div>
  );
}
