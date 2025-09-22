// src/components/Topbar.js

// import React from "react";
// import "../App.css";

// function Topbar() {
//   return (
//     <header className="topbar">
//       <div className="topbar-inner">
//         {/* Brand */}
//         <div className="brand">
//           <div className="brand-icon">
//             <svg viewBox="0 0 24 24" aria-hidden="true">
//               <circle cx="12" cy="12" r="10"></circle>
//               <path
//                 d="M7 12l3 3 7-7"
//                 fill="none"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               ></path>
//             </svg>
//           </div>
//           <span className="brand-name">Furqan LMS</span>
//         </div>

//         {/* Center nav pills */}
//         <nav className="tabbar" aria-label="Primary">
//           <button className="tab">
//             <span className="tab-ico">
//               <svg viewBox="0 0 24 24">
//                 <path d="M3 12h18M3 6h18M3 18h18" />
//               </svg>
//             </span>
//             <span>Dashboard</span>
//           </button>
//           <button className="tab">
//             <span className="tab-ico">
//               <svg viewBox="0 0 24 24">
//                 <path d="M4 4h16v6H4zM4 14h10v6H4z" />
//               </svg>
//             </span>
//             <span>Education</span>
//             <svg className="caret" viewBox="0 0 24 24">
//               <path d="M6 9l6 6 6-6" />
//             </svg>
//           </button>
//           <button className="tab">
//             <span className="tab-ico">
//               <svg viewBox="0 0 24 24">
//                 <path d="M3 7h18M3 12h18M3 17h18" />
//               </svg>
//             </span>
//             <span>Packages</span>
//           </button>
//         </nav>

//         {/* Right actions */}
//         <div className="actions">
//           <button className="icon-btn" aria-label="Search">
//             <svg viewBox="0 0 24 24">
//               <circle cx="11" cy="11" r="7" />
//               <path d="M20 20l-3.5-3.5" />
//             </svg>
//           </button>
//           <button className="pill-btn primary">
//             <svg className="bell" viewBox="0 0 24 24">
//               <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14v-3a6 6 0 10-12 0v3a2 2 0 01-.6 1.4L4 17h5" />
//               <path d="M9 21a3 3 0 006 0" />
//             </svg>
//             <span>Notifications</span>
//           </button>
//           <div className="avatar" aria-label="User"></div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Topbar;











// src/components/Topbar.tsx
import React from "react";
import "../App.css";

const Topbar: React.FC = () => {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        {/* Brand */}
        <div className="brand">
          <div className="brand-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path
                d="M7 12l3 3 7-7"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <span className="brand-name">Furqan LMS</span>
        </div>

        {/* Center nav pills */}
        <nav className="tabbar" aria-label="Primary">
          <button className="tab">
            <span className="tab-ico">
              <svg viewBox="0 0 24 24">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </span>
            <span>Dashboard</span>
          </button>
          <button className="tab">
            <span className="tab-ico">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16v6H4zM4 14h10v6H4z" />
              </svg>
            </span>
            <span>Education</span>
            <svg className="caret" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <button className="tab">
            <span className="tab-ico">
              <svg viewBox="0 0 24 24">
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </span>
            <span>Packages</span>
          </button>
        </nav>

        {/* Right actions */}
        <div className="actions">
          <button className="icon-btn" aria-label="Search">
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </button>
          <button className="pill-btn primary">
            <svg className="bell" viewBox="0 0 24 24">
              <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14v-3a6 6 0 10-12 0v3a2 2 0 01-.6 1.4L4 17h5" />
              <path d="M9 21a3 3 0 006 0" />
            </svg>
            <span>Notifications</span>
          </button>
          <div className="avatar" aria-label="User"></div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
