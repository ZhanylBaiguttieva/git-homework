import React from "react";
interface Props {
    number: number;
}
const Ball: React.FC<Props> = ({number}) => {
    return (
        <div className="ballNumber">
            <p>{number}</p>
        </div>
    )
};

export  default Ball;