'use client'
export function FirstComponent(){
    function handleClick(){
        console.log("Click on botton")
    }
    return(
        <div>
            My first component
            <button onClick={handleClick}>Clique aqui</button>
        </div>
    )
}

export const ArrowFunction = () => {
    return(
        <h2>
            Arrow Function
        </h2>
    )
}