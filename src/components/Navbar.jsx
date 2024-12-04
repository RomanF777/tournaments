// export const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <img src="https://www.databank.lv/assets/images/logo.png" alt="Logo" />
//         </nav>
//     );
// };

import React from 'react';
import { Link, useLocation } from 'react-router-dom';  // Import Link and useLocation

export const Navbar = () => {
  const location = useLocation();  // Get current location (current route)

  return (
    <nav className="navbar">
        <Link to="/">
            <img src="https://www.databank.lv/assets/images/logo.png" alt="Logo" />
        </Link>      
      {/* Check if the current route is not '/' */} 
      {location.pathname !== '/' && (
        <div className="navbar-links">
          <Link to="/tournaments">Tournaments</Link>
          <Link to="/recent">Recent</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/create">Create</Link>
        </div>
      )}
    </nav>
  );
};
