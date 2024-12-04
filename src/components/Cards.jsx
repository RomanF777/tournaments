import React from 'react';
import { Card } from './Card'
import cards from '../data';

export const Cards = () => {
    return (
        <ul className='cards-container'>
        {
            cards.map((card) => {
                const { id, cardText, cardImage} = card;
                return (
                    <li key={id}>
                        <Card cardText={cardText} cardImage={cardImage} />
                    </li>
                );
            })
        }
        </ul>
    )
}