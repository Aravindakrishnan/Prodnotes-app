import React from 'react'
import Card from '../Card/Card';
import "./TextContainer.css";
export default function TextContainer() {
    return (
        <div className="container">
            <form className="text-container">
                <input type="text" placeholder="Title" />
                <textarea  name="" id="" placeholder="Type something..."></textarea>
                <button className="btn">Add 🌟</button>
            </form>

            <div className="card-container">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>

        </div>
    )
}
