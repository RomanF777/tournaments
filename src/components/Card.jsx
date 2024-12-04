import React from 'react';

export const Card = ({ cardText, cardImage }) => {
    return (
        <div className="card">
            <div className="card_image">
                <img src={cardImage} alt={cardText} />
            </div>
            <div className="card_text">
                <h2>{cardText}</h2>
            </div>
        </div>
    );
};
