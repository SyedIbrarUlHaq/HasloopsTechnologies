// src/components/AddNotification.js

// import React from "react";

// function AddNotification({
//     newNote,
//     setNewNote,
//     addNotification,
//     editId,
//     editText,
//     setEditId,
//     setEditText,
//     updateNotification,
// }) {
//     return (
//         <div className="bar">
//             <input
//                 type="text"
//                 placeholder="Add new notification"
//                 value={newNote}
//                 onChange={(e) => setNewNote(e.target.value)}
//                 className="input-box"
//             />

//             {/* Button logic */}
//             {editId ? (
//                 <>
//                     <button
//                         className="btn save-btn"
//                         onClick={() => updateNotification(editId)} //  function call
//                     >
//                         Save
//                     </button>

//                     <button
//                         className="btn cancel-btn"
//                         onClick={() => {
//                             setEditId(null);   // exit edit mode
//                             setEditText("");   // clear edit text
//                             setNewNote("");    // clear input
//                         }}
//                     >
//                         Cancel
//                     </button>
//                 </>
//             ) : (
//                 <button className="btn add-btn" onClick={addNotification}>
//                     Add
//                 </button>
//             )}
//         </div>
//     );
// }

// export default AddNotification;






// //src/components/AddNotification.tsx
// import React from "react";

// interface AddNotificationProps {
//   newNote: string;
//   setNewNote: (value: string) => void;
//   addNotification: () => void;
//   editId: number | null;
//   editText: string;
//   setEditId: (id: number | null) => void;
//   setEditText: (value: string) => void;
//   updateNotification: (id: number) => void;
// }

// const AddNotification: React.FC<AddNotificationProps> = ({
//   newNote,
//   setNewNote,
//   addNotification,
//   editId,
//   editText,
//   setEditId,
//   setEditText,
//   updateNotification,
// }) => {
//   return (
//     <div className="bar">
//       <input
//         type="text"
//         placeholder="Add new notification"
//         value={newNote}
//         onChange={(e) => setNewNote(e.target.value)}
//         className="input-box"
//       />

//       {editId ? (
//         <>
//           <button
//             className="btn save-btn"
//             onClick={() => updateNotification(editId)}
//           >
//             Save
//           </button>

//           <button
//             className="btn cancel-btn"
//             onClick={() => {
//               setEditId(null);
//               setEditText("");
//               setNewNote("");
//             }}
//           >
//             Cancel
//           </button>
//         </>
//       ) : (
//         <button className="btn add-btn" onClick={addNotification}>
//           Add
//         </button>
//       )}
//     </div>
//   );
// };

// export default AddNotification;












//src/components/AddNotification.tsx

import React from "react";
import { useTranslation } from "react-i18next";

interface AddNotificationProps {
  newNote: string;
  setNewNote: (value: string) => void;
  addNotification: () => void;
  editId: number | null;
  editText: string;
  setEditId: (id: number | null) => void;
  setEditText: (value: string) => void;
  updateNotification: (id: number) => void;
}

const AddNotification: React.FC<AddNotificationProps> = ({
  newNote,
  setNewNote,
  addNotification,
  editId,
  editText,
  setEditId,
  setEditText,
  updateNotification,
}) => {
  const { t } = useTranslation();

  return (
    <div className="bar">
      <input
        type="text"
        placeholder={t("add_new_notification")}
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        className="input-box"
      />

      {editId ? (
        <>
          <button
            className="btn save-btn"
            onClick={() => updateNotification(editId)}
          >
            {t("save")}
          </button>

          <button
            className="btn cancel-btn"
            onClick={() => {
              setEditId(null);
              setEditText("");
              setNewNote("");
            }}
          >
            {t("cancel")}
          </button>
        </>
      ) : (
        <button className="btn add-btn" onClick={addNotification}>
          {t("add")}
        </button>
      )}
    </div>
  );
};

export default AddNotification;
