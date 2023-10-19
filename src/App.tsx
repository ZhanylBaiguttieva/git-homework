import Ball from "./Ball/Ball";
import './App.css';
import {useState} from "react";

function App() {
    const numberArray: number[] = [5,11,16,23,32];

    const [balls, setBalls] = useState([
        {number: numberArray[0]},
        {number: numberArray[1]},
        {number: numberArray[2]},
        {number: numberArray[3]},
        {number: numberArray[4]},
    ]);
    const changeNumber = () => {
        let array = checkNumbers(numberArray.length);
        setBalls([
            {number: array[0]},
            {number: array[1]},
            {number: array[2]},
            {number: array[3]},
            {number: array[4]},
        ]);
    };

    const randomNumbers = () => {
        return Math.floor(Math.random() * 32) + 5;
    }

    const checkNumbers = (size:number) => {
        const array: number[] = [];
        while(array.length !== size) {
            let random = randomNumbers();
            if (!array.includes(random)) {
                array.push(random);
            }
        }
        return array.sort((a,b) => a-b);
    }

    return (
        <div className="App">
            <Ball number = {balls[0].number}></Ball>
            <Ball number = {balls[1].number}></Ball>
            <Ball number = {balls[2].number}></Ball>
            <Ball number = {balls[3].number}></Ball>
            <Ball number = {balls[4].number}></Ball>
            <div>
                <button onClick={changeNumber}> New numbers</button>
            </div>
        </div>
    )
}
export default App
