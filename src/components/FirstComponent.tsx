'use client'
interface FirstComponentProps{
    message?: string;
    messageBotton?: string;
}

export const FirstComponent: React.FC<FirstComponentProps> = (props: FirstComponentProps) => {
    function handleClick(){
        console.log(props.messageBotton)
    }
    return(
        <div>
           { props.message }
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