import React, { useState } from 'react';
function UseCase3() {
    const [count,setCount]=useState(0);
    const [isToggled,setToggled]= useState(true);

    const handleToggle=()=>{
        setToggled(!isToggled);
        if(isToggled){
            setCount(count+1);
        }else{
            setCount(count-1);
        }
    }
    return ( 
        <div>
            <button onClick={handleToggle}>
                {isToggled? 'Follow' : 'Unfollow'}
            </button>
            {`No of Likes: ${count}`}
        </div>
     );
}

export default UseCase3;