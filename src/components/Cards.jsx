// import React from 'react';
// import { Card } from './Card'
// import cards from '../data';

// export const Cards = () => {
//     return (
//         <ul className='cards-container'>
//         {
//             cards.map((card) => {
//                 const { id, cardText, cardImage} = card;
//                 return (
//                     <li key={id}>
//                         <Card cardText={cardText} cardImage={cardImage} />
//                     </li>
//                 );
//             })
//         }
//         </ul>
//     )
// }

import React from 'react';
import { Card } from './Card';

const cards = [
  { id: 1, cardImage: '/img/golden trophy.webp', cardText: 'Tournaments', route: '/tournaments' },
  { id: 2, cardImage: '/img/recent.jpg', cardText: 'Recent', route: '/recent' },
  { id: 3, cardImage: '/img/quiz.jpg', cardText: 'Quiz', route: '/quiz' },
  { id: 5, cardImage: '/img/plus.jpg', cardText: 'Create', route: '/create' },
];

export const Cards = () => {
  return (
    <ul className="cards-container">
      {cards.map((card) => (
        <li key={card.id}>
          <Card cardText={card.cardText} cardImage={card.cardImage} route={card.route} />
        </li>
      ))}
    </ul>
  );
};


