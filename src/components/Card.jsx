// import React from 'react';

// export const Card = ({ cardText, cardImage }) => {
//     return (
//         <div className="card">
//             <div className="card_image">
//                 <img src={cardImage} alt={cardText} />
//             </div>
//             <div className="card_text">
//                 <h2>{cardText}</h2>
//             </div>
//         </div>
//     );
// };

import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Card = ({ cardText, cardImage, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route); // Navigate to the specific route
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="card_image">
        <img src={cardImage} alt={cardText} />
      </div>
      <div className="card_text">
        <h2>{cardText}</h2>
      </div>
    </div>
  );
};

