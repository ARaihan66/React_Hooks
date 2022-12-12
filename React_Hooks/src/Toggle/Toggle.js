import React, { useState } from 'react'

const Toggle = () => {
    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            {toggle && <p>My name is Mohammed Musfikur Rahim but everyone calls me Rahim. I am 13 and read in class six. I live at Kaptai in the Rangamati district. My school name is BK Nurul Huda High school. I do my homework and study every day. I study in the evening from 6.00 pm to 10.00 pm. My favourite subject is English. I live with my parents.</p>}

            <button onClick={handleClick}>{toggle ? "HIDE" : "SHOW"}</button>
        </div>
    )
}

export default Toggle
