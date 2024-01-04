import React from 'react';
function UseCase1() {
    const height=200;
    const imgUrl='https://cdn5.vectorstock.com/i/1000x1000/88/19/flat-design-banner-of-e-commerce-and-e-shopping-vector-21068819.jpg';
    const name= "Intershala";
    const ele1=<h1>Hello JSX!!!</h1>
    const ele2= <h2>Welcome {name} </h2>
    return ( 
        <div>
            {ele1}
            {ele2}
            <img src={imgUrl} height={height} />
            {/* JSX with Attributes of Image Tag */}
        </div>
     );
}

export default UseCase1;