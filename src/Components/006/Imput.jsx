import { useState } from "react";
function imput() {
    
    const {text, setText} = useState ('');

    const handleChange = e => {
        setText(e.target.value);
    }

    return (
        <fieldset>
            <legend>One text imput</legend> 
        </fieldset>
    )
}