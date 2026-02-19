import React, { useEffect, useState } from "react";

function Count_Check() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('#3498db');

    const change_color = () => {
        const rand = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setColor(rand);
    };

    const Handle_increase = () => {
        setCount(count + 1);  
        change_color();
    };

    useEffect(() => {
        change_color();
        document.body.style.backgroundColor = color;
    }, [count]);

    return (
        <div style={{ color }}>
            <button onClick={Handle_increase}>
                Count: {count}
            </button>
        </div>
    );
}

export default Count_Check;
