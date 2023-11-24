import React from 'react';
function UseCase1() {

    const height = 200;
    const imageUrl = "https://www.financialexpress.com/wp-content/uploads/2022/12/Untitled-design-2022-12-26T175848.948.jpg";
    const name = "Internshala.com"
    const ele1 = <h1>Hello JSX</h1> //JSX
    const ele2 = <h1>Hello {name}</h1> //JSX with expression
    return (
        <div>
            {ele1}
            {ele2}
            <img src={imageUrl} alt='A Company Logo' height={height} />
            {/* JSX with Attribute of image tag */}
        </div>);
}

export default UseCase1;