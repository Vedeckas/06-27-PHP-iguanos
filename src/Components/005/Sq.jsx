import { useState } from "react"

function Sq(){

    const [sq, setSq] = useState([]);

    const addOne = _ => {
        setSq(s => [...s, 1]);
    }

    return (
        <div>
            <h1>Square</h1>
            <div className="sq-bin">
                {
                    sq.map((s, i) =>
                    <div key={i} className="sq"></div>
                    )
                }

            </div>
        </div>
    )
}