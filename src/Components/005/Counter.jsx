import { useState } from "react";

    const setTo555 =_=> {
        setCount(555);
    }

function Counter(){

    return(
        <div>
            <h1>Count: {count}</h1>
            <button className="yellow"></button>
        </div>
    );
}

export default Counter;