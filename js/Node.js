import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

// Mock DB (for demo purposes)
let messages = [];
let messageStates = [];

// Mock follower check
function canSendMail(senderId, recipientId) {
    // Replace with real follower check
    return true; // For demo, everyone can send
}

// --- Send or Reply Book Mail ---
app.post("/book-mail/send", (req, res) => {
    const { senderId, recipientId, body, replyToMessageId } = req.body;

    if (!canSendMail(senderId, recipientId)) {
        return res.status(403).json({ error: "You cannot send mail to this user." });
    }

    const messageId = uuidv4();
    const message = {
        id: messageId,
        senderId,
        recipientId,
        body,
        createdAt: new Date(),
        replyToMessageId: replyToMessageId || null,
    };
    messages.push(message);

    // Create per-user state
    messageStates.push({ id: uuidv4(), messageId, userId: senderId, archived: false, deleted: false, readAt: null, pendingUndoUntil: null });
    messageStates.push({ id: uuidv4(), messageId, userId: recipientId, archived: false, deleted: false, readAt: null, pendingUndoUntil: null });

    res.json({ success: true, message });
});

// --- Get Inbox ---
app.get("/book-mail/inbox/:userId", (req, res) => {
    const userId = req.params.userId;
    const inbox = messageStates
        .filter(ms => ms.userId === userId && !ms.deleted && !ms.archived)
        .map(ms => {
            const msg = messages.find(m => m.id === ms.messageId);
            return { ...msg, readAt: ms.readAt, stateId: ms.id };
        });
    res.json(inbox);
});

// --- Get Archive ---
app.get("/book-mail/archive/:userId", (req, res) => {
    const userId = req.params.userId;
    const archive = messageStates
        .filter(ms => ms.userId === userId && !ms.deleted && ms.archived)
        .map(ms => {
            const msg = messages.find(m => m.id === ms.messageId);
            return { ...msg, readAt: ms.readAt, stateId: ms.id };
        });
    res.json(archive);
});

// --- Mark as Read ---
app.post("/book-mail/read", (req, res) => {
    const { messageStateId } = req.body;
    const state = messageStates.find(ms => ms.id === messageStateId);
    if (state) state.readAt = new Date();
    res.json({ success: true });
});

// --- Archive ---
app.post("/book-mail/archive", (req, res) => {
    const { messageStateId } = req.body;
    const state = messageStates.find(ms => ms.id === messageStateId);
    if (state) {
        state.archived = true;
        state.pendingUndoUntil = new Date(Date.now() + 5000); // 5s undo
    }
    res.json({ success: true });
});

// --- Delete ---
app.post("/book-mail/delete", (req, res) => {
    const { messageStateId } = req.body;
    const state = messageStates.find(ms => ms.id === messageStateId);
    if (state) {
        state.deleted = true;
        state.pendingUndoUntil = new Date(Date.now() + 5000); // 5s undo
    }
    res.json({ success: true });
});

// --- Undo ---
app.post("/book-mail/undo", (req, res) => {
    const { messageStateId } = req.body;
    const state = messageStates.find(ms => ms.id === messageStateId);

    if (!state) return res.status(404).json({ error: "State not found" });

    const now = new Date();
    if (state.pendingUndoUntil && now <= state.pendingUndoUntil) {
        state.deleted = false;
        state.archived = false;
        state.pendingUndoUntil = null;
        return res.json({ success: true, message: "Action undone" });
    } else {
        return res.status(400).json({ error: "Undo window expired" });
    }
});

// --- Start Server ---
app.listen(3000, () => console.log("Book Mail API running on port 3000"));
