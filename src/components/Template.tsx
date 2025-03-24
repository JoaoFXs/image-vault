
interface TemplateProps{
    children?: React.ReactNode
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
    return (
        <>
            //header
            <Header/>
            {props.children}

            //footer
        </>
    )
}

const Header: React.FC = () => {
    return(
        <header className="bg-indigo-950 text-white py-3">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-3xl font-bold">ImageVault</h1>
            </div>
        </header>
    )
}