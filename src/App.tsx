import Ball from "./Ball/Ball";
import './App.css';
import {useState} from "react";

function App() {
    const [balls, setBalls] = useState([
        {number: 5},
        {number: 11},
        {number: 16},
        {number: 23},
        {number: 32},
    ]);
    const changeNumber = () => {
        setBalls([
            {number: 6},
            {number: 12},
            {number: 18},
            {number: 25},
            {number: 38},
        ]);
    };

    return (
        <div className="App">
            <Ball number = {balls[0].number}></Ball>
            <Ball number = {balls[1].number}></Ball>
            <Ball number = {balls[2].number}></Ball>
            <Ball number = {balls[3].number}></Ball>
            <Ball number = {balls[4].number}></Ball>

            <div>
                <button onClick={changeNumber}> Change number</button>
            </div>
        </div>
    )
}

export default App
