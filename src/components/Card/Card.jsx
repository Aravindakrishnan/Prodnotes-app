import React from 'react'
import "./Card.css";
export default function Card() {
    return (
                    <div className="card">
            <div className="card__header">
                <h2 className="card__title">What is Time ?</h2>
            </div>
            <div className="card__body">
                <p className="card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consectetur sint possimus?</p>                
            </div>

            <div className="card__footer">
                <button className="card-icon warning"><ion-icon name="pencil-outline"></ion-icon></button>
                <button className="card-icon danger"><ion-icon name="trash-outline"></ion-icon></button>
            </div>
        </div>
    )
}
