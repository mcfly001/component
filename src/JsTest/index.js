import React, { useState, memo } from 'react';

const Demo = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>新增</button>
        </div>
    );
};

export default memo(Demo);
