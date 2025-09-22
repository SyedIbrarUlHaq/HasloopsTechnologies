// src/hooks/useNotifications.js

// import { useEffect, useState } from "react";
// import {
//   getNotifications,
//   addNotificationApi,
//   updateNotificationApi,
//   // deleteNotificationApi,  // 
// } from "../services/notification";

// function useNotifications() {
//   const [notifications, setNotifications] = useState([]);
//   const [newNote, setNewNote] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState("");
//   const [, setTick] = useState(0); // re-render trigger

//   // Helper: format time ago
//   const formatTimeAgo = (timestamp) => {
//     const diff = Math.floor((Date.now() - timestamp) / 1000);
//     if (diff < 60) return "Just now";
//     if (diff < 3600)
//       return `${Math.floor(diff / 60)} min${diff >= 120 ? "s" : ""} ago`;
//     if (diff < 86400)
//       return `${Math.floor(diff / 3600)} hr${diff >= 7200 ? "s" : ""} ago`;
//     return `${Math.floor(diff / 86400)} day${
//       diff >= 172800 ? "s" : ""
//     } ago`;
//   };

//   // ====== READ ======
//   useEffect(() => {
//     getNotifications()
//       .then((res) => {
//         // res ab sirf array hai (request.js ne already .data return kiya)
//         setNotifications(
//           res.map((n) => ({
//             ...n,
//             createdAt: Date.now(),
//           }))
//         );
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // Re-render every 60 sec for time update
//   useEffect(() => {
//     const interval = setInterval(() => setTick((t) => t + 1), 60000);
//     return () => clearInterval(interval);
//   }, []);

//   // ====== CREATE ======
//   const addNotification = () => {
//     if (!newNote.trim()) return;

//     addNotificationApi({
//       title: newNote,
//       body: "New notification",
//     }).then((res) => {
//       // JSONPlaceholder ka res ek object return karega (id hoti hai)
//       setNotifications([
//         { ...res, id: Date.now(), createdAt: Date.now() }, // local fake id
//         ...notifications,
//       ]);
//       setNewNote("");
//     });
//   };

//   // ====== UPDATE ======
//   const updateNotification = (id) => {
//     if (!newNote.trim()) return;

//     setNotifications(
//       notifications.map((n) =>
//         n.id === id
//           ? {
//               ...n,
//               title: newNote,
//               body: "Updated notification",
//               createdAt: Date.now(),
//             }
//           : n
//       )
//     );

//     updateNotificationApi(id, {
//       title: newNote,
//       body: "Updated notification",
//     })
//       .then(() => {
//         setEditId(null);
//         setNewNote("");
//       })
//       .catch((err) => console.error(err));
//   };

//   // ====== DELETE (local only) ======
//   const deleteNotification = (id) => {
//     
//     setNotifications(notifications.filter((n) => n.id !== id));
//   };

//   const handleEdit = (note) => {
//     setEditId(note.id);
//     setEditText(note.title);
//     setNewNote(note.title);
//   };

//   return {
//     notifications,
//     newNote,
//     editId,
//     editText,
//     setNewNote,
//     setEditId,
//     setEditText,
//     formatTimeAgo,
//     addNotification,
//     updateNotification,
//     deleteNotification,
//     handleEdit,
//   };
// }

// export default useNotifications;
















// src/hooks/useNotifications.ts
import { useEffect, useState } from "react";
import {
  getNotifications,
  addNotificationApi,
  updateNotificationApi,
} from "../services/notification";
import { Notification } from "../types";

function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [newNote, setNewNote] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");
  const [, setTick] = useState<number>(0); // re-render trigger for time strings

  // Helper: format time ago
  const formatTimeAgo = (timestamp: number): string => {
    const diff = Math.floor((Date.now() - timestamp) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} min${diff >= 120 ? "s" : ""} ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hr${diff >= 7200 ? "s" : ""} ago`;
    return `${Math.floor(diff / 86400)} day${diff >= 172800 ? "s" : ""} ago`;
  };

  // ====== READ ======
  useEffect(() => {
    getNotifications()
      .then((res: any) => {
        // API response can be any for now — normalise to our Notification type
        const normalized: Notification[] = (res || []).map((n: any) => ({
          id: n.id ?? Date.now(),
          title: n.title ?? "",
          body: n.body ?? "",
          createdAt: Date.now(),
        }));
        setNotifications(normalized);
      })
      .catch((err: any) => console.error(err));
  }, []);

  // Re-render every 60 sec for time update
  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  // ====== CREATE ======
  const addNotification = (): void => {
    if (!newNote.trim()) return;

    addNotificationApi({
      title: newNote,
      body: "New notification",
    })
      .then((res: any) => {
        // Use functional update to avoid stale closures
        setNotifications((prev) => [
          {
            id: Date.now(), // local fake id
            title: res?.title ?? newNote,
            body: res?.body ?? "New notification",
            createdAt: Date.now(),
          },
          ...prev,
        ]);
        setNewNote("");
      })
      .catch((err: any) => console.error(err));
  };

  // ====== UPDATE ======
  const updateNotification = (id: number): void => {
    if (!newNote.trim()) return;

    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id
          ? { ...n, title: newNote, body: "Updated notification", createdAt: Date.now() }
          : n
      )
    );

    updateNotificationApi(id, {
      title: newNote,
      body: "Updated notification",
    })
      .then(() => {
        setEditId(null);
        setNewNote("");
      })
      .catch((err: any) => console.error(err));
  };

  // ====== DELETE (local only) ======
  const deleteNotification = (id: number): void => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleEdit = (note: Notification): void => {
    setEditId(note.id);
    setEditText(note.title);
    setNewNote(note.title);
  };

  return {
    notifications,
    newNote,
    editId,
    editText,
    setNewNote,
    setEditId,
    setEditText,
    formatTimeAgo,
    addNotification,
    updateNotification,
    deleteNotification,
    handleEdit,
  };
}

export default useNotifications;
