import React from 'react';
const MemChild =
    // React.memo(

        function MemChild({ count, onClick }) {
            console.log("Child Comp is rendering");
            return (
                <div>
                    <h2>This is my child component</h2>
                    <h4>Count: {count}</h4>
                </div>
            );
        }

    // )

export default MemChild;