// src/components/NotificationCard.js

// import React from "react";

// function NotificationCard({
//     note,
//   editId,
//   editText,
//   setEditId,
//   setEditText,
//   setNewNote,   
//   updateNotification,
//   deleteNotification,
//   formatTimeAgo,
// }) {
//   const handleEdit = () => {
//   setEditId(note.id);
//   setEditText(note.title);
//   setNewNote(note.title);  
// };


//   return (
//     <article className="note">
//       <div className="note-body">
//         <h3>{note.title}</h3>
//         <p>{note.body}</p>
//         <div className="btn-group">
//           <button className="btn edit-btn" onClick={handleEdit}>
//             Edit
//           </button>
//           <button
//             className="btn delete-btn"
//             onClick={() => deleteNotification(note.id)}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//       <time>{formatTimeAgo(note.createdAt)}</time>
//     </article>
//   );
// }

// export default NotificationCard;






// // src/components/NotificationCard.tsx
import React from "react";
import { Notification } from "../types";
import { useTranslation } from "react-i18next";

interface NotificationCardProps {
  note: Notification;
  editId: number | null;
  editText: string;
  setEditId: React.Dispatch<React.SetStateAction<number | null>>;
  setEditText: React.Dispatch<React.SetStateAction<string>>;
  setNewNote: React.Dispatch<React.SetStateAction<string>>;
  updateNotification: (id: number) => void;
  deleteNotification: (id: number) => void;
  formatTimeAgo: (timestamp: number) => string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  note,
  editId,
  editText,
  setEditId,
  setEditText,
  setNewNote,
  updateNotification,
  deleteNotification,
  formatTimeAgo,
}) => {
  const { t } = useTranslation();

  const handleEdit = () => {
    setEditId(note.id);
    setEditText(note.title);
    setNewNote(note.title);
  };

  return (
    <article className="note">
      <div className="note-body">
        <h3>{note.title}</h3>
        {/* <p>{note.body}</p> */}
        <p>{note.bodyKey ? t(note.bodyKey) : note.body}</p>

        <div className="btn-group">
          <button className="btn edit-btn" onClick={handleEdit}>
            {t("edit")}
          </button>
          <button
            className="btn delete-btn"
            onClick={() => deleteNotification(note.id)}
          >
            {t("delete")}
          </button>
        </div>
      </div>
      <time>{formatTimeAgo(note.createdAt)}</time>
    </article>
  );
};

export default NotificationCard;
