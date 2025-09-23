//src/pages/NotificationsPages.js

// import React from "react";
// import useNotifications from "../hooks/useNotifications";
// import Topbar from "../components/Topbar";
// import AddNotification from "../components/AddNotification";
// import NotificationCard from "../components/NotificationCard";

// const NotificationsPage = () => {
//     const {
//         notifications,
//         newNote,
//         editId,
//         editText,
//         setNewNote,
//         setEditId,
//         setEditText,
//         formatTimeAgo,
//         addNotification,
//         updateNotification,
//         deleteNotification,
//     } = useNotifications();

//     return (
//         <>
//             {/* Topbar */}
//             <Topbar />

//             {/* Main Page */}
//             <main className="page">
//                 <div className="page-header">
//                     <h1 className="page-title">Notifications</h1>
//                     <button className="mark-read">Mark all as read</button>
//                 </div>

//                 <div className="notifications-wrapper">
//                     {/* Add Notification */}
//                     <AddNotification
//                         newNote={newNote}
//                         setNewNote={setNewNote}
//                         addNotification={addNotification}
//                         editId={editId}
//                         editText={editText}
//                         setEditId={setEditId}
//                         setEditText={setEditText}
//                         updateNotification={updateNotification}
//                     />

//                     {/* Notifications List */}
//                     <section className="section">
//                         <div className="section-label">Today</div>
//                         {notifications.map((note) => (
//                             <NotificationCard
//                                 key={note.id}
//                                 note={note}
//                                 editId={editId}
//                                 editText={editText}
//                                 setEditId={setEditId}
//                                 setEditText={setEditText}
//                                 setNewNote={setNewNote}   
//                                 updateNotification={updateNotification}
//                                 deleteNotification={deleteNotification}
//                                 formatTimeAgo={formatTimeAgo}
//                             />
//                         ))}
//                     </section>
//                 </div>
//             </main>
//         </>
//     );
// };

// export default NotificationsPage;









//src/pages/NotificationPages.tsx
import React from "react";
import useNotifications from "../hooks/useNotifications";
import Topbar from "../components/Topbar";
import AddNotification from "../components/AddNotification";
import NotificationCard from "../components/NotificationCard";
import { Notification } from "../types";
import { useTranslation } from "react-i18next";

const NotificationsPage: React.FC = () => {
  const {
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
  } = useNotifications();

  const { t } = useTranslation();

  return (
    <>
      <Topbar />

      <main className="page">
        <div className="page-header">
          <h1 className="page-title">{t("notifications")}</h1>
          <button className="mark-read">{t("markRead")}</button>
        </div>

        <div className="notifications-wrapper">
          <AddNotification
            newNote={newNote}
            setNewNote={setNewNote}
            addNotification={addNotification}
            editId={editId}
            editText={editText}
            setEditId={setEditId}
            setEditText={setEditText}
            updateNotification={updateNotification}
          />

          <section className="section">
            <div className="section-label">{t("today")}</div>
            {notifications.map((note: Notification) => (
              <NotificationCard
                key={note.id}
                note={note}
                editId={editId}
                editText={editText}
                setEditId={setEditId}
                setEditText={setEditText}
                setNewNote={setNewNote}
                updateNotification={updateNotification}
                deleteNotification={deleteNotification}
                formatTimeAgo={formatTimeAgo}
              />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default NotificationsPage;
