import React, { useEffect, useState } from 'react';

function About() {

    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>resp.json())
        .then((data1)=>setData(data1))
        .catch((err)=>console.log(err))
    })
    return ( 
        <div>
            <h1>About components</h1>
            <hr />
            {
                data.map((item)=>(
                    <p key={item.id}>{item.id} {item.name} {item.username}</p>
                ))
            }
        </div>
     );
}

export default About;