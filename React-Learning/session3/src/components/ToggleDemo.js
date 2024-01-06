import React, { useState } from 'react';

function ToggleDemo() {

    const [isToggled, setIsToggled] = useState(true);

    const handleToggle=()=>{
        setIsToggled(!isToggled)
    }
    return ( 
        <div>
            <button onClick={handleToggle}>{isToggled? 'Follow':'UnFollow'}</button>
        </div>
     );
}

export default ToggleDemo;